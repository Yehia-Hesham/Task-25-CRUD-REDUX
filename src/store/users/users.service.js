import apiClient from "../../utils/apiClient";
const RESOURCE = 'user';

const createUser = (data) => {
    return apiClient.post(`${RESOURCE}/create?`,data);
}

const readUsers = () => {
    return apiClient.get(RESOURCE);
}

const readUser = (id) => {
    return apiClient.get(`${RESOURCE}/${id}`);
}

const updateUser = (id,data) => {
    return apiClient.put(`${RESOURCE}/${id}`,data);
}

const deleteUser = (id) => {
    return apiClient.delete(`${RESOURCE}/${id}`);
}

export default {createUser, readUsers, readUser, updateUser, deleteUser}