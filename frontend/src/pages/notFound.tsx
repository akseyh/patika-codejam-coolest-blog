import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-y-10'>
            <span className='text-3xl font-semibold'>Page Not Found!</span>
            <button className='py-2 w-64 rounded-lg bg-blue-400 hover:bg-blue-300 transition' onClick={() => history.push('/')}>Go Home</button>
        </div>
    )
}

export default NotFound