import { userAPI } from '../../api'

const actions = {
    setUsers : users => ({type: "USER:SET_DATA", users}),
    fetchUsers: () => async dispatch => {
        let data = await userAPI.get();
        dispatch(actions.setUsers(data.users));
     }
}

export default actions;