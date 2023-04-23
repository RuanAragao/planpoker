import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.data());

    res.status(200).json({ usersData });
  } catch (error) {
    res.status(400).end();
  }
}