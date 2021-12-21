import axios, {AxiosResponse} from 'axios'
import {stringify} from "querystring";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const ApiPacks = {
    pack() {
        return instance.get<cardsPaksParametrsType>('cards/pack', {
                params: {
                    pageCount: 10
                }
            }
        )
    }
}

export type cardsPaksParametrsType = {
    cardPacks: cardsPaksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type cardsPaksType = {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string
    created: string
    updated: string
    __v: number
}