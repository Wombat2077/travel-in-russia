import {client} from '@renderer/client'

type Service = {
    id: number,
    name: string
}
class ServicesService {

    public static getServices(): Promise<Service[]> {
        return new Promise((resolveOuter) => resolveOuter([
            {id: 1, name: "SPA"},
            {id: 2, name: "Свадьба"},
            {id: 3, name: "WiFi"},
            {id: 4, name: "Спорт"},
            {id: 5, name: "VIP"},
            {id: 6, name: "Кондиционер"},
            {id: 7, name: "FIT"},
            {id: 8, name: "Эксклюзив"},
            {id: 9, name: "Трансфер"},
        ]));
    }
}
export type {
    Service
}
export {
    ServicesService
}