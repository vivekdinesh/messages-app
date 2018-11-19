import { Template } from "meteor/templating";

import { Messages } from "../../api/messages/messages.js";

import "./message-board.html";

import "./message-board-item/message-board-item.js";

Template.messageBoard.onCreated(function messageBoardOnCreated() {
  Meteor.subscribe("messages");
});

Template.messageBoard.helpers({
  messages() {
    return Messages.find({}, { sort: { createdAt: -1 } });
  }
});

Template.messageBoard.events({
  "submit .new-message"(event) {
    event.preventDefault();
    const target = event.target;
    const message = target.messageText.value;

    // Post message without an explicit server side call
    Messages.insert({
      message,
      createdAt: new Date(),
      owner: Meteor.userId()
    });

    target.messageText.value = "";
  }
});
