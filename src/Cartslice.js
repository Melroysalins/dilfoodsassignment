const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
    name:"cart",

    initialState:{
        Cart_array:[],
    },

    reducers:{

        ADD_TO_CART:(state,action)=>{

            let checkitem = state.Cart_array.find((ele)=>ele.Id === action.payload.Id);

            if(checkitem){

                checkitem.quantity +=1;
                checkitem.totalprice = checkitem.Price* checkitem.quantity;
            }
            else{
                
                state.Cart_array.push(action.payload)

            }

            
        },

        Remove_From_Cart:(state,action)=>{

            let RemoveselectedItem = state.Cart_array.filter((ele)=>ele.Id !== action.payload);

            state.Cart_array = RemoveselectedItem;
        },

        IncrementQuantity:(state,action)=>{

            let ItemExist = state.Cart_array.find((ele)=>ele?.Id === action.payload);

            ItemExist.quantity +=1;
            ItemExist.totalprice = ItemExist.Price* ItemExist.quantity;
        },

        DecrementQuantity:(state,action)=>{

            let itemToDecrement = state.Cart_array.find((ele) => ele?.Id === action.payload);

            if (itemToDecrement) {
                if (itemToDecrement.quantity === 1) {
                   
                    state.Cart_array = state.Cart_array.filter((ele) => ele.Id !== action.payload);
                } else if (itemToDecrement.quantity > 1) {
                    itemToDecrement.quantity -= 1;
                    itemToDecrement.totalprice = itemToDecrement.Price * itemToDecrement.quantity;
                }
            }
        },

        ClearCart:(state)=>{

            state.Cart_array =[]
        }

    }
})


export default CartSlice.reducer

export const {ADD_TO_CART, Remove_From_Cart,IncrementQuantity,DecrementQuantity,ClearCart} = CartSlice.actions