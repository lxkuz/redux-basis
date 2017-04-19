// @flow
type IdType = number | string

export const root = () => '/'

export const login = () => '/login'
export const recoverPassword = () => '/recover-password'

export const project = (projectId: IdType) => `/projects/${projectId}`
export const projectDocuments = (projectId: IdType) => `${project(projectId)}/documents`
export const projectStages = (projectId: IdType) => `${project(projectId)}/stages`
export const projectIssues = (projectId: IdType) => `${project(projectId)}/issues`
export const projectIssue = (projectId: IdType, issueId: IdType) => `${projectIssues(projectId)}/${issueId}/`

export const accessDenied = () => '/403'
export const notFound = () => '/404'

export const createPostModal = () => ({ hash: '#modal-createPost', pathname: location.pathname })
