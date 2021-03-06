# frozen_string_literal: true

class Api::DecksController < ApplicationController
  before_action :check_logged_in

  def create
    @deck = Deck.new(deck_params)
    @deck.user_id = current_user.id
    if @deck.save
      render json: @deck
    else

      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render json: @deck
  end

  def show
    @deck = Deck.find(params[:id])
    render json: @deck
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update(deck_params)
      render json: @deck
    else
      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
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
    params.require(:deck).permit(:title, :description, :user_id)
  end
end
