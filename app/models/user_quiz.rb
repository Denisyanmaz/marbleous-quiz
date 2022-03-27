class UserQuiz < ApplicationRecord
  belongs_to :quiz
  belongs_to :user

  has_many :user_choices
end
