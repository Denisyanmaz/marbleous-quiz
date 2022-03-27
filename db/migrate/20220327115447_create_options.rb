class CreateOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :options do |t|
      t.string :content
      t.boolean :is_true
      t.belongs_to :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
