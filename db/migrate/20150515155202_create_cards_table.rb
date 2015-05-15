class CreateCardsTable < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.text :front, null: false
      t.text :back, null: false
      t.integer :score, null: false
    end
    
  end
end
