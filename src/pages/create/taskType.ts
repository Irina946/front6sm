export interface Subtopic {
  nameTopic: string
  id: string
  isVisible: boolean
  count: number
}

export interface Theme {
  title: string
  id: string
  subtopic: Subtopic[]
}

export interface ObjectTheme {
  name: string
  type: string
  themes: Theme[]
}
