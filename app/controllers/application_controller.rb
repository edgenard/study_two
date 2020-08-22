# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil if session[:session_token].nil?

    current_session = Session.find_by(session_token: session[:session_token])
    @current_user = User.find(current_session.user_id)
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    new_session = Session.create(user_id: user.id)
    session[:session_token] = new_session.reset_session_token!
    @current_user = user
  end

  def logout!
    current_session = Session.find_by(user_id: current_user.id)
    current_session.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
