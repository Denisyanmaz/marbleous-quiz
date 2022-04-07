class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :category, :correct_answer, :quiz_id

  has_many :options
end
