import { randomUUID } from 'crypto'
import { Notification } from '../entities/notification'
import { SendNotification } from './send-notification'

describe('Send Notification Use Case', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification()

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Você recebeu uma notificação',
      recipientId: randomUUID()
    })

    expect(notification).toBeInstanceOf(Notification)
  })
})
