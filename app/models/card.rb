class Card < ActiveRecord::Base
  as_attached_file :picture, :styles => { :study => "265x115" ,:medium => "175x75>", :thumb => " 50x50>" }
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
  validates :deck_id, :front, :back, :score, presence: true
  after_initialize :default_score
  belongs_to :deck
  
  
  private
  def default_score
    self.score ||= 0
  end
end