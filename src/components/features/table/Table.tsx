import s from "./Table.module.scss";
import ButtonMinMax from "../button-min-max/ButtonMinMax";
import React from "react";

function Table() {
    return <table className={s.tableStyle}>
        <thead className={s.header}>
        <tr>
            <th align="left"><ButtonMinMax name={'Name'}/></th>
            <th align="left"><ButtonMinMax name={'Cards'}/></th>
            <th align="left"><ButtonMinMax name={'Last Updated'}/></th>
            <th align="left"><ButtonMinMax name={'Created by'}/></th>
            <th align="left"><span>Actions</span></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Pack Name</td>
            <td>4</td>
            <td>18.03.2021</td>
            <td>Ivan Ivanov</td>
            <td className={s.buttonsCell}>
                <button className={s.cellDel}>Delete</button>
                <button className={s.cellCommon}>Edit</button>
                <button className={s.cellCommon}>Learn</button>
            </td>
        </tr>
        <tr>
            <td>Name Pack</td>
            <td>37</td>
            <td>19.03.2021</td>
            <td>Petr Ivanov</td>
            <td className={s.buttonsCell}>
                <button className={s.cellDel}>Delete</button>
                <button className={s.cellCommon}>Edit</button>
                <button className={s.cellCommon}>Learn</button>
            </td>
        </tr>
        </tbody>
    </table>
}

export default Table