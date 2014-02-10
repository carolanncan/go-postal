LetterWritingRails::Application.routes.draw do
  resources :letters

  resources :users

  root 'static_pages#home'
  match '/signup',  to: 'users#new', via: 'get'
  get "static_pages/home"
  get "static_pages/dasboard"

end
