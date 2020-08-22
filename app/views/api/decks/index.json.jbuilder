# frozen_string_literal: true

json.array! @decks do |deck|
  json.extract! deck, :id, :title, :description, :user_id, :average_score, :next_time_in_words
  json.cards do
    json.array! deck.cards do |card|
      json.extract! card, :id, :deck_id, :front, :back, :score, :streak, :front_image_url, :back_image_url, :due_date_in_words, :due_date
    end
  end
  json.due_cards do
    json.array! deck.next_due_cards do |card|
      json.extract! card, :id, :deck_id, :front, :back, :score, :streak, :front_image_url, :back_image_url, :due_date_in_words, :due_date
    end
  end
end
