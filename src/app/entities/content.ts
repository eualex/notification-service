export class Content {
  private readonly content: string

  constructor(content: string) {
    const isContentLenghtValid = this.validateContentLenght(content)

    if (!isContentLenghtValid) {
      throw new Error('Content lenght error.')
    }

    this.content = content
  }

  get value() {
    return this.content
  }

  validateContentLenght(content: string) {
    return content.length >= 5 && content.length <= 240
  }
}
