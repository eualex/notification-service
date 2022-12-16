import { Notification } from '@app/entities/notification'
import { NotificationsRepository } from '@app/repositories/notifications-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public readonly notifications: Notification[] = []

  async findById(notificationId: string): Promise<Notification | null> {
    return this.notifications.find(n => notificationId === n.id) ?? null
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      notification => recipientId === notification.recipientId
    )
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notificationsCount = this.notifications.filter(notification => {
      const isUserNotification = recipientId === notification.recipientId
      const isUnreadNotification = !notification.readAt
      const isActiveNotification = !notification.canceledAt

      return isUserNotification && isUnreadNotification && isActiveNotification
    }).length

    return notificationsCount
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification)
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      n => n.id === notification.id
    )

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification
    }
  }
}
