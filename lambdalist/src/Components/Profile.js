import React from "react";

const initialProfile = {
  username: "",
  password: "",
  email: "",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [nameValue, setNameValue] = useState("");
  const [formValues, setFormValues]= useState({
    username:"",
    password: "",
    email: "",
  })

   const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            onChange={handleChange}
            value={}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            value={}
            name="username"
            type="password"
          />
        </label>
        <label>
          email:
          <input onChange={handleChange} value={} name="email" type="text" />
        </label>
      </form>
    </div>
  );
}
