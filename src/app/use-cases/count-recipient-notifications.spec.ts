import { makeNotification } from '@test/factories/notification-factory'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { CountRecipientNotifications } from './count-recipient-notifications'

describe('Count notifications by recipient Use Case', () => {
  it('should be able to count notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const countNotifications = new CountRecipientNotifications(
      notificationsRepository
    )

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example' })
    )
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example' })
    )
    await notificationsRepository.create(makeNotification())

    const { count } = await countNotifications.execute({
      recipientId: 'recipient-example'
    })

    expect(count).toEqual(2)
  })
})
