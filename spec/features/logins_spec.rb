require 'rails_helper'

RSpec.feature "Logins", type: :feature do
  before :each do
    User.create(email: "user@example.com", password: "password")
  end
  describe "sign in" do
    scenario "valid credentials" do
      visit "/"
      click_link "Log In"
      fill_in "user[email]", with: "user@example.com"
      fill_in "user[password]", with: "password"

      click_button "Beige Right In!"

      expect(page).to have_content "Study Space"
    end

    scenario "invalid credentials" do
      visit "/"
      click_link "Log In"
      fill_in "user[email]", with: "user@example.com"
      fill_in "user[password]", with: "password1"

      click_button "Beige Right In!"

      expect(page).to have_content "Bad email/password combination"
    end
  end
end
