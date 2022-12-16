import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { UnreadNotification } from './unread-notification'
import { NotificationNotFound } from './errors/notification-not-found'
import { makeNotification } from '@test/factories/notification-factory'

describe('Unread Notification Use Case', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    const notification = makeNotification()

    await notificationsRepository.create(notification)

    await unreadNotification.execute({ notificationId: notification.id })

    expect(notificationsRepository.notifications[0].readAt).toBeNull()
  })

  it('should not be able to unread a notification when it not exists', () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const readNotification = new UnreadNotification(notificationsRepository)

    expect(() =>
      readNotification.execute({ notificationId: 'fake-id' })
    ).rejects.toThrow(NotificationNotFound)
  })
})
