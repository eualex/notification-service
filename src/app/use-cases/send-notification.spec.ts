import { randomUUID } from 'crypto'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { SendNotification } from './send-notification'

describe('Send Notification Use Case', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Você recebeu uma notificação',
      recipientId: randomUUID()
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
})
