import { createReducer } from "../common/Redux-Utils/SimpleDataReducer";
import { GET_TODAYS_QUOTE_API } from "./actions";
import { DEVICE_LIST_REDUCER, TODAYS_QUOTE } from "./const";
import * as actions from "./actions";

const todaysQuoteReducer = createReducer(GET_TODAYS_QUOTE_API);

const initialState = [{
    id:1,
    model: "A2482",
    name: "iPhone 8",
    os: "ios",
    currentowner: "", 
    notes:""
},
{ id:2,
    model: "A2432",
    name: "iPhone 7",
    os: "ios",
    currentowner: "", 
    notes:""
},
{ id:3,
    model: "A2582",
    name: "iPhone 11",
    os: "ios",
    currentowner: "", 
    notes:""
},
{ id:4,
    model: "B2482",
    name: "iPhone 12",
    os: "ios",
    currentowner: "", 
    notes:""
},
{ id:5,
    model: "A24824",
    name: "Vivo V23",
    os: "Ocean",
    currentowner: "", 
    notes:""
},
{ id:6,
    model: "A8482",
    os: "Tizen",
    name: "Samsung Galaxy S22",
    currentowner: "", 
    notes:""
},
{ id:7,
    model: "A2982",
    name: "Realme C11",
    os: "ColorOS",
    currentowner: "", 
    notes:""
}]

export function deviceListReducer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_DEVICE_LIST:
            let olderArr = [...state]
            const findIndex = olderArr.findIndex((x) => x.model === action.data.model)
            console.log("findIndex ",findIndex)
            if (findIndex !== -1) {
                olderArr[findIndex] = action.data
            } else{
                olderArr.push(action.data)
            }
            return [...olderArr]
     
        case actions.REMOVE_DEVICE:{
            let olderArr = [...state]
            olderArr = olderArr.filter((item) => item.model !== action.data.model)
            return [...olderArr]
        }

        default:
            return state;
    }
  }

export default {
    [TODAYS_QUOTE]: todaysQuoteReducer,
    [DEVICE_LIST_REDUCER]: deviceListReducer
}
 