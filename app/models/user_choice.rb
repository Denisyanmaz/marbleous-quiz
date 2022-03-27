class UserChoice < ApplicationRecord
  belongs_to :user_quiz
  belongs_to :option
end
