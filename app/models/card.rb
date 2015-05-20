class Card < ActiveRecord::Base
  has_attached_file :front_image, default_url: nil,  :styles => { :study => "265x115" ,:medium => "175x75", :thumb => " 50x50" }
  validates_attachment_content_type :front_image, :content_type => /\Aimage\/.*\Z/
  
  
  has_attached_file :back_image, default_url: nil, :styles => { :study => "265x115" ,:medium => "175x75", :thumb => " 50x50>" }
  validates_attachment_content_type :back_image, :content_type => /\Aimage\/.*\Z/
  
  validates :deck_id, :score, presence: true
  validate :has_front, :has_back
  after_initialize :default_score
  belongs_to :deck
  
  
  def front_image_url
    front_image.file? ? front_image.url : ""
  end
  
  
  def back_image_url
    back_image.file? ? back_image.url : ""
  end
  
  
  private
  def default_score
    self.score ||= 0
  end
  
  def has_front
    unless front || front_image
      errors.add(:front, "Front can't be blank");
    end
  end
  
  def has_back
    unless back || back_image
      errors.add(:back, "Back can't be blank")
    end
  end
end