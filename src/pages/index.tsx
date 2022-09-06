import type { NextPage } from 'next'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { trpc } from 'utils/trpc'

const Home: NextPage = () => {
  const context = trpc.useContext()

  const invalidQueries = {
    onSuccess() {
      context.invalidateQueries(['example.getAll'])
    }
  }

  const allExamples = trpc.useQuery(['example.getAll'])

  const addMutation = trpc.useMutation(['example.add'], invalidQueries)
  const deleteByIdMutation = trpc.useMutation(['example.deleteById'], invalidQueries)
  const deleteLastMutation = trpc.useMutation(['example.deleteLast'], invalidQueries)
  const deleteAllMutation = trpc.useMutation(['example.deleteAll'], invalidQueries)

  const buttonStyle =
    'my-4 rounded-md bg-green-500 px-4 py-2 text-xl text-white duration-100 hover:scale-110'

  return (
    <>
      <Head>
        <title>Hello Countries 🌐</title>
        <meta name="description" content="Info about countries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
        <div className="flex space-x-8">
          <button
            onClick={async () => addMutation.mutate()}
            className={`${buttonStyle} bg-green-500`}
          >
            Add Bro 😎
          </button>
          <button
            onClick={async () => deleteLastMutation.mutate()}
            className={`${buttonStyle} bg-red-400`}
          >
            Remove Last 🫤
          </button>
          <button
            onClick={async () => deleteAllMutation.mutate()}
            className={`${buttonStyle} bg-red-600`}
          >
            Remove All 😧
          </button>
        </div>
        <ul className="list-disc">
          {allExamples.data?.map((example) => (
            <li key={example.id} className="my-4 flex justify-between space-x-8">
              <p>{example.id}</p>
              <button
                onClick={async () => deleteByIdMutation.mutate({ id: example.id })}
                className="rounded-md bg-red-500 px-2 font-bold text-white duration-100 hover:scale-110"
              >
                <FontAwesomeIcon className="h-4" icon={faTrashCan} color="white" />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home
