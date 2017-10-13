class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "channel_#{params[:name]}"
  end

end
