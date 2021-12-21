import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
    const { path } = req.query;
    res.json({
        code: '0',
        msg: `list files ${path || 'unkown'}!`,
        data: null
    });
};