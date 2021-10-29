import React from 'react';
import PropTypes from "prop-types";
import UserCard from "../../../../Components/UserCard";

const UsersPageLayout = ({userList, title, handleRemove}) => {

  return <div>
    <h1>{title}</h1>

    <div>
      {userList.map((user, index) =>
        (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            city={user.city}
            handleRemove={() => handleRemove(index)}
          />

        )
      )}
    </div>
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
