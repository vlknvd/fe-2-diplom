import { configureStore } from '@reduxjs/toolkit'
import citySlice from './getCitySlice'
import choiceSlice from './choiceSlice'
import subscribeSlice from './subscribeSlice'
import getTrainsSlice from './getTrainsSlice'
import getLastRoutes from './getLastRoutes'
import getWidgetFilterSlice from './getWidgetFilterSlice'
import getTrainSeatSlice from './getTrainSeatSlice'


export const store = configureStore({
    reducer: {
        city: citySlice,
        choice: choiceSlice,
        subscribe: subscribeSlice,
        trains: getTrainsSlice,
        lastRoutes: getLastRoutes,
        filter: getWidgetFilterSlice,
        trainSeat: getTrainSeatSlice
    }
})