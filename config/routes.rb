LetterWritingRails::Application.routes.draw do
  get "static_pages/home"
  get "static_pages/new_letter"
  root 'static_pages#home'

  get "static_pages/new"
end
