import { useState } from "react";
import "./App.css";
import { BsSearch } from "react-icons/bs";
function App() {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <div className={ `${"search"} ${isOpen ? "active" : ""}` }>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        ref={ (input) => input && input.focus() }
      />
      <button className="btn" onClick={ () => setOpen(!isOpen) }>
        <i>
          <BsSearch />{ " " }
        </i>
      </button>
    </div>
  );
}

export default App;
