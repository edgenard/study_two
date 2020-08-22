# frozen_string_literal: true

class AddUidAndProviderToUsers < ActiveRecord::Migration
  def change
    add_column :users, :uid, :string
    add_column :users, :provider, :string
    add_index :users, %i[provider uid], unique: true
  end
end
