class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6}
  
  after_initialize :ensure_session_token
  
  def self.generate_token
    SecureRandom::urlsafe_base64
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by(:email, email)
    return nil unless user
    
    user.is_password?(password) ? user : nil
  end
  
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_token
    self.save!
    self.session_token
  end
  
  private
  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end
  
end
