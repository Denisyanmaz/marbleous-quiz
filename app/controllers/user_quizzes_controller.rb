    class UserQuizzesController < ApplicationController
      skip_before_action :authenticate_user!

      def index
        user_quizzes = UserQuiz.all

        render json: UserQuizSerializer.new(user_quizzes, options).serialized_json
      end

      def show
        user_quiz = UserQuiz.find_by(id: params[:id])

        render json: UserQuizSerializer.new(user_quiz, options).serialized_json
      end

      def create
        user_quiz = UserQuiz.new(user_quiz_params)

        if user_quiz.save
          render json: UserQuizSerializer.new(user_quiz, options).serialized_json
        else
          render json: { error: user_quiz.errors.messages }, status: 422
        end
      end

      def update
        user_quiz = UserQuiz.find_by(id: params[:id])

        if user_quiz.update(user_quiz_params)
          render json: UserQuizSerializer.new(user_quiz, options).serialized_json
        else
          render json: { error: user_quiz.errors.messages }, status: 422
        end
      end

      def destroy
        user_quiz = UserQuiz.find_by(id: params[:id])

        if user_quiz.destroy
          head :no_content
        else
          render json: { error: user_quiz.errors.messages }, status: 422
        end
      end

      private

      def user_quiz_params
        params.require(:user_quiz).permit(:result, :is_done, :created_at, :quiz_id, :user_id)
      end

      def options
        @options ||= { include: %i[user_choices] }
      end
    end
