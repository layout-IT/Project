import s from "./Table.module.scss";
import {ButtonMinMax} from "../../../features/Button-min-max/ButtonMinMax";
import React from "react";

export const Table = React.memo(() => {

        return <div>
            <table className={s.tableStyle}>
                <thead className={s.header}>
                <tr>
                    <th align="left"><span>Question</span></th>
                    <th align="left"><span>Answer</span></th>
                    <th align="left"><span className={s.thSpan}><ButtonMinMax name={'Last Updated'}/></span></th>
                    <th align="left"><span>Grade</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>How "This" works in JavaScript</td>
                    <td>This is how "This" works in JavaScript</td>
                    <td>18.03.2021</td>
                    <td><span className={s.grades}></span></td>
                </tr>
                </tbody>
            </table>
        </div>

    }
)