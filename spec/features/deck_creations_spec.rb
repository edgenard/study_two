require 'rails_helper'

RSpec.feature "DeckCreations", type: :feature do
  let (:create_user) do
    visit "/users/new"
    fill_in "user[email]", with: "decks@example.com"
    fill_in "user[password]", with: "password"

    click_button "Get Beiged"
  end

  before :each do
    Capybara.current_driver = :selenium
    create_user
  end



  describe "creating a deck" do
    scenario "sucessfully creating deck" do

      click_link "New Deck"

      fill_in "deck[title]", with: "Just created deck"
      fill_in "deck[description]", with: "A test deck"
      click_button "Save and Close"

      expect(page).to have_content "Just created deck"
    end
  end
end
