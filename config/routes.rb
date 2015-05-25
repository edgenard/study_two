StudyTwo::Application.routes.draw do

 root "root#root"
 
 get "sessions/guest", to: "sessions#guest"
 
 resources :users
 
 resources :sessions
 
 
 namespace :api,  defaults: { format: :json} do
   resources :decks, only: [ :create, :destroy, :index, :show, :update]
   resources :cards, only: [:create, :destroy, :index, :show, :update]
   
 end
 
 get "auth/:provider/callback", to: "sessions#twitter_signin"
end
