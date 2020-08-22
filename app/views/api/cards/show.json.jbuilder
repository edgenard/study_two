# frozen_string_literal: true

json.extract! @card, :id, :deck_id, :front, :back, :score, :streak, :front_image_url, :back_image_url, :due_date_in_words, :due_date
