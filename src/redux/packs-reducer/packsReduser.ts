import {Dispatch} from "redux";
import {ApiPacks, cardsPaksType} from "../../api/apiPacks";
import {IsLoginAC, PreloaderStatus} from "../login-reducer/login-reducer";

export type initialStateType = typeof initialState
//export type packsReducerType = initialStateType & cardsPaksType


const initialState = {
    valueFromThePacksInput: '',
    valueFromThePacksButton: '',
    valueFromThePacksOption: '',
    sortPacks: '',
    cardpacks: [] as cardsPaksType[],
    deletePackId: '',
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
        case 'GET-DELETE-PACK-ID':
            return {...state, deletePackId: action.deletePackId}
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
export const GetCardPacksAC = (cardpacks: cardsPaksType[]) => {
    return {
        type: 'CARDS-PACKS',
        payload: {
            cardpacks
        }
    } as const
}
export const GetdeletePackIdAC = (deletePackId: string) => {
    return {
        type: 'GET-DELETE-PACK-ID',
        deletePackId

    } as const
}


export const getCardPacksTC = (sortPacks: string, name: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return ApiPacks.pack(sortPacks, name)
        .then((res) => {
            dispatch(GetCardPacksAC(res.data.cardPacks))
        })
        .catch(() => {
            dispatch(IsLoginAC(false))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}
export const deletePackTC = (id: string) => (dispatch: Dispatch<any>) => {
    dispatch(PreloaderStatus('loading'))
    return ApiPacks.deletePack(id)
        .then((res) => {
            dispatch(getCardPacksTC('', ''))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}
export const putPackTC = (_id: string, name: string) => (dispatch: Dispatch<any>) => {
    dispatch(PreloaderStatus('loading'))
    return ApiPacks.putPack(_id, name)
        .then((res) => {
            dispatch(getCardPacksTC('', ''))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}
export const postcardPackTC = (name: string) => (dispatch: Dispatch<any>) => {

    dispatch(PreloaderStatus('loading'))
    return ApiPacks.postcardPack(name)
        .then((res) => {
            dispatch(getCardPacksTC('', ''))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}


type ActionTypes =
    | ReturnType<typeof ValueFromThePacksInputAC>
    | ReturnType<typeof SelectedValueOfTheButtonInPacksAC>
    | ReturnType<typeof SelectedValueOfTheOptionInPacksAC>
    | ReturnType<typeof SortPacksAC>
    | ReturnType<typeof GetCardPacksAC>
    | ReturnType<typeof GetdeletePackIdAC>
