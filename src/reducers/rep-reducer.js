import { mapKeys as _mapKeys } from 'lodash'

import {
  FETCH_HOUSE_REP_DATA,
  FETCH_SENATE_REP_DATA,
  FETCH_DETAILED_REP_DATA,
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REP_DATA:
      return { ...state, ..._mapKeys([action.payload], 'id') }

    case FETCH_SENATE_REP_DATA:
      return { ...state, ..._mapKeys(action.payload, 'id') }

    case FETCH_DETAILED_REP_DATA:
      const id = action.payload.member_id

      return {
        ...state,
        [id]: {
          ...state[id], ...action.payload
        }
      }

    default:
      return state
  }
}
