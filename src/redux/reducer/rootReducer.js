import technologiesReducer from './technologiesReducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    technologiesReducer : technologiesReducer
})

export default rootReducer