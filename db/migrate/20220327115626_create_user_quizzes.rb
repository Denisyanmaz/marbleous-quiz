class CreateUserQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :user_quizzes do |t|
      t.integer :result
      t.boolean :is_done
      t.belongs_to :quiz, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
