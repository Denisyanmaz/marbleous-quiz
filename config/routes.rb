Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  resources :user_quizzes
  resources :user_choices
  resources :quizzes
  resources :questions
  resources :options

  get '*path', to: 'pages#index', via: :all
end
