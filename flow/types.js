// @ flow
// base
export type HashType = { [key: string]: any }
export type LocationType = {
  pathname: string
}
// react
export type ComponentType = ReactClass<*>
export type NodeType = ComponentType | string | [ComponentType, string]

// redux
export type ActionType = { type: string, [key: string]: any }
export type StateType = { [key: string]: any }
export type ReducerType = (action: ActionType, state: StateType) => StateType
export type DispatchType = (ActionType) => void

// redux-from
type HandleSubmitArgumentFunctionType = (attrbutes: Object) => void
type OnSubmitFunctionType = () => void
export type HandleSubmitType = OnSubmitFunctionType |
  ((onSubmit: HandleSubmitArgumentFunctionType) => OnSubmitFunctionType)
export type ReduxFormFieldType = {
  input: {
    onChange: Function,
    onBlur: Function,
    value: any
  },
  meta: {
    error: string,
    touched: boolean
  }
}

// project types
export type UserType = {
  id: number,
  email: string,
  name: string,
  updated_at: number
}

export type TicketType = {
  id: number,
  name: string,
  description?: string
}

export type TicketKindType = {
  id: number,
  name: string
}

export type ReportType = {
  id: number,
  name: string
}

export type FieldType = {
  label: string,
  value: any
}
