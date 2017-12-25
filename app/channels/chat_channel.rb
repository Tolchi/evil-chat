class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "chat"
  end

  # Called when message-from contents are received by the server
  def send_message(payload)
    message = Message.new(author: current_user, text: payload["message"])
    if message.save
      ActionCable.server.broadcast "chat", message: render(message)
    end
  end

  private

  def render(message)
    ApplicationController.new.helpers.c("message", message: message)
  end
end
