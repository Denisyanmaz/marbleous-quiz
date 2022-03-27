class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :category, :score, :quiz_id

  has_many :options
end
