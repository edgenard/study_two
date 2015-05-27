class RootController < ApplicationController
  before_action :check_currentuser
  def root
    render :welcome
  end
  
  private 
  def check_currentuser
    redirect_to study_space_url if current_user
  end
  
end