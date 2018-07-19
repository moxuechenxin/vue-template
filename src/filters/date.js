import formatDate from '@/utils/formatDate'

export default (timeStamp, format) => {
  return timeStamp ? formatDate(timeStamp, format) : '--'
}
