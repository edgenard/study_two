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
    distance_of_time_in_words_to_now(Time.at(get_earliest_time))
  end
  
  def next_due_cards
    earliest_time = get_earliest_time
    next_due = []
    self.cards.each do |card|
      next_due.push(card) if card.due_date.to_i == earliest_time
    end
    next_due
  end
  
  def get_earliest_time
    now = Time.now.to_i
    next_due_time = nil
    shortest_time = nil
    self.cards.each do |card|
      due = card.due_date.to_i
      distance = due - now
      if shortest_time
        shortest_time = distance < shortest_time ? distance : shortest_time
         next_due_time = due if distance < shortest_time
      else
        shortest_time = distance
        next_due_time = due
      end
    end
    return next_due_time
  end
  
  
  
end
