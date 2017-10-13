class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    @messages = Message.select(['id','created_at'])
                       .where(channel: @channel)
                       .joins(:channel).select('name')
                       .joins(:user).select(['email as author', 'content'])
                       .order('created_at ASC')
    render json: @messages
  end

  def create
    @message = Message.new(
      user: current_user,
      channel: @channel,
      content: params[:content])
    @message.save

    render json: @message
  end

  private

  def set_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end


end
