import { Messages } from "../messages.js";

Meteor.publish("messages", function messagesPublication() {
  // Publish all messages
  return Messages.find();
});
