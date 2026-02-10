import { useState } from "react";

function ToggleText() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? "hide" : "show"}</button>

      {isOpen && <p>this text will be hiden</p>}
    </div>
  );
}

export default ToggleText;
