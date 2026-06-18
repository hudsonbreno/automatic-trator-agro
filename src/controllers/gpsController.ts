import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        Latitude: -19.705627531698244,
        Longitude: -44.88652636643856,
        satellites: 24,
        fix: 4
    });
});

export { router as gps };