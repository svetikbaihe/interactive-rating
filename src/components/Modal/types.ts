export interface ModalInterface {
  modalElement: HTMLElement | null
}
 
export interface ModalConstructor {
  title: string
  body: string
  footer?: string
  extraValue?: string
}