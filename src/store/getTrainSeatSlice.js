import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSeat = createAsyncThunk(
    'seat/getSeat',
    async(id) => {
        const response = await axios(`https://students.netoservices.ru/fe-diplom/routes/${id}/seats`)
        console.log(response.data)
        return response.data
    }
)

const data = localStorage.getItem('seats');

const getTrainSeatSlice = createSlice({
    name: 'getTrainSeat',
    initialState: {
        train: data ? JSON.parse(data) : [],
        loading: false,
        error: null,
        seat: []
    },
    reducers: {
        getTrain: (state, { payload }) => {
            state.train = payload;
            localStorage.setItem('train', JSON.stringify(payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSeat.pending, (state) => {
            state.loading =  true;
        }),
        builder.addCase(getSeat.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.seat = payload
        }),
        builder.addCase(getSeat.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error
        })
    }    
})

export default getTrainSeatSlice.reducer

export const { getTrain } = getTrainSeatSlice.actions