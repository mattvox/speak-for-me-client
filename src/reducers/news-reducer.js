import { FETCH_TIMES_DATA } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_TIMES_DATA:
      return {
        ...state,
        [action.id]: {
          nyt: { ...action.payload }
        }
      }

    default:
      return state
  }
}
