import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setInputText((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input
          name="title"
          placeholder="Title"
          value={inputText.title}
          onChange={handleChange}
        />)}
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputText.content}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={(event) => {
            props.onClick(inputText);
            setInputText({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          ＋
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
