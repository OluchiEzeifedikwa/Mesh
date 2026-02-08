import express from 'express';
import prisma from '../prismaClient.js';

const router = express.Router();

// GET /users - get all users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json( users );
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router;
