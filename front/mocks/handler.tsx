import { rest } from 'msw';
import MockData from 'pages/api/product.json';

export const handlers = [
    rest.get('http://localhost:3000/mocks', (_req, res, ctx) => {
        return res(
            ctx.json({
                ...MockData,
            }),
        );
    }),
];
