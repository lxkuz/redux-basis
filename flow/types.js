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
export type AvatarType = {
  thumb: string,
  normal: string
}

export type UserType = {
  id: number,
  email: string,
  name: string,
  first_name: string,
  second_name: string,
  avatar: AvatarType,
  errors?: any,
  unconfirmed_email?: string,
  updated_at: string,
  organizations: Array<Object> //TODO user has organizations, organizations has users...
}

export type ActionKindType =
  | 'basic'
  | 'message'
  | 'call'
  | 'paypal'

type ActStatusType =
  | 'waiting'
  | 'doing'
  | 'processing'
  | 'done'
  | 'errors'


export type UserActType = {
  description?: string,
  status: ActStatusType,
  data?: {
    error?: string
  }
}

// export type CallDataType = {
//   name?: string,
//   phone: string
// }

// export type MessageDataType = {
//   subject: string,
//   email: string,
//   body_1?: ?string,
//   body_2?: ?string
// }

// export type PaypalDataType = {
//   email: string
// }

export type ActDataType = any //TODO
  // | CallDataType
  // | MessageDataType
  // | PaypalDataType

export type TagType = {
  id: number,
  title: string,
  created_at: number,
  updated_at: number
}

export type ActType = {
  id: number,
  title: string,
  kind?: ActionKindType,
  description?: string,
  created_at: number,
  user: UserType,
  saved: boolean,
  user_act: UserActType,
  organization_id: number,
  organization: Object, // TODO: expand this to a concrete org structure
  favorite_acts_count: number,
  favorite_users: Array<UserType>,
  data: ActDataType,
  tags: Array<TagType>,
  saved_at: ?number
}

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'active'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'pink'
  | 'blueFacebook'

export type RequestResultType<T> = {
  data: T,
  error: any,
  loading: boolean
}
