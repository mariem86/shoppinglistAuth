import {

    GET_ITEM,
    SET_LOADING,
} from "../const/actionTypes";
const initState = {
 items:[],
 isLoading: false,
};
export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_ITEM:
      return {
        ...state,
        items: payload, isLoading: false  };
              default:
                return state;
            }
          }
         