# frozen_string_literal: true

require "rails_helper"

RSpec.feature "DeckCreations", type: :feature do
  let(:create_user) do
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

    scenario "unsuccessfully creating a deck" do
      click_link "New Deck"

      fill_in "deck[title]", with: ""
      fill_in "deck[description]", with: "not title"
      click_button "Save and Close"

      expect(page).to have_content "Title can't be blank"
    end
  end

  describe "editing a deck" do
    let :create_deck do
      click_link "New Deck"
      fill_in "deck[title]", with: "Just created deck"
      fill_in "deck[description]", with: "A test deck"
      click_button "Save and Close"
    end

    scenario "successfully editing a deck" do
      create_deck
      click_link "Edit Deck"

      fill_in "deck[title]", with: "Edited this deck"
      click_link "X"

      expect(page).to have_content "Edited this deck"
    end

    scenario "unsuccessfully editing a deck" do
      create_deck
      click_link "Edit Deck"

      fill_in "deck[title]", with: ""
      fill_in "deck[description]", with: "No title"
      click_link "X"
      visit current_path

      expect(page).to have_content "Just created deck"
    end
  end
end
