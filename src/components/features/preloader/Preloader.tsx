import React from "react";
import preloader from '../../../assets/pictures/preloader.gif'
import s from './Preloader.module.scss'

function Preloader() {

    return <div className={s.wrapper}>
        <img src={preloader} alt="preloader"/>
    </div>
}

export default Preloader