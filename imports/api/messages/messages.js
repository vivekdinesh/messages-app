import { Mongo } from "meteor/mongo";

export const Messages = new Mongo.Collection("messages");

Messages.allow({
  insert(userId, doc) {
    // The user must be logged in and the document must be owned by the user.
    return userId && doc.owner === userId;
  }
});

Messages.deny({
  update() {
    // Deny all updates from client side
    return true;
  },

  remove() {
    // Deny all deletes from client side
    return true;
  }
});
