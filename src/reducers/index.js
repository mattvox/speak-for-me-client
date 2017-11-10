import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'

import userReducer from './user-reducer'
import repReducer from './rep-reducer'
import newsReducer from './news-reducer'

export default combineReducers({
  user: userReducer,
  reps: repReducer,
  news: newsReducer,
  form: reduxForm,
})
