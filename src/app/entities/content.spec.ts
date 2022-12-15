import { Content } from './content'

describe('Notification Content Entity', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação')

    expect(content).toBeTruthy()
  })

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Você')).toThrowError()
  })

  it('should not be able to create a notification content with more than 5 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError()
  })
})
