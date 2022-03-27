class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.string :description
      t.string :image_path

      t.timestamps
    end
  end
end