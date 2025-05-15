export const delayed = (mills: number) => {
  return new Promise(resolve => setTimeout(resolve, mills))
}
