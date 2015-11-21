require 'rails_helper'

RSpec.feature "Signups", type: :feature do
 scenario "sign up with valid email and password" do
   visit  "users/new"

   fill_in "user[email]", with: "user@example.com"
   fill_in "user[password]", with: "password"

   click_button 'Get Beiged'

  expect(page).to have_content "Study Space"
 end
end

