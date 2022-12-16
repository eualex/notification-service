import { randomUUID } from 'crypto'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { CountRecipientNotifications } from './count-recipient-notifications'
import { Notification } from '@app/entities/notification'
import { Content } from '@app/entities/content'

describe('Count notifications by recipient Use Case', () => {
  it('should be able to count notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const countNotifications = new CountRecipientNotifications(
      notificationsRepository
    )

    const recipientId = randomUUID()

    const notification = new Notification({
      content: new Content('Você recebeu uma notificação'),
      category: 'social',
      recipientId
    })

    await notificationsRepository.create(notification)

    const { count } = await countNotifications.execute({
      recipientId
    })

    expect(count).toEqual(1)
  })
})
