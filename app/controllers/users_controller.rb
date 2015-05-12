class UsersController < ApplicationController
  
  def create
    
  end
  
  def new
    @user = User.new
    render :new
  end
  
  
  def edit
    
  end
  
  def update
    
  end
  
  def destroy
    
  end
  
  private 
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end