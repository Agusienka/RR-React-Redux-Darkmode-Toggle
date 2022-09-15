import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://www.placecage.com/200/300'
}

const mode2 = {
    darkMode: false,
    color1: '#A7DBDB',
    color2: '#E0E4CC',
    color3: '#69D2E7',
    color4: '#F38630',
    color5: '#FA6900',
    photo: 'https://placekitten.com/200/300'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        lightMode: () => {
            return mode2
        },
        darkMode: () => {
            return mode1
        }
    }
})

export const { lightMode, darkMode } = modeSlice.actions

export default modeSlice.reducer