import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchItems = createAsyncThunk('/item/listing',async ()=>{
  const response = await fetch('https://fakestoreapi.com/products')
  return response.json()
})


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading:false,
    error:false,
    list:[]
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    reset1:state=>{state.value=0},
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchItems.pending,(state)=>{
      state.loading=true
    })
    builder.addCase(fetchItems.fulfilled,(state,action)=>{
      state.loading=true
      state.list=action.payload
      state.error=false
    })
    builder.addCase(fetchItems.rejected,(state)=>{
      state.loading=false
      state.list=[]
      state.error=true
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset1 } = counterSlice.actions

export default counterSlice.reducer