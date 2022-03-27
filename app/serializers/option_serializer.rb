class OptionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :is_true, :question_id

  has_many :user_choices
end
