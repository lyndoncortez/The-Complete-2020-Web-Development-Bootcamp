import React, { useState } from "react";

function CreateArea(props) {
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

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputText.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            props.onClick(inputText);
            setInputText({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          ＋
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
