import s from "./Cards.module.scss";
import React from "react";

function Cards() {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.mainField}>
                <div className={s.mainFieldContainer}>
                    <h2><span></span>Packs Name</h2>
                    <div className={s.searchBar}>
                        <div className={s.inputFieldContainer}><input placeholder="Search..." className={s.inputField}
                                                                      type="text"/></div>
                    </div>
                    <table className={s.tableStyle}>
                        <thead className={s.header}>
                        <tr>
                            <th align="left"><span>Question</span> </th>
                            <th align="left"><span>Answer</span></th>
                            <th align="left"><span className={s.thSpan}>Last Updated</span> <span></span></th>
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
                    <div className={s.pagination}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="svgInline">
                            <path fill="currentColor"
                                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
                                  className=""></path>
                        </svg>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <span className={s.spanellipsis}>...</span>
                        <span className={s.spanNumber}>5</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="svg-inline--fa fa-arrow-circle-left fa-w-16 fa-2x">
                            <path fill="currentColor"
                                  d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
                                  className=""></path>
                        </svg>
                        <span className={s.ShowSpan}>Show</span>
                        <select className={s.select}>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <span>Cards per Page</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Cards