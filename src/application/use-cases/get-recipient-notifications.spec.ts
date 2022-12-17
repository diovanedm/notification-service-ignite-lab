import { makeNotification } from '@test/factory/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('shoud be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient1' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient1' }),
      ]),
    );
  });
});
