import { Action, ActionNames, State, initialState } from '.'

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionNames.SetAuthToken: {
      return {
        ...state,
        token: action.payload.token,
        expire: action.payload.expire
      }
    }
    case ActionNames.SetHbServiceHost: {
      return {
        ...state,
        host: action.payload.host
      }
    }
    default:
      return state
  }
}
