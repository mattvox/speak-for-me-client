import { each as _each } from 'lodash'
import axios from 'axios'
import {
  FETCH_USER_DATA,
  FETCH_REP_DATA,
  FETCH_TIMES_DATA,
  RESET_REPS,
} from './types'

import { USER_ENDPOINT, REP_ENDPOINT, NYT_ENDPOINT } from './api-endpoints'

export const resetReps = () => ({ type: RESET_REPS })

export const submitAddressForm = values => async dispatch => {
  const { address, zip } = values

  const response = await axios.get(USER_ENDPOINT, {
    params: {
      address: `${address} ${zip}`
    }
  })

  const { state, district } = response.data

  dispatch({ type: FETCH_USER_DATA, payload: response.data })
  dispatch(fetchRepIds(state, 'house', district))
  dispatch(fetchRepIds(state, 'senate', district))
}

export const fetchRepIds = (state, chamber, district) => {
  const params = {
    state,
    chamber,
  }

  chamber === 'house' && (params.district = district)

  return async dispatch => {
    const response =
      await axios.get(`${REP_ENDPOINT}/${chamber}`,
        { params }
      )

    return Array.isArray(response.data)
      ? _each(response.data, rep =>
        dispatch(fetchRepData(rep.id)))
      : dispatch(fetchRepData(response.data.id))
  }
}

export const fetchRepData = (id) => async dispatch => {
  const response = await axios.get(`${REP_ENDPOINT}/${id}`)

  dispatch({ type: FETCH_REP_DATA, payload: response.data })
}

export const fetchTimesData = (firstName, lastName, id) => async dispatch => {
  const response = await axios.get(NYT_ENDPOINT, {
    params: { name: `${firstName} ${lastName}` }
  })

  dispatch({ type: FETCH_TIMES_DATA, payload: response.data, id })
}
