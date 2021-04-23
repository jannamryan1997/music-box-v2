export interface IRecommendation {
    id: number;
    name: string;
    url: string;
}

export interface ISongVerify {
    songId: number;
    price: string;
    url: string;
    startSecond: number;
    endSecond: number;
    genreId: number;
}
