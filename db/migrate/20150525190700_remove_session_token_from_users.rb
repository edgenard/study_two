# frozen_string_literal: true

class RemoveSessionTokenFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :session_token, :string
  end
end
