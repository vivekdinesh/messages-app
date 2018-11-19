import { Messages } from "./messages.js";

Meteor.methods({
  "messages.remove"(messageId) {
    check(messageId, String);

    // Ensure user is logged in
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    const message = Messages.findOne({ _id: messageId });

    // Check if message is owned by the current user before delete
    if (message && message.owner === Meteor.userId()) {
      Messages.remove(messageId);
    }
  }
});
