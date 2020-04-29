import React, { useState } from "react";

function CreateArea(props) {
  const [alert, setalert] = useState(false);
  const [value, setvalue] = useState({
    title: "",
    content: ""
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setvalue(pv => {
      return { ...pv, [name]: value };
    });
  }

  function clickHandler(e) {
    e.preventDefault();
    if (value.content === "") {
      setalert(true);
    } else {
      props.addNote(value);
      setalert(false);
    }
    setvalue({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={changeHandler}
          value={value.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={changeHandler}
          value={value.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={clickHandler}>Add</button>
        <p id="alertnote" style={{ visibility: alert ? "visible" : "hidden" }}>
          please enter a note!
        </p>
      </form>
    </div>
  );
}

export default CreateArea;
