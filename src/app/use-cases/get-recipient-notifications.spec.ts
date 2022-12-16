import { makeNotification } from '@test/factories/notification-factory'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { GetRecipientNotifications } from './get-recipient-notifications'

describe('Recipient Notifications Use Case', () => {
  it('should be able to find notifications by recipient id', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository
    )

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-recipient'
      })
    )
    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-recipient'
      })
    )
    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-recipient'
      })
    )
    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-2'
      })
    )

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient'
    })

    expect(notifications).toHaveLength(3)
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient' }),
        expect.objectContaining({ recipientId: 'example-recipient' }),
        expect.objectContaining({ recipientId: 'example-recipient' })
      ])
    )
  })
})
