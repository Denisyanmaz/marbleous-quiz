    class OptionsController < ApplicationController
      skip_before_action :authenticate_user!

      def index
        options = Option.all

        render json: OptionSerializer.new(options).serialized_json
      end

      def show
        option = Option.find_by(id: params[:id])

        render json: OptionSerializer.new(option).serialized_json
      end

      def create
        option = Option.new(option_params)

        if option.save
          render json: OptionSerializer.new(option).serialized_json
        else
          render json: { error: option.errors.messages }, status: 422
        end
      end

      def update
        option = Option.find_by(id: params[:id])

        if option.update(option_params)
          render json: OptionSerializer.new(option).serialized_json
        else
          render json: { error: option.errors.messages }, status: 422
        end
      end

      def destroy
        option = Option.find_by(id: params[:id])

        if option.destroy
          head :no_content
        else
          render json: { error: option.errors.messages }, status: 422
        end
      end

      private

      def option_params
        params.require(:option).permit(:content, :question_id)
      end
    end
