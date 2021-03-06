# frozen_string_literal: true

class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, uniqueness: true

  has_many :decks, dependent: :destroy

  has_many :sessions

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth(auth_hash)
    user = User.find_by(
      provider: auth_hash[:provider],
      uid: auth_hash[:uid]
    )
    unless user
      user_email = auth_hash[:info][:nickname] + "@twitter.login"
      user = User.create!(
        provider: auth_hash[:provider],
        uid: auth_hash[:uid],
        email: user_email,
        password: SecureRandom.base64
      )
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def name
    email.match(/^[^@]*/)[0]
  end
end
