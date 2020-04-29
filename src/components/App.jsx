import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [value, setvalue] = useState([]);
  function deleter(id) {
    setvalue(pv => pv.filter((v, index) => index !== id));
  }
  function addNote(note) {
    setvalue(pv => [...pv, note]);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {value.map((item, index) => (
        <Note
          title={item.title}
          deleter={deleter}
          key={index}
          id={index}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
