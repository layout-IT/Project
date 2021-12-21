import {ProfileAC} from "../login-reducer/login-reducer";
import {ResponsType} from "../../api/apiLogin";

export type initialStateType = ResponsType & {}

const initialState = {} as initialStateType

export const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "PROFILE-USER-DATA":
            return {...state, ...action.payload}
        default:
            return state
    }
}

type ActionTypes =
    | ReturnType<typeof ProfileAC>