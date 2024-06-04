import { createSlice } from "@reduxjs/toolkit"

const getFilterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterOptions: {
            coupe: false,
            reserved: false,
            seated: false,
            lux: false,
            wifi: false,
            express: false
        }
    },
    reducers: {
        addFilterOptions: (state, { payload }) => {
            const { id, check } = payload
            state.filterOptions[id] = !check
        }
    }
    
})

export default getFilterSlice.reducer

export const { addFilterOptions } = getFilterSlice.actions