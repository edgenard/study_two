class Api::DecksController < ApplicationController
  before_action :check_logged_in
  
  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      render json: @deck
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    
  end
  
  def show
    
  end
  
  def update
    
  end
  
  def index
    @decks = current_user.decks
    render "index" 
  end
  
  def new
    
  end
  
  
  private
  def check_logged_in
    redirect_to new_session_url unless current_user
  end
  
  def deck_params
    params.require(:deck).permit(:title, :description,:user_id)
  end
  
end