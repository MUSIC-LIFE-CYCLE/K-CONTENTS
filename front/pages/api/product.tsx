import type { NextApiRequest, NextApiResponse } from 'next';
import MocData from './product.json';
import { ProductContentAll } from 'types/ProductType';

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductContentAll>) {
    res.status(200).json({
        status: 201,
        msg: '조회 성공',
        data: MocData,
    });
}
