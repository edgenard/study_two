class AddStreakAndDueDateToCards < ActiveRecord::Migration
  def change
    add_column :cards, :streak, :integer
    add_column :cards, :due_date, :datetime
  end
end
