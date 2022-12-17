import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
