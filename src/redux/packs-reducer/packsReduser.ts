import {Dispatch} from "redux";
import {store} from "../store";
import {ApiPacks, cardsPaksType, cardsPaksParametrsType} from "../../api/apiPacks";

export type initialStateType = typeof initialState
//export type packsReducerType = initialStateType & cardsPaksType


const initialState = {
    valueFromThePacksInput: '',
    valueFromThePacksButton: '',
    valueFromThePacksOption: '',
    sortPacks: '',
    cardpacks: [] as cardsPaksType[]
}

export const packsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "VALUE-FROM-THE-PACKS-INPUT":
            return {...state, valueFromThePacksInput: action.valueOfTheInput}
        case "VALUE-FROM-THE-PACKS-SELECT":
            return {...state, valueFromThePacksButton: action.valueOfTheButton}
        case "VALUE-FROM-THE-PACKS-OPTION":
            return {...state, valueFromThePacksOption: action.valueOfTheOption}
        case "SORT-PACKS":
            return {...state, sortPacks: action.zeroOrOneAndcellName}
        case "CARDS-PACKS":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const ValueFromThePacksInputAC = (valueOfTheInput: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-INPUT',
        valueOfTheInput
    } as const
}
export const SelectedValueOfTheButtonInPacksAC = (valueOfTheButton: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-SELECT',
        valueOfTheButton
    } as const
}
export const SelectedValueOfTheOptionInPacksAC = (valueOfTheOption: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-OPTION',
        valueOfTheOption
    } as const
}

export const SortPacksAC = (zeroOrOneAndcellName: string) => {
    return {
        type: 'SORT-PACKS',
        zeroOrOneAndcellName
    } as const
}
export const getCardPacksAC = (cardpacks: cardsPaksType[]) => {
    return {
        type: 'CARDS-PACKS',
        payload: {
            cardpacks
        }
    } as const
}

export const getStateTC = (valueFromInput: string, valueFromSelect: string) => (dispatch: Dispatch<any>) => {
    return
}
export const getCardPacksTC = () => (dispatch: Dispatch<any>) => {
    return ApiPacks.pack()
        .then((res) => {
            dispatch(getCardPacksAC(res.data.cardPacks))
        })
}


type ActionTypes =
    | ReturnType<typeof ValueFromThePacksInputAC>
    | ReturnType<typeof SelectedValueOfTheButtonInPacksAC>
    | ReturnType<typeof SelectedValueOfTheOptionInPacksAC>
    | ReturnType<typeof SortPacksAC>
    | ReturnType<typeof getCardPacksAC>
