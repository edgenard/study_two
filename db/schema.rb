# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150521204531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer  "deck_id",                  null: false
    t.text     "front",                    null: false
    t.text     "back",                     null: false
    t.integer  "score",                    null: false
    t.string   "front_image_file_name"
    t.string   "front_image_content_type"
    t.integer  "front_image_file_size"
    t.datetime "front_image_updated_at"
    t.string   "back_image_file_name"
    t.string   "back_image_content_type"
    t.integer  "back_image_file_size"
    t.datetime "back_image_updated_at"
    t.integer  "streak"
    t.datetime "due_date"
  end

  create_table "decks", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "provider"
  end

  add_index "users", ["provider", "uid"], name: "index_users_on_provider_and_uid", unique: true, using: :btree

end
