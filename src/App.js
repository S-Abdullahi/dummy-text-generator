import React, { useState } from "react";
import Paragraph from "./data";

export default function App() {
  // const splitData = Paragraph.split(",")
  const [value, setValue] = useState("");
  const [paragraph, setParagraph] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function generateParagraph() {
    const paragraphList = Paragraph.slice(0, value);
    setParagraph(paragraphList);
  }

  return (
    <>
      <h1>TIIRED OF BORING LOREM IPSUM</h1>

      <div className="head-con">
        <label>Paragraphs:</label>
        <input type="number" className="input" onChange={handleChange} />
        <button onClick={() => generateParagraph()}>Generate</button>
      </div>
      {paragraph.map((item, index) => {
        return (
          <div className="paragraph" key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </>
  );
}
