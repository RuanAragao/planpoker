import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import api from '../../utils/api';

const inter = Inter({ subsets: ['latin'] })

export default function NewGame() {
  const router = useRouter()

  const handlerSubmitted = async (event:any) => {
    event.preventDefault();

    const data = {
      gameId: uuidv4(),
      user: event.target.userName.value,
      room: event.target.roomName.value
    }

    api.post('/games', data).then((response: { data: any }) => {
      router.push(`/room/${response.data.id}`)
    });
    
  }

  return (
    <div>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Make estimates with your remote teammates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className="text-3xl font-bold">
          Panning Poker
        </header>
        <div className="bg-gray-50 md:grid md:grid-cols-3 md:gap-6 center">
          <form onSubmit={handlerSubmitted}>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="userName">You display name</label>
              <input type="text" id="userName" name="userName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="roomName">Room Name</label>
              <input type="text" id="roomName" name="roomName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}