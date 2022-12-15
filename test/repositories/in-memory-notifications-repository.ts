import { Notification } from '@app/entities/notification'
import { NotificationsRepository } from '@app/repositories/notifications-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public readonly notifications: Notification[] = []

  async findById(notificationId: string): Promise<Notification | null> {
    return this.notifications.find(n => notificationId === n.id) ?? null
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
