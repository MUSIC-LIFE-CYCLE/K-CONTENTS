import type { NextApiRequest, NextApiResponse } from 'next';
import MocData from './product.json';
import { ProductContent } from 'types/ProductType';

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductContent>) {
    res.status(200).json({
        status: 200,
        msg: '조회 성공',
        data: MocData,
    });
}
