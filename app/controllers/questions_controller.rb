    class QuestionsController < ApplicationController
      skip_before_action :authenticate_user!
      protect_from_forgery with: :null_session

      def index
        questions = Question.all

        render json: QuestionSerializer.new(questions, options).serialized_json
      end

      def show
        question = Question.find_by(id: params[:id])

        render json: QuestionSerializer.new(question, options).serialized_json
      end

      def create
        question = Question.new(question_params)

        if question.save
          render json: QuestionSerializer.new(question, options).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def update
        question = Question.find_by(id: params[:id])

        if question.update(question_params)
          render json: QuestionSerializer.new(question, options).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def destroy
        question = Question.find_by(id: params[:id])

        if question.destroy
          head :no_content
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      private

      def question_params
        params.require(:question).permit(:text, :category, :score, :quiz_id)
      end

      def options
        @options ||= { include: %i[options] }
      end
    end
