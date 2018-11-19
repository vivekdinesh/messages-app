import { Template } from "meteor/templating";

import "./message-board-item.html";

Template.messageBoard.events({
  "click .delete-btn"() {
    Meteor.call("messages.remove", this._id);
  }
});
