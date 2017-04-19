// @flow
import moment from 'moment'

const FORMATS = {
  default: 'dd.mm.yyyy h:MM'
}

export function formatDate(date: Date, formatName: string = 'default') {
  return moment(date).format(FORMATS[formatName])
}
