# frozen_string_literal: true

StudyTwo::Application.routes.draw do
  root "root#root"

  get "sessions/guest", to: "sessions#guest"

  resources :users, only: %i[edit update create destroy new]

  resources :sessions

  get "study_space", to: "users#show"

  namespace :api, defaults: {format: :json} do
    resources :decks, only: %i[create destroy index show update]
    resources :cards, only: %i[create destroy index show update]
  end

  get "auth/:provider/callback", to: "sessions#twitter_signin"
end
