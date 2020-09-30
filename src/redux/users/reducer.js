import actions from './actions'

const initialState = {
  users: [],
}

export default function faqReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, users: [...state.users, action.payload] }
    case actions.DELETE_USER: {
      const users = state.users;
      const removeUserById = users.filter((i) => i.id.toString() !== action.payload.toString())

      return { ...state, users: removeUserById }
    }      
    default:
      return state
  }
}
