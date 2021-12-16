import React from "react";
import s from './CheckEmail.module.scss'

export const CheckEmail = () => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.title}>
                <h1> It-Incubator</h1>
            </div>
            <div className={s.containerSvg}>
                <div className={s.roundSvg}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="mail-bulk" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                         className={s.svg}>
                        <path fill="currentColor"
                              d="M592 96H240c-26.47 0-48 21.53-48 48v16h32v-16c0-8.84 7.16-16 16-16h352c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H416v32h176c26.47 0 48-21.53 48-48V144c0-26.47-21.53-48-48-48zM96 48c0-8.84 7.16-16 16-16h288c8.84 0 16 7.16 16 16v16h32V48c0-26.47-21.53-48-48-48H112C85.53 0 64 21.53 64 48v112h32V48zm464 208c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h64zm-48-64h32v32h-32v-32zm-176 0H48c-26.47 0-48 21.53-48 48v224c0 26.47 21.53 48 48 48h288c26.47 0 48-21.53 48-48V240c0-26.47-21.53-48-48-48zm16 272c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V313.6c12.8 9.6 32 25.6 96 70.4 12.8 9.6 38.4 32 64 32s51.2-22.4 64-32c64-44.8 83.2-60.8 96-70.4V464zm0-188.8c-25.6 19.2-22.4 19.2-115.2 86.4-9.6 3.2-28.8 22.4-44.8 22.4s-35.2-19.2-44.8-25.6C54.4 291.2 57.6 291.2 32 272v-32c0-8.84 7.16-16 16-16h288c8.84 0 16 7.16 16 16v35.2z"
                              className=""></path>
                    </svg>
                </div>
            </div>
            <h3>Check Email</h3>
            <p className={s.footerText}>We've sent an Email with instructions to example@mail.com</p>
        </div>
    </div>
}

export default CheckEmail