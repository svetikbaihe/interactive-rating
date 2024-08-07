export interface ButtonInterface {
  buttonElement: HTMLElement | null
}

export interface ButtonConstructor {
  buttonText: string
  type?: 'submit'
  onClick?: VoidFunction
}