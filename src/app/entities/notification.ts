import { randomUUID } from 'node:crypto'
import { Replace } from 'src/utils/helpers/Replace'
import { Content } from './content'

interface NotificationProps {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  createdAt: Date
}

export class Notification {
  private _id: string
  private props: NotificationProps

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  get id() {
    return this._id
  }

  get content(): Content {
    return this.props.content
  }

  set content(content: Content) {
    this.props.content = content
  }

  get recipientId(): string {
    return this.props.recipientId
  }

  set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  get category(): string {
    return this.props.category
  }

  set category(category: string) {
    this.props.category = category
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt
  }

  get createdAt() {
    return this.props.createdAt
  }
}
