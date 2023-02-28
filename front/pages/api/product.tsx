import type { NextApiRequest, NextApiResponse } from 'next';
import Data from './product.json';

console.log(Data, 'data data data');
type ProductContent = {
    imgUrl: string[];
    content: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductContent>) {
    res.status(200).json({
        status: 200,
        msg: '조회 성공',
        data: Data,
    });
}
