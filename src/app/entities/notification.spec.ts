import { randomUUID } from 'node:crypto'
import { Content } from './content'
import { Notification } from './notification'

describe('Notification Entity', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('Nova solicitação'),
      category: 'social'
    })

    expect(notification).toBeTruthy()
  })
})
