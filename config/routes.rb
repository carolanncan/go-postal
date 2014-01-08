LetterWritingRails::Application.routes.draw do
  root to: 'homes#index'

  get "static_pages/new"
  get "static_pages/edit"
  get "static_pages/new_send"
  get "static_pages/show"
end
