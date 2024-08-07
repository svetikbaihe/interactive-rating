export interface InputRadioInterface {
  inputRadioElement: HTMLElement | null
}

export interface InputRadioConstructor {
  name: string
  values: string[]
  onChange?: (value: string) => void
}