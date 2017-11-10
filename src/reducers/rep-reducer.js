import { mapKeys as _mapKeys } from 'lodash'

import {
  FETCH_HOUSE_REP_DATA,
  FETCH_SENATE_REP_DATA,
  FETCH_DETAILED_REP_DATA,
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REP_DATA:
      return { ...state, house: _mapKeys([action.payload], 'id') }

    case FETCH_SENATE_REP_DATA:
      return { ...state, senate: _mapKeys(action.payload, 'id') }

    case FETCH_DETAILED_REP_DATA:
      const chamber = action.payload.roles[0].chamber.toLowerCase()
      const id = action.payload.member_id

      return {
        ...state,
        [chamber]: {
          ...state[chamber],
          [id]: {
            ...state[chamber][id], ...action.payload
          }
        }
      }

    default:
      return state
  }
}
