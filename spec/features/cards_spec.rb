require 'rails_helper'

RSpec.feature "Cards", type: :feature do
  let :create_user do
    visit "/users/new"
    fill_in "user[email]", with: "decks@example.com"
    fill_in "user[password]", with: "password"

    click_button "Get Beiged"
  end

  let :create_deck do
    click_link "New Deck"
    fill_in "deck[title]", with: "Just created deck"
    fill_in "deck[description]", with: "A test deck"
    click_button "Save and Close"
  end

  before :each do
    Capybara.current_driver = :selenium
    create_user
  end

  scenario "add card to deck" do
    create_deck
    click_link "Edit Deck"

    click_button "Add Card"
    card_front = find("#card_front")
    card_front.set("Front")

    card_back = find("#card_back")
    card_back.set("Back")

    click_button "Save and Close"

    expect(page).to have_content "Edit Card"
  end
end
