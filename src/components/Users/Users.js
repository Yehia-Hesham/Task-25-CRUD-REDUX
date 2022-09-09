// import { useState } from "react";
import react, {useEffect, useState} from 'react';
import { useDispatch, useSelector, connect} from 'react-redux';

import { readUsers } from '../../store/users/users.actions';
import MultipleActionsTable from '../tables/table';
import UserForm from '../form/form';

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(({userReducer}) => userReducer.data)
    const [modal, setModal] = useState(false);
    const [id, setid] = useState(0);
    const toggle = () => setModal(!modal);
    // const isFetching = useSelector(({users}) => users.isFetching)
    // const errorMessage = useSelector(({users}) => users.errorMessage)

    useEffect(() => {
        dispatch(readUsers());
        // console.log("users: ", users)
    },[])

    useEffect(() => {
        console.log("Users.js" ,users)
    },[users])

    // return (
    //     // console.log("users: ", users);
    //     // <h2> {users}</h2>
    // )
    if (users.length !== 0) {
        return  (!modal)? ( 
                    <>
                        <MultipleActionsTable users={users} dispatch={dispatch} toggleModal={toggle} setid={setid} />
                        <button className='add_button' onClick={() => { toggle(); setid(0) }}>add</button>
                    </>
        ): (
                    <UserForm modal={modal} toggle={toggle} id={id} />
        ) 
    } 
}   

