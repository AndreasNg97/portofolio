import * as actions from './actionTypes'

export function currentElementHover(el){
    return{
        type : actions.NOW_HOVERING,
            el : el
    }
}