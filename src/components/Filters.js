import React from "react";
import { users } from "../utils/constants";

const Filters = (props) => {
  const { appliedFilters, setAppliedFilters } = props;

  const handleUserSelection = (e) => {
    const selectedUser = users.filter((user) => user.id === e.target.value)[0];
    if (selectedUser) {
      setAppliedFilters((prev) => {
        return { ...prev, user: selectedUser.id };
      });
    } else {
      setAppliedFilters((prev) => {
        return { ...prev, user: "" };
      });
    }
  };

  return (
    <div>
      <select
        name="selectedUser"
        id="user-select"
        onChange={handleUserSelection}
        value={appliedFilters.user}
      >
        <option value="">--User--</option>
        {users.map((user, index) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
