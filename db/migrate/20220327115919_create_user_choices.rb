class CreateUserChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :user_choices do |t|
      t.belongs_to :user_quiz, null: false, foreign_key: true
      t.belongs_to :option, null: false, foreign_key: true
      t.boolean :is_correct, null: false

      t.timestamps
    end
  end
end
