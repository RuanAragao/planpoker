import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const user = await db.collection('users').doc(id as string).get();
    const usersData = user.data();

    res.status(200).json({ usersData });
  } catch (error) {
    res.status(400).end();
  }
}