import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send notitifications', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'fake-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
