class Session < ActiveRecord::Base
  belongs_to :user
  validates :user_id, :session_token, presence: true
  after_initialize :ensure_session_token
  
  
  def self.generate_token
    SecureRandom::urlsafe_base64
  end
  
  
  
  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_token
    self.save!
    self.session_token
  end
  
  
  
end