import inViewReducer from './inViewReducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    inViewReducer : inViewReducer
})

export default rootReducer