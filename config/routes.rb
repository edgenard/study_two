StudyTwo::Application.routes.draw do

 root "root#root"
 
 resources :users
 
 resources :sessions
 
 namespace :api,  default: { format: :json} do
   resources :decks, only: [ :create, :destroy, :index, :show, :update]
   
 end
end
