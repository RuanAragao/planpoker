import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query as { id: string };
  try {
    if (req.method === 'GET') {
      const game = await db.collection('games').doc(id).get();
      const gameData = game.data();

      res.status(200).json({ gameData });
    }
  } catch (error) {
    res.status(400).end();
  }
}