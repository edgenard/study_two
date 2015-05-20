

  json.array! @decks do |deck|
    json.extract! deck, :id, :title, :description, :user_id, :average_score
    json.cards do
      json.array! deck.cards do |card|
        json.extract! card, :id, :deck_id, :front, :back, :score, :front_image_url, :back_image_url
      end
    end
  end
