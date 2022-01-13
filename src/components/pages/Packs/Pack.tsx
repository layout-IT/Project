import React, {ChangeEvent, KeyboardEventHandler, useState} from "react"
import {cardsPaksType} from "../../../api/apiPacks";
import {useDispatch} from "react-redux";
import s from "./Table/Table.module.scss";
import {DeletePopUp} from "../../deletePopUp/DeletePopUp";
import {putPackTC} from "../../../redux/packs-reducer/packsReduser";

type packType = {
    cardpacks: cardsPaksType
}
export const Pack = React.memo((props: packType) => {
        const dispatch = useDispatch()
        const [deletePP, setDelete] = useState(false)
        const [deletingById, setDeletingById] = useState('')
        const [userId, setUserID] = useState<null | string>(null)
        const [valueInput, setValueInput] = useState(props.cardpacks.name)
        const deletePackClick = (id: string) => {
            setDelete(true)
            setDeletingById(id)
        }
        const putPackClick = (id: string) => {
            setUserID(id)
        }
        const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValueInput(e.currentTarget.value)
            debugger
        }

        const ListeneronBlur = () => {
            dispatch(putPackTC(props.cardpacks._id, valueInput))
        }

        // @ts-ignore
        const ListeneronKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                dispatch(putPackTC(props.cardpacks._id, valueInput))
            }
        }
        return <>
            {deletePP && <DeletePopUp setDelete={setDelete} deletingById={deletingById}/>}
            <tr>
                {props.cardpacks._id === userId
                    ? <input type="text" value={valueInput} onBlur={ListeneronBlur} onKeyPress={ListeneronKeyPress}
                             onChange={onChangeInputHandler} autoFocus/>
                    : <td> {props.cardpacks.name}</td>
                }
                <td>{props.cardpacks.cardsCount}</td>
                <td>{props.cardpacks.updated}</td>
                <td>I{props.cardpacks.grade}</td>
                <td className={s.buttonsCell}>
                    <button onClick={() => deletePackClick(props.cardpacks._id)} className={s.cellDel}>Delete</button>
                    <button onClick={() => putPackClick(props.cardpacks._id)} className={s.cellCommon}>Edit</button>
                    {/*<button className={s.cellCommon}>Learn</button>*/}
                </td>
            </tr>
        </>
    }
)


