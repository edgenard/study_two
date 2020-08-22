# frozen_string_literal: true

class RootController < ApplicationController
  def root
    render :welcome
  end
end
