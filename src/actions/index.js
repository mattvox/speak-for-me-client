import { each as _each } from 'lodash'
import axios from 'axios'
import {
  FETCH_USER_DATA,
  FETCH_REP_DATA,
  FETCH_TIMES_DATA,
}from './types'

const ROOT_URL = 'https://speakforme.blif.io/api/v1/'

export const submitAddressForm = values => async dispatch => {
  const { address, zip } = values

  const response = await axios.get(`${ROOT_URL}user`, {
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
      await axios.get(`${ROOT_URL}representatives/${chamber}`,
        { params }
      )

    return Array.isArray(response.data)
      ? _each(response.data, rep =>
        dispatch(fetchRepData(rep.id)))
      : dispatch(fetchRepData(response.data.id))
  }
}

export const fetchRepData = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/${id}`)

  dispatch({ type: FETCH_REP_DATA, payload: response.data })
}

export const fetchTimesData = (firstName, lastName, id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/nyt/articles`, {
    params: { name: `${firstName}${lastName}` }
  })

  dispatch({ type: FETCH_TIMES_DATA, payload: response.data, id })
}
