import {client} from '@renderer/client';

type FoodType = {
    id: number,
    name: string
}
type Hotel = {
    id: number,
    name: string,
    address: string,
    rating: number,
    foodtypes: FoodType[]
}

class HotelService {

    public static getHotels(): Promise<Hotel[]> {
        return client.get('/Hotels/getHotels');
    }
    public static getFoodTypes(): Promise<FoodType[]> {
        return client.get('/FoodTypes/getFoodTypes');
    }
}
