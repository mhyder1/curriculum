import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { addUser, removeUser, setUsers } = userSlice.actions

export default userSlice.reducer