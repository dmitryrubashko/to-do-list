import {memo} from "react";

const DisplayData = ({data}) => {
  return <div>
    <p>Email: {data.email}</p>
    <p>Password: {data.password}</p>
  </div>
};

export default memo(DisplayData);