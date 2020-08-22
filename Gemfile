# frozen_string_literal: true

source "https://rubygems.org"
ruby "2.6.2"
gem "pg", "~>0.21"
gem "rails"

gem "sass-rails"
gem "uglifier"

gem "jquery-rails"

gem "bcrypt"
gem "jbuilder"

gem "backbone-on-rails"

gem "paperclip"

gem "figaro"

gem "aws-sdk-s3"

gem "omniauth-twitter"

gem "newrelic_rpm"

gem "autoprefixer-rails"

group :production do
  gem "rails_12factor"
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem "sdoc", require: false
end

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

group :development do
  gem "better_errors"
  gem "binding_of_caller"
  gem "byebug"
  gem "pry-rails"
  gem "quiet_assets"
  gem "rename"
end

group :development, :test do
  gem "capybara"
  gem "database_cleaner"
  gem "launchy"
  gem "puma"
  gem "rspec-rails"
  gem "selenium-webdriver"
  gem "simplecov", require: false
end
