export interface ProductContent {
    artist: string;
    description: string;
    quantity: number;
    date: string;
    price: string;
}

export interface ProductImgUrl {
    imgUrl: string;
}

export interface ProductContentAll extends ProductContent {
    imgUrl: string;
}
