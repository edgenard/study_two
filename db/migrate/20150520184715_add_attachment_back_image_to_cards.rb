# frozen_string_literal: true

class AddAttachmentBackImageToCards < ActiveRecord::Migration
  def self.up
    change_table :cards do |t|
      t.attachment :back_image
    end
  end

  def self.down
    remove_attachment :cards, :back_image
  end
end
