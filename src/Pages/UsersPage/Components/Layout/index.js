import React from 'react';
import PropTypes from "prop-types";
import UserCard from "../../../../Components/UserCard";
import {CircularProgress} from '@mui/material'


const UsersPageLayout = ({isLoading, userList, title, handleRemove}) => {

  return <div>
    <h1>{title}</h1>
    {isLoading ? <CircularProgress/> :
      <div>
        {userList?.map(pokemon => (
          <UserCard name={pokemon.name} id={pokemon.id}/>
        ))}
      </div>}

  </div>;
};

UsersPageLayout.defaultProps = {
  title: 'unknown title'
}

UsersPageLayout.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }))
}
export default UsersPageLayout;
