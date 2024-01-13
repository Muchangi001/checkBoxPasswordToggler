import React, { useState } from "react";

const Input = (props) => {
  return <input type={props.showPassword ? "text" : "password"} />;
};

function Checkbox(props) {
  const handleBoxChange = (e) => {
    props.onToggle(e.target.checked);
  };

  return <input onChange={handleBoxChange} type="checkbox" />;
}

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (isChecked) => {
    setShowPassword(isChecked);
  };

  return (
    <div>
      <Checkbox onToggle={togglePasswordVisibility} />
      <Input showPassword={showPassword} />
    </div>
  );
};

export default App;
