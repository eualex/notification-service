import { randomUUID } from 'crypto'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { CancelNotification } from './cancel-notification'
import { Notification } from '@app/entities/notification'
import { Content } from '@app/entities/content'
import { NotificationNotFound } from './errors/notification-not-found'

describe('Cancel Notification Use Case', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = new Notification({
      content: new Content('Você recebeu uma notificação'),
      category: 'social',
      recipientId: randomUUID()
    })

    await notificationsRepository.create(notification)

    await cancelNotification.execute({ notificationId: notification.id })

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date)
    )
  })

  it('should not be able to cancel a notification when it not exists', () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    expect(() =>
      cancelNotification.execute({ notificationId: 'fake-id' })
    ).rejects.toThrow(NotificationNotFound)
  })
})
