# frozen_string_literal: true

class AddAttachmentFrontImageToCards < ActiveRecord::Migration
  def self.up
    change_table :cards do |t|
      t.attachment :front_image
    end
  end

  def self.down
    remove_attachment :cards, :front_image
  end
end
