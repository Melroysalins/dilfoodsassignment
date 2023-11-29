import Cartslice from "./Cartslice";

const { configureStore } = require("@reduxjs/toolkit");



export const appstore = configureStore({

    reducer:{

        cart: Cartslice
    }
})