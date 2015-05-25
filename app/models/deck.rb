
class Deck < ActiveRecord::Base
  include ActionView::Helpers::DateHelper
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
  def next_time_in_words
    return "Today" if (get_earliest_time.to_i - Time.now.to_i) < 43200 
    "in " + distance_of_time_in_words_to_now(Time.at(get_earliest_time))
  end
  
  def next_due_cards
    earliest_time = get_earliest_time
    next_due = []
    self.cards.each do |card|
      next_due.push(card) if card.due_date == earliest_time
    end
    next_due
  end
  
  def get_earliest_time
    young_card_due_date = nil
    self.cards.each do |card|
      if !young_card_due_date
        young_card_due_date = card.due_date
      else
        if card.due_date < young_card_due_date
          young_card_due_date = card.due_date
        end
      end
    end
    return young_card_due_date
  end
  
  
  
end
