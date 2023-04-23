import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    if (req.method === 'GET') {
      const games = await db.collection('games').get();
      const gamesData = games.docs.map(game => game.data());

      res.status(200).json({ gamesData });
    }

    if (req.method === 'POST') {
      const { id } = await db.collection('games').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    } 
  } catch (error) {
    res.status(400).end();
  }
}