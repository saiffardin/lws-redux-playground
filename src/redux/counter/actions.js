import {DECREMENT, INCREMENT} from "./actionTypes"

export const actionIncrement = () => {
    return {
        type: INCREMENT
    }
}

export const actionDecrement = () => {
    return {
        type: DECREMENT
    }
}