    class UserChoicesController < ApplicationController
      skip_before_action :authenticate_user!
      protect_from_forgery with: :null_session

      def index
        user_choices = UserChoice.all

        render json: UserChoiceSerializer.new(user_choices).serialized_json
      end

      def show
        user_choice = UserChoice.find_by(id: params[:id])

        render json: UserChoiceSerializer.new(user_choice).serialized_json
      end

      def create
        user_choice = UserChoice.new(user_choice_params)

        if user_choice.save
          render json: UserChoiceSerializer.new(user_choice).serialized_json
        else
          render json: { error: user_choice.errors.messages }, status: 422
        end
      end

      def update
        user_choice = UserChoice.find_by(id: params[:id])

        if user_choice.update(user_choice_params)
          render json: UserChoiceSerializer.new(user_choice).serialized_json
        else
          render json: { error: user_choice.errors.messages }, status: 422
        end
      end

      def destroy
        user_choice = UserChoice.find_by(id: params[:id])

        if user_choice.destroy
          head :no_content
        else
          render json: { error: user_choice.errors.messages }, status: 422
        end
      end

      private

      def user_choice_params
        params.require(:user_choice).permit(:option_id, :user_quiz_id)
      end
    end
