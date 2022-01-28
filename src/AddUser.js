import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice'
export default function AddUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        let id = 19;
        id++
        e.preventDefault();
        dispatch(addUser({name, email, id}))
    }
    return (
        <form onSubmit={handleSubmit} style={{marginLeft: '20px'}}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/><br />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
            <input type='submit' value='Add user'/>
        </form>
    )
}