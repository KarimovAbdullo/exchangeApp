export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }

  return date.toLocaleDateString('en-GB', options)
}

export const formatStatusDate = (dateString: string): string => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }

  const formattedDate = date.toLocaleDateString('en-GB', options)
  const [day, month, year] = formattedDate.split(' ')

  return `${day} ${month} ${year} at ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}

export const formatDateWithTime = (dateString: string): string => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }

  const formattedDate = date.toLocaleDateString('en-GB', options)

  const [day, month, year] = formattedDate.split(' ')

  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${day} ${month} ${year}, ${hours}:${minutes}`
}
