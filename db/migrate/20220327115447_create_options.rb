class CreateOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :options do |t|
      t.string :content
      t.belongs_to :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
