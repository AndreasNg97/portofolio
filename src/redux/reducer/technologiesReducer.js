import * as actions from '../actionTypes'

const technologiesReducer = (state=[], action) => {
    switch(action.type){
        case actions.NOW_HOVERING:
            return[

                   action.el 

            ];
        default:
            return state
    }
}

export default technologiesReducer