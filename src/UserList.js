import { useEffect, useState } from 'react'
import User from './User'
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './userSlice'
export default function UserList() {
    const { users } = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch(setUsers(data.map(({name, email, id}) => ({name, email, id})))))
        .catch(error => console.log(error))
    },[])

    return (
        <>
            {
                users.map(user => (
                    <User key={user.id} user={user} />
                ))
            }
        </>
    )
}