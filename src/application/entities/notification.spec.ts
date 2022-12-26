import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'fake-category',
      recipientId: 'fake-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
