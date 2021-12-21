import s from "./Table.module.scss";
import {ButtonMinMax} from "../Button-min-max/ButtonMinMax";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {cardsPaksType} from "../../../api/apiPacks";

function Table() {
    const cardpacks = useSelector<RootState, cardsPaksType[]>(state => state.packs.cardpacks)
    console.log(cardpacks)
    return <table className={s.tableStyle}>
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
                <button className={s.cellDel}>Delete</button>
                <button className={s.cellCommon}>Edit</button>
                <button className={s.cellCommon}>Learn</button>
            </td>
        </tr>)}


        </tbody>
    </table>
}

export default Table