class QuizzesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    quizzes = Quiz.all
    render json: QuizSerializer.new(quizzes, options).serialized_json
  end

  def show
    quiz = Quiz.find_by(id: params[:id])
    render json: QuizSerializer.new(quiz, options).serialized_json
  end

  def create
    quiz = Quiz.new(quiz_params)

    if quiz.save
      render json: QuizSerializer.new(quiz, options).serialized_json
    else
      render json: { error: quiz.errors.messages }, status: 422
    end
  end

  def update
    quiz = Quiz.find_by(id: params[:id])

    if quiz.update(quiz_params)
      render json: QuizSerializer.new(quiz, options).serialized_json
    else
      render json: { error: quiz.errors.messages }, status: 422
    end
  end

  def destroy
    quiz = Quiz.find_by(id: params[:id])

    if quiz.destroy
      head :no_content
    else
      render json: { error: quiz.errors.messages }, status: 422
    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :image_path)
  end

  def options
    @options ||= { include: %i[questions] }
  end
end
