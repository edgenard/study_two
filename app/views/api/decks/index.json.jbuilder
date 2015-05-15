

  json.array! @decks do |deck|
    json.extract! deck, :id, :title, :description, :user_id, :average_score
    json.cards do
      json.array! deck.cards do |card|
        json.extract! card, :id, :deck_id, :front, :back, :score
      end
    end
  end
