# frozen_string_literal: true

class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.integer :user_id, null: false
      t.string :session_token, null: false
    end
    add_index :sessions, %i[user_id session_token]
  end
end
