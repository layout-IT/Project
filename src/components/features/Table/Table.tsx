import s from "./Table.module.scss";
import {ButtonMinMax} from "../Button-min-max/ButtonMinMax";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {cardsPaksType} from "../../../api/apiPacks";
import {deletePackTC, putPackTC} from "../../../redux/packs-reducer/packsReduser";
import DeletePopUp from "../../deletePopUp/DeletePopUp";

function Table () {
    const dispatch = useDispatch()
    const [deletePP, setDelete] = useState(false)
    const [editPP, setEdit] = useState(false)
    const [deletingById, setDeletingById] = useState('')
    const cardpacks = useSelector<RootState, cardsPaksType[]>(state => state.packs.cardpacks)
    const deletePackClick = (id: string) => {
        setDelete(true)
        setDeletingById(id)
    }
    const putPackClick = (_id: string) => {
        dispatch(putPackTC(_id, 'Friday project'))
    }

    return <div>
        {deletePP && <DeletePopUp setDelete={setDelete} deletingById={deletingById}/>}
        <table className={s.tableStyle}>
            <thead className={s.header}>
            <tr>
                <th align="left"><ButtonMinMax name={'Name'}/></th>
                <th align="left"><ButtonMinMax name={'cardsCount'}/></th>
                <th align="left"><ButtonMinMax name={'updated'}/></th>
                <th align="left"><ButtonMinMax name={'created'}/></th>
                <th align="left"><span>Actions</span></th>
            </tr>
            </thead>
            <tbody>
            {cardpacks.map(cardpacks => <tr>

                <td>{cardpacks.name}</td>
                <td>{cardpacks.cardsCount}</td>
                <td>{cardpacks.updated}</td>
                <td>I{cardpacks.grade}</td>
                <td className={s.buttonsCell}>
                    <button onClick={() => deletePackClick(cardpacks._id)} className={s.cellDel}>Delete</button>
                    <button onClick={() => putPackClick(cardpacks._id)} className={s.cellCommon}>Edit</button>
                    <button className={s.cellCommon}>Learn</button>
                </td>
            </tr>)}


            </tbody>
        </table>
    </div>

}

export default Table