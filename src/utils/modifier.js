export const updateUserDetails = (user_list, userToUpdate) => {
    const user = user_list.find((user) => user.id === userToUpdate.id);
    user_list[user_list.indexOf(user)] = userToUpdate;
    return user_list;
}

export const createNewUser = (user_list, userToCreate) => {
    user_list.push(userToCreate);
    return user_list;
}

export const deleteOldUser = (user_list, id) => {
    return user_list.filter( user => user.id === id);
}