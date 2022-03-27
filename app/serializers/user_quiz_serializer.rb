class UserQuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :result, :is_done, :created_at, :quiz_id, :user_id

  has_many :user_choices
end
