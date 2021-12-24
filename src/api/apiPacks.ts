import axios, {AxiosResponse} from 'axios'
import {stringify} from "querystring";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const ApiPacks = {
    pack(sortPacks: string) {
        return instance.get<cardsPaksParametrsType>('cards/pack', {
                params: {
                    pageCount: 10,
                    sortPacks,
                }
            }
        )
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`)
    },
    putPack(_id: string, name: string) {
        return instance.put<putcardPackType>(`cards/pack`, {_id, name}
        )
    },
    postcardPack(name: string) {
        return instance.post<postCardsPack>(`cards/pack`, {
                cardsPack: {
                    name
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

export type putcardPackType = {
    _id: string
    name: string
}

export type postCardsPack = {

    name: string// если не отправить будет таким
    path: string// если не отправить будет такой
    grade: number // не обязателен
    shots: number // не обязателен
    rating: number // не обязателен
    deckCover: string // не обязателен
    private: boolean // если не отправить будет такой
    type: string // если не отправить будет таким
}