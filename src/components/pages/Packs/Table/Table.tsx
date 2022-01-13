import s from "./Table.module.scss";
import {ButtonMinMax} from "../../../features/Button-min-max/ButtonMinMax";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {cardsPaksType} from "../../../../api/apiPacks";
import {Pack} from "../Pack";

export const Table = React.memo(() => {
        const cardpacks = useSelector<RootState, cardsPaksType[]>(state => state.packs.cardpacks)

        return <div>

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
                {cardpacks.map(cardpacks =>
                    <Pack key={cardpacks._id} cardpacks={cardpacks}/>
                )}

                </tbody>
            </table>
        </div>

    }
)