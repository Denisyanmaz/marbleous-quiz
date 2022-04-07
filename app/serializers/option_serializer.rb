class OptionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :question_id

  has_many :user_choices
end
