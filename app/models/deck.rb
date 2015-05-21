class Deck < ActiveRecord::Base
  validates :title, :user_id, presence: true
  belongs_to :user
  has_many :cards, dependent: :destroy
  
  def average_score
    total_score = 0
    self.cards.each do |card|
      total_score += card.score
    end
    
    ((total_score.to_f / self.cards.length) * 100.0).round / 100.0
    
  end
  
  
  
  
end
