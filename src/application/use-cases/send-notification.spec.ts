import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notitifications', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'fake-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
