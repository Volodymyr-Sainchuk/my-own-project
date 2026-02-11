import { useState } from "react";

function ControlInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>this text: {value}</p>
    </div>
  );
}

export default ControlInput;
