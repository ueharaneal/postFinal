import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState ={
    users:[]
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducer:{
        addUser: (state,action)=>{
            const user ={
                //the object requires two things, the id and the payload 
                id: nanoid(),
                text: action.payload
            }
            state.user.push(user)
        },
        removeUser: (state,action)=>{
            state.users.filter((user)=>{
                user.id !== action.payload
            })
        }
    }
})

export const {addUser, removeUser} = userSlice.actions

export default userSlice.reducer