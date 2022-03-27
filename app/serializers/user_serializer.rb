class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :created_at

  has_many :user_quizzes
end
