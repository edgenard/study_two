class Card < ActiveRecord::Base
  has_attached_file :front_image, :styles => { :study => "265x115" ,:medium => "175x75>", :thumb => " 50x50>" }
  validates_attachment_content_type :front_image, :content_type => /\Aimage\/.*\Z/
  
  
  has_attached_file :back_image, :styles => { :study => "265x115" ,:medium => "175x75>", :thumb => " 50x50>" }
  validates_attachment_content_type :back_image, :content_type => /\Aimage\/.*\Z/
  
  validates :deck_id, :score, presence: true
  validate :has_front, :has_back
  after_initialize :default_score
  belongs_to :deck
  
  
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