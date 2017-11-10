import axios from 'axios'
import {
  FETCH_USER_DATA,
  FETCH_HOUSE_REP_DATA,
  FETCH_SENATE_REP_DATA,
  FETCH_DETAILED_REP_DATA,
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

  dispatch(fetchHouseRepData(state, district))
  dispatch(fetchSenateRepData(state))
  dispatch({ type: FETCH_USER_DATA, payload: response.data })
}

export const fetchHouseRepData = (state, district) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/house`, { params: { state, district } })

  dispatch({ type: FETCH_HOUSE_REP_DATA, payload: response.data })
}

export const fetchSenateRepData = (state) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/senate`, { params: { state } })

  dispatch({ type: FETCH_SENATE_REP_DATA, payload: response.data })
}

export const fetchDetailedRepData = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/${id}`)

  dispatch({ type: FETCH_DETAILED_REP_DATA, payload: response.data })
}

export const fetchTimesData = (name, id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}representatives/nyt/articles`, {
    params: { name }
  })

  dispatch({ type: FETCH_TIMES_DATA, payload: response.data, id })
}
