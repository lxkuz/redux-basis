// @flow

export const EXPORT_REPORT_REQUEST = 'EXPORT_REPORT_REQUEST'
export const EXPORT_REPORT_SUCCESS = 'EXPORT_REPORT_SUCCESS'
export const EXPORT_REPORT_FAILURE = 'EXPORT_REPORT_FAILURE'

export const getReportPdf = (id: string) => ({
  type: EXPORT_REPORT_REQUEST, id
})

export const getReportSuccess = (id: string) => ({
  type: EXPORT_REPORT_SUCCESS, id
})

export const getReportFailure = (id: string) => ({
  type: EXPORT_REPORT_FAILURE, id
})
