class RootController < ApplicationController
  click Show Answer to rate how you did
  def root
    render :welcome
  end
  
  private 
  def check_currentuser
    redirect_to study_space_url if current_user
  end
  
end