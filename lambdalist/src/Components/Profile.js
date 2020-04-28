import React from "react";

const initialProfile = {
  username: "",
  password: "",
  email: "",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            onChange={onInputChange}
            value={}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={onInputChange}
            value={}
            name="username"
            type="password"
          />
        </label>
        <label>
          email:
          <input onChange={onInputChange} value={} name="email" type="text" />
        </label>
      </form>
    </div>
  );
}
