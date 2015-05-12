StudyTwo::Application.routes.draw do

 root "root#root"
 
 resources :users
 
 resources :sessions
end
