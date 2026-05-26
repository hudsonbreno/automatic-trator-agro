import { Router } from 'express';

const router = Router();

// Rota API
router.get('/gps', (req, res) => {

  res.json({
    latitude: -19.9234,
    longitude: -43.9456,
    satellites: 24,
    fix: 4
  });

});

// Status do RTK
router.get('/gps/status', (req, res) => {

  res.json({
    device: 'UM982',
    status: 'ONLINE',
    rtk: 'FIX'
  });

});

export default router;