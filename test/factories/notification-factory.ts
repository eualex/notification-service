import { Content } from '@app/entities/content'
import { Notification, NotificationProps } from '@app/entities/notification'

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Você recebeu uma nova notificação.'),
    category: 'social',
    recipientId: 'recipient-id',
    ...override
  })
}
