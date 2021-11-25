import axios from "axios";
import {
    GET_ITEM ,
      SET_LOADING,
      
  } from "../const/actionTypes";
  //Add todo
  
export const addItem = (newItem) => async (dispatch) => {
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addItem", newItem,options);
     dispatch(getItems());
    } catch (error) {
      console.log(error)
    

    }
  };


  //get todo
  export const getItems = () => async (dispatch) => {
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/all",options);
     dispatch({
        type:GET_ITEM ,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };

  
 
  //delete todo
  export const deleteItem = id => dispatch => {
   dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteItem/${id}`,options);
      dispatch(getItems());
    } catch (error) {
      const errorsArray = error.response.data.errors;
      const msg = error.response.data.msg
      if (Array.isArray(errorsArray)) {
        errorsArray.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }

    }
    };
 
   

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

