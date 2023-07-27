class PackingListController < ApplicationController
  def index
    # @response = Chatgpt.call(params[:message])
  end

  def packing_list
    @response = Chatgpt.call(params[:message])

    render json: { response: @response }
  end
end