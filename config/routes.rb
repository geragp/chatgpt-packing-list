Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "packing_list#index"

  post '/packing_list', to: 'packing_list#packing_list'
end
