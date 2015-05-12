class RootController < ApplicationController
  before_action :check_currentuser
  def root
    render :welcome
  end
  
  private 
  def check_currentuser
    redirect_to user_url(current_user) if current_user
  end
  
end