import { createSlice } from "@reduxjs/toolkit";

export const passangersSlice = createSlice({
    name: 'passangers',
    initialState: {
        passanger: [],
        orderPassanger: [],
        paymentMethod: '',
        loading: false,
        error: false
    },
    reducers: {
        addPassanger: (state, { payload }) => {
            state.passanger = [...state.passanger, payload.passanger]
        },
        addOrderPassanger: (state, { payload }) => {
            state.orderPassanger = [...state.orderPassanger, payload]
        },
        addPaymentMethod: (state, { payload }) => {
            state.paymentMethod = payload
        }
    }
})

export default passangersSlice.reducer

export const { addPassanger, addOrderPassanger, addPaymentMethod } = passangersSlice.actions