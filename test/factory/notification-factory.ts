import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;
export function makeNotification(override: Override = {}) {
  return new Notification({
    ...override,
    content: new Content('This is notification'),
    category: 'social',
    recipientId: 'recipient1',
  });
}
