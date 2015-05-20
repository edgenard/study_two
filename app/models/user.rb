class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  
  has_many :decks, dependent: :destroy
  
  after_initialize :ensure_session_token
  
  def self.generate_token
    SecureRandom::urlsafe_base64
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    
    user.is_password?(password) ? user : nil
  end
  
  def self.find_or_create_by_auth(auth_hash)
    user = User.find_by(
          provider: auth_hash[:provider],
          uid: auth_hash[:uid])
    unless user
      user_email = auth_hash[:info][:nickname] + "@twitter.login"
      user = User.create!(
      provider: auth_hash[:provider],
      uid: auth_hash[:uid],
      email: user_email,
      password: SecureRandom::base64
      )
    end
    
    user
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
  
  def name
    self.email.match(/^[^@]*/)[0]
  end
  
  private
  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end
  
end
