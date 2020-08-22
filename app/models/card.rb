# frozen_string_literal: true

class Card < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  has_attached_file :front_image, default_url: nil, styles: {study: "265x115", medium: "175x75", thumb: " 50x50"}
  validates_attachment_content_type :front_image, content_type: %r{\Aimage/.*\Z}

  has_attached_file :back_image, default_url: nil, styles: {study: "265x115", medium: "175x75", thumb: " 50x50>"}
  validates_attachment_content_type :back_image, content_type: %r{\Aimage/.*\Z}

  validates :deck_id, :score, presence: true
  validate :has_front, :has_back
  after_initialize :default_score, :default_streak, :update_due_date
  belongs_to :deck

  after_update :update_due_date

  def front_image_url
    front_image.file? ? front_image.url : ""
  end

  def back_image_url
    back_image.file? ? back_image.url : ""
  end

  def due_date_in_words
    return "Today" if (due_date.to_i - Time.now.to_i) < 43_200

    distance_of_time_in_words_to_now(due_date)
  end

  def has_front
    unless !front.blank? || !front_image.blank?
      errors.add(:front, "Front can't be blank")
    end
  end

  def has_back
    unless !back.blank? || !back_image.blank?
      errors.add(:back, "Back can't be blank")
    end
  end

  private

  def default_score
    self.score ||= 0
  end

  def default_streak
    self.streak ||= 0
  end

  def update_due_date
    self.due_date = Time.at(Time.now.to_i + (86_400 * self.streak * self.score))
  end
end
