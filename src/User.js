import './User.css'
import { useDispatch } from 'react-redux'
import { removeUser } from './userSlice'
export default function User({user: { name, email, id }}) {
    const dispatch = useDispatch()
    return (
        <div>
            <section>
                <span 
                    style={{position: 'absolute',right: 0, color: 'red', fontWeight: 'bold', cursor: 'pointer'}}
                    onClick={() => dispatch(removeUser(id))}
                    >
                        X
                </span>
                <p>{name}</p>
                <p>{email}</p>
            </section>
            <hr />
        </div>
    )
}