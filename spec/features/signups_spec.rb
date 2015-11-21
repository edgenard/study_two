require 'rails_helper'

RSpec.feature "Signups", type: :feature do

  describe "valid signup" do
    scenario "sign up with valid email and password" do
      visit  "/"
      click_link "Sign Up Now!"
      fill_in "user[email]", with: "user@example.com"
      fill_in "user[password]", with: "password"

      click_button "Get Beiged"

      expect(page).to have_content "Study Space"
    end
  end


 describe "invalid signups" do
   scenario " password that is too short" do
     visit "/"
     click_link "Sign Up Now!"
     fill_in "user[email]", with: "user@example.com"
     fill_in "user[password]", with: "pass"

     click_button "Get Beiged"

     expect(page).to have_content "Password is too short"
   end

 end

end

