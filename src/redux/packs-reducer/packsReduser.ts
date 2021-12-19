import {Dispatch} from "redux";
import {store} from "../store";

export type initialStateType = typeof initialState

const initialState = {
    valueFromThePacksInput : '',
    valueFromThePacksSelect:''
}

export const packsReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "VALUE-FROM-THE-PACKS-INPUT":
            return {...state,valueFromThePacksInput : action.valueOfTheInput}
        case "VALUE-FROM-THE-PACKS-SELECT":
            return {...state,valueFromThePacksSelect : action.valueOfTheSelect}
        default:
            return state
    }
}

export const ValueFromThePacksInputAC = (valueOfTheInput: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-INPUT',
        valueOfTheInput
    }as const
}
export const SelectedValueOfTheSelectInPacksAC = (valueOfTheSelect: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-SELECT',
        valueOfTheSelect
    }as const
}

export const getStateTC = (valueFromInput:string,valueFromSelect:string) => (dispatch: Dispatch<any>)=> {
return 
}
type ActionTypes =
    | ReturnType<typeof ValueFromThePacksInputAC>
    | ReturnType<typeof SelectedValueOfTheSelectInPacksAC>
