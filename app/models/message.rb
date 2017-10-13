class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  after_create :broadcast_message

  validates :content, presence: true

  def render_clean_json
    { id: id,
       author: user.email,
       content: content,
       created_at: created_at,
       channel: channel.name
      }
  end

  private

  def broadcast_message
    ActionCable.server.broadcast("channel_#{channel.name}", self.render_clean_json)
  end

end
