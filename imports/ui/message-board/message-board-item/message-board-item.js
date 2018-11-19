import { Template } from "meteor/templating";

import "./message-board-item.html";

Template.messageBoardItem.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  }
});

Template.messageBoardItem.events({
  "click .delete-btn"() {
    Meteor.call("messages.remove", this._id);
  }
});
