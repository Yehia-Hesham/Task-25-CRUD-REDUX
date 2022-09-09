import UsersActionTypes from "./users.types";
import usersService from "./users.service";

export const createUserStart = (user) => ({
    type: UsersActionTypes.CREATE_USER_START,
    payload: user,
});

export const createUserSuccess = (user) => ({
    type: UsersActionTypes.CREATE_USER_START,
    payload: user,
});

export const createUserFailure = (errorMessage) => ({
    type: UsersActionTypes.CREATE_USER_FAILURE,
    payload: errorMessage,
});

export const readUsersStart = () => ({
    type: UsersActionTypes.READ_USERS_START,
});

export const readUsersSuccess = (users) => ({
    type: UsersActionTypes.READ_USERS_SUCCESS,
    payload: users,
});

export const readUsersFailure = (errorMessage) => ({
    type: UsersActionTypes.READ_USERS_FAILURE,
    payload: errorMessage,
});

export const readUserStart = () => ({
    type: UsersActionTypes.READ_USER_START,
});

export const readUserSuccess = (user) => ({
    type: UsersActionTypes.READ_USER_SUCCESS,
    payload: user,
});

export const readUserFailure = (errorMessage) => ({
    type: UsersActionTypes.READ_USER_FAILURE,
    payload: errorMessage,
});

export const updateUserStart = (payload) => ({
    type: UsersActionTypes.UPDATE_USER_START,
    payload,
});

export const updateUserSuccess = (user) => ({
    type: UsersActionTypes.UPDATE_USER_SUCCESS,
    payload: user,
});

export const updateUserFailure = (errorMessage) => ({
    type: UsersActionTypes.UPDATE_USER_FAILURE,
    payload: errorMessage,
});

export const deleteUserStart = (payload) => ({
    type: UsersActionTypes.DELETE_USER_START,
    payload,
});

export const deleteUserSuccess = (id) => ({
    type: UsersActionTypes.DELETE_USER_SUCCESS,
    payload: id,
});

export const deleteUserFailure = (errorMessage) => ({
    type: UsersActionTypes.DELETE_USER_FAILURE,
    payload: errorMessage,
});

//=======================================================

export const readUser = (id) => async (dispatch) => {
    dispatch(readUserStart());
    try{
        const response = await usersService.readUser(id);
        dispatch(readUserSuccess(response.data))
    }
    catch (error){
        dispatch(readUserFailure(error));
    }
}

export const readUsers = () => async (dispatch) => {
    dispatch(readUsersStart());
    try{
        const response = await usersService.readUsers();
        console.log("Read users", response.data.data)
        dispatch(readUsersSuccess(response.data.data))
    }
    catch (error){
        dispatch(readUsersFailure(error));
    }
}

export const createUser = (userData)=> async (dispatch)=>{
    dispatch(createUserStart());
    try{
        const response = await usersService.createUser(userData);
        dispatch(createUserSuccess(response.data)); 
        dispatch(readUsers())   //extra  
    } catch(error){
        dispatch(createUserFailure(error));
    }
}

export const updateUser = (userData,id)=> async (dispatch)=>{
    dispatch(updateUserStart());
    try{
        const response = await usersService.updateUser(id, userData);
        dispatch(updateUserSuccess(response.data)); 
        dispatch(readUsers())  //extra
    } catch(error){
        dispatch(updateUserFailure(error));
    }
}

export const deleteUser = (id)=> async (dispatch)=>{
    dispatch(deleteUserStart());
    try{
        const response = await usersService.deleteUser(id);
        dispatch(deleteUserSuccess(response.data)); 
        dispatch(readUsers())   //extra  
    } catch(error){
        dispatch(deleteUserFailure(error));
    }
}