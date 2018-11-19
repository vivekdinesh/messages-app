import { Messages } from "../messages.js";

Meteor.publish("messages", function messagesPublication() {
  // Publish messages owned by the current user only
  return Messages.find({ owner: this.userId });
});
