class Api::CardsController < ApplicationController
  
  def create
    @card = Card.new(card_params);
    if @card.save
      render json: @card
    else
      # flash.now[:errors] = ["You need a front and back"]
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      # flash.now[:errors] = ["What happened to back and/or front?"]
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
    params.require(:card).permit(:deck_id, :front, :back, :score, :front_image, :back_image)
  end
  
  
end