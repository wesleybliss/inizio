import dayjs from 'dayjs'
import { dateFormat, timeFormat } from '@constants'

export const formatDate = timestamp =>
    dayjs(timestamp).format(dateFormat)

export const formatTime = timestamp =>
    dayjs(timestamp).format(timeFormat)
