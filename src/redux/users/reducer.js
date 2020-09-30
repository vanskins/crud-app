import actions from './actions'

const initialState = {
  users: [],
}

export default function faqReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, users: [...state.users, action.payload] }
    default:
      return state
  }
}
