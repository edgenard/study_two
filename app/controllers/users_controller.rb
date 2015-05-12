class UsersController < ApplicationController
  
  
  def create
    @user = User.new(user_params)
    if @user.save
      login! @user
      flash[:notice] = "Welcome to StudyTwo!"
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
  
  
  def edit
    @user = current_user
    render :edit
  end
  
  def update
    @user = current_user
    if @user.update(user_params)
      flash.now[:notice] = "Successfuly Saved"
      render :edit
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @user = current_user
    
  end
  
  private 
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end