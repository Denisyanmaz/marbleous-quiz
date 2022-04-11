class UserChoiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_quiz_id, :option_id, :is_correct
end
