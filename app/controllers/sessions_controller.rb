class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
                 params[:user][:email],
                 params[:user][:password])
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ["Bad email/password combination"]
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
  
  def twitter_signin
    @user = User.find_or_create_by_auth(auth_hash)
    login!(@user)
    redirect_to user_url(@user)
    
  end
  
  
  def guest
    
    @user = User.find_by_credentials("Guest", "password")
    
    login!(@user)
    redirect_to user_url(@user)
    
  end
  
  private 
  def auth_hash
    request.env["omniauth.auth"]
  end
  
end
