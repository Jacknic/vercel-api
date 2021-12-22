import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as http from 'http';

export default (req: VercelRequest, res: VercelResponse) => {
    http.get('http://www.baidu.com', (response) => {
        res.json({
            code: 0,
            msg: 'success',
            data: response.rawHeaders
        })
    }).on('error', (e) => {
        console.error(e);
        res.json({
            code: 500,
            msg: 'error occured'
        })
    });
};