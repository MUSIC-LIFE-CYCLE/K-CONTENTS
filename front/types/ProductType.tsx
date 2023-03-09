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

export interface ProductInterface extends ProductImgUrl {
    artist: string;
    description: string;
    quantity: number;
    date: string;
    price: string;
    status: number;
    msg: string;
    data: ProductInterface;
    results: ProductContent;
}

export interface ProductDataAll {
    elbum: ProductInterface[];
    lightStick: ProductInterface[];
}

export interface ProductContentAll extends ProductContent {
    imgUrl: string;
}
