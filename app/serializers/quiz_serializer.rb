class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_path

  has_many :questions
  has_many :user_quizzes
end
