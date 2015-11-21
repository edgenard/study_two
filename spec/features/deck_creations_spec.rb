require 'rails_helper'

RSpec.feature "DeckCreations", type: :feature do
  let (:login_user) do
    visit "sessions/new"
    fill_in "user[email]", with: "user@exmaple.com"
    fill_in "user[password]", with: "password"

    click_button "Beige Right In!"
  end

  before :each do
    User.create(email: "user@example.com", password:"password")
    login_user
  end



  describe "creating a deck" do
    scenario "sucessfully creating deck" do
      click_link "New Deck"

      fill_in "deck[title]", with: "New deck"
      fill_in "deck[description]", with: "A test deck"
      click_button "Save and Close"

      expect(page).to have_content "New deck"
    end
  end
end
