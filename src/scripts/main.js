'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageBlock.append(messageTitle);
  messageBlock.append(messageDescription);
  messageBlock.className = `notification ${type}`;
  messageBlock.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  messageTitle.className = 'title';
  messageTitle.innerText = title;
  messageTitle.style.fontSize = '18px';

  messageDescription.innerText = description;

  document.body.append(messageBlock);

  setTimeout(() => {
    messageBlock.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
