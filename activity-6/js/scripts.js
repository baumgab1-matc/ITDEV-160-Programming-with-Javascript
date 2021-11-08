var messages = [];

var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

var data = [
  {
    type: messageType.out,
    user: 'Brent',
    message: 'Hey, you want to jam this weekend?'
  },
  {
    type: messageType.in,
    user: 'Tyler',
    message: 'Yo! Yeah how about saturday?'
  },
  {
    type: messageType.out,
    user: 'Brent',
    message: "Cool, be over around noon!"
  }
];

//message object
class Message {
    constructor(type, user, message) {
        this.type = type;
        this.user = user;
        this.message = message;
    }
}

//creates message
function createMessageElement(message) {
  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);
  messageEl.className = message.type;

  return messageEl;
}

// button click handler
function addMessageHandler(event) {
  var user, type;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

  //set message based on case
  switch (event.target.id) {
    case 'send-button':
      user = 'Brent';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Tyler';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
  }

  // create new messages that are not empty
  if (messageInput.value != '') {
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messagesContainerEl.appendChild(el);

    messageInput.value = '';
  }
}

//loads data if there is any
function loadSeedData() {
  for (var i = 0; i < data.length; i++) {
    var message = new Message(data[i].type, data[i].user, data[i].message);
    messages.push(message);
  }

  // load messages into html
  var messagesContainerEl = document.getElementById('message-container');

  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    var el = createMessageElement(message)

    messagesContainerEl.appendChild(el);
  }
}

var init = function() {
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

  loadSeedData();
};

init();