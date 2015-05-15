class Card < ActiveRecord::Base
  validates :deck_id, :front, :back, :score, presence: true
  after_initialize :default_score
  belongs_to :deck
  
  
  private
  def default_score
    self.score ||= 0
  end
end