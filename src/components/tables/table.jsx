import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table'
// import { deleteOldUser } from '../utils/modifier';
import { deleteUser } from '../../store/users/users.actions';
import { readUsers } from '../../store/users/users.actions';
function MultipleActionsTable({users, dispatch, toggleModal,setid}) {

  // const users = useSelector(({userReducer}) => userReducer.data)
  // const dispatch = useDispatch()

    return (
      <MaterialTable
        title="User Management System"
        columns={[
          // { title: 'ID', field: 'id'},
          { title: 'Title', field: 'title' },
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName'},
          { title: 'email', field:'email'}
          // { title: 'Picture URL', field: 'picture'},
        ]}
        // data={[...users]}
        data={users.map(x =>Object.assign({}, x))}        
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit User',
            onClick: (event, rowData) => {
              setid(rowData.id)
              toggleModal()

            }
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => {
              console.log("delete: ",rowData.id)
              dispatch(deleteUser(rowData.id))
              // dispatch(readUsers())
            }
          }
        ]}
      />
    )
  }
  export default MultipleActionsTable;