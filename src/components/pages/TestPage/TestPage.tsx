import React, {ChangeEvent, useState} from "react";
import s from './TestPage.module.css'
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }
    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return (
        <>
            <h1>Test Page</h1>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </>

    )
}

export default TestPage