class Api::CardsController < ApplicationController
  
  def create
    @card = Card.new(card_params);
    if @card.save
      render json: @card
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    @card = Card.find(params[:id]);
    @card.destroy
    render json: @card
  end
  
  def show
    @card = Card.find(params[:id])
    render json: @card
  end
  
  private
  def card_params
    params.require(:card).permit(:deck_id, :front, :back, :score)
  end
  
  
end