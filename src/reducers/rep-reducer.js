import { FETCH_REP_DATA, RESET_REPS } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_REP_DATA:
      const { member_id: id, roles, ...rest } = action.payload

      const role = roles[0]

      return {
        ...state,
        [id]: { id, ...rest, ...role }
      }

    case RESET_REPS:
      return null

    default:
      return state
  }
}
