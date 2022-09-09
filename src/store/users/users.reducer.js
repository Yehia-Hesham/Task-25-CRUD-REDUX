import UsersActionTypes from "./users.types";
import {
    updateUserDetails,
    createNewUser,
    deleteOldUser
  } from "../../utils/modifier";

const initialState = {
    isFetching: false,
    status: "idle",
    data: [],
    details: {},
    related: [],
    errorMessage: null,
    message: null,
  };

  const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UsersActionTypes.CREATE_USER_START:
            return {
                ...state,
                isFetching: true,
            };
        case UsersActionTypes.CREATE_USER_SUCCESS: 
            return {
                ...state,
                data: createNewUser(state.data, action.payload),
                isFetching:false
            }
        case UsersActionTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case UsersActionTypes.READ_USERS_START: 
        console.log("Read users start")
            return {
                ...state,
                isFetching:true,
            }
        case UsersActionTypes.READ_USERS_SUCCESS:
            console.log("data: ",action.payload)
            // console.log("Fetching: ",isFetching)
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case UsersActionTypes.READ_USERS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage: action.payload
            }
        case UsersActionTypes.READ_USER_START:
            return {
                ...state,
                isFetching: true
            }
        case UsersActionTypes.READ_USER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: action.payload
            }
        case UsersActionTypes.READ_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case UsersActionTypes.UPDATE_USER_START:
            return {
                ...state,
                isFetching: true
            }
        case UsersActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: updateUserDetails(state.data, action.payload)
            }
        case UsersActionTypes.UPDATE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case UsersActionTypes.DELETE_USER_START:
            return {
                ...state,
                isFetching:true
            }
        case UsersActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: deleteOldUser(state.data, action.payload)
            }
        case UsersActionTypes.DELETE_USER_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
  }

  export default userReducer;