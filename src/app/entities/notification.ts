import { Content } from './content'

interface NotificationProps {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  createdAt: Date
}

export class Notification {
  constructor(private props: NotificationProps) {}

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
