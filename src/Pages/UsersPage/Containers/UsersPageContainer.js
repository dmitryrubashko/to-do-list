import React, {useState, useCallback} from 'react';
import UsersPageLayout from "../Components/Layout";
import {users as userList} from "../mock";

const UsersPageContainer = () => {
  const [users, setUsers] = useState(userList);

  const handleRemove = useCallback((itemIndex) => {
    const usersCopy = [...users];

    usersCopy.splice(itemIndex, 1);
    setUsers(usersCopy)
  }, [users])
  return <UsersPageLayout userList={users} handleRemove={handleRemove}/>
};

export default UsersPageContainer;