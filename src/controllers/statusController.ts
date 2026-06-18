import { Response, Request } from 'express';

export const status = (req: Request, res: Response) => {
    res.json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date()
    });
}