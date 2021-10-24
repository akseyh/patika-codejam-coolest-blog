import { useState } from "react"
import { useDispatch } from "react-redux"
import { Layout } from "../../components"
import { login } from "../../store/auth"

const Login: React.FC = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleLogin() {
        dispatch(login({username, password}))
    }

    return (
        <Layout>
            <div className='mt-36 flex items-center justify-center'>
                <div className='w-96 h-auto shadow-lg rounded-lg flex flex-col justify-center gap-y-8 border border-solid border-gray-200 px-4 py-6'>
                    <div className='flex flex-col'>
                        <label className='text-xs'>Kullanıcı Adı</label>
                        <input 
                            className='border border-solid border-gray-200 rounded-lg px-2'
                            onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xs'>Parola</label>
                        <input 
                            className='border border-solid border-gray-200 rounded-lg px-2'
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button 
                        className='bg-blue-400 py-2 rounded-lg text-white hover:bg-blue-300 transition'
                        onClick={handleLogin}>
                        Giriş Yap
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Login