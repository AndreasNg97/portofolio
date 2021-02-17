import * as actions from './actionTypes'

export function currentSectionInView(el){
    return{
        type : actions.SECTION_INVIEW,
            el : el
    }
}