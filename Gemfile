source 'https://rubygems.org'
ruby "2.2.4"
gem 'rails', '~> 4.2.0'
gem 'pg'

gem 'sass-rails'
gem 'uglifier', '>= 1.3.0'

gem 'jquery-rails'

gem 'jbuilder', '~> 1.2'
gem 'bcrypt'

gem 'unicorn'

gem 'backbone-on-rails'

gem "paperclip"

gem "figaro"

gem 'aws-sdk', '~> 1.6'

gem "omniauth-twitter"

gem 'newrelic_rpm'

gem "autoprefixer-rails"

group :production do
  gem 'rails_12factor'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end




# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'quiet_assets'
  gem 'rename'
  gem 'byebug'
end

group :development, :test do
  gem 'simplecov', require: false
  gem 'rspec-rails'
  gem 'capybara'
  gem 'launchy'
  gem 'selenium-webdriver'
  gem 'database_cleaner'
end
