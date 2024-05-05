import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getTrains = createAsyncThunk(
    'trains/getTrains',
    async(choice) => {
        const { fromCity, toCity, fromDate, toDate } = {...choice}
        const response = await axios(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${fromCity._id}&to_city_id=${toCity._id}&date_start=${fromDate}&date_end=${toDate}`)
        return response.data
    }
)

export const getTrainsSlice = createSlice({
    name: 'trainsSlice',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTrains.pending, (state) => {
            state.loading =  true;
        }),
        builder.addCase(getTrains.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.items = payload.items
            localStorage.setItem('trains', JSON.stringify(payload.items))
        }),
        builder.addCase(getTrains.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error
        })
    }
})

export default getTrainsSlice.reducer