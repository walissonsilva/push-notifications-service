import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
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
    expect(notifications).toHaveLength(1);
  });
});
