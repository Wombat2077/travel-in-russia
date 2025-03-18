import { client } from '@renderer/client';
import { AxiosResponse } from 'axios';

type TourType = {
    id: number,
    name: string
}
type Tour = {
    id: number,
    name: string,
    cost: number,
    neededInsuranceId: number,
    neededInsurance: InsuranceType,
    cityId: number,
    startDate: Date,
    endDate: Date,
}
type InsuranceType = {
    id: number,
    name: string
}
type Country = {
    id: number,
    name: string
}

type City = {
    id: number,
    name: string,
    country: Country
    countryId: number
}
class TourService {

    public static getTypes() : Promise<AxiosResponse<TourType[], any>> {
        return client.get<TourType[]>('/TourTypes/getTypes');
    }
    public static getTours(options: object): Promise<AxiosResponse<Tour[], any>>{
        return client.get<Tour[]>('/Tours/getTours', {...options});
    }
}


export type {
    TourType,
    Tour,
    InsuranceType,
    Country,
    City
}
export {
    TourService
}