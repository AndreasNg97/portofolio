import * as actions from '../actionTypes'

const inViewReducer = (state=0, action) => {
    switch(action.type){
        case actions.SECTION_INVIEW:
            return[

                   action.el 

            ];
        default:
            return state
    }
}

export default inViewReducer