class UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy, :show]
  
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def new
    @user = User.new
    render :new
  end
  
  def show
    @user = User.find(params[:id])
    render :show
  end
  
  
  def edit
    @user = User.find(params[:id])
    render :edit
  end
  
  def update
    @user = current_user
    if @user.update(user_params)
      flash[:notice] = "Successfuly Saved"
      redirect_to edit_user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @user = current_user
    @user.destroy
    flash[:notice] = "Goodbye!"
    redirect_to root_url
  end
  
  private 
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
  def require_login
    unless logged_in? && right_user
      flash[:notice] = "You must be logged in as the right user do this!"
      redirect_to new_session_url
    end
  end
  
  def right_user
    current_user.id == (params[:id]).to_i
  end
  
end