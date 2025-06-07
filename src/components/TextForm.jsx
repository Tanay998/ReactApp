import React, { useState } from 'react';

const TextForm = (props) => {
  const getFormBackground = () => {
    switch(props.currentTheme) {
      case 'blue': return 'bg-info';
      case 'brown': return 'bg-danger';
      case 'purple': return 'bg-secondary'; // or custom purple class
      case 'dark': return 'bg-primary';
      default: return 'bg-light';
    }
  };

  const getTextColor = () => {
    return ['brown', 'purple', 'dark'].includes(props.currentTheme) 
      ? 'white' 
      : 'black';
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleCase = () => {
    if (!text.trim()) {
      setText("");
      return;
    }

    let newText = text.split(' ')
      .filter(word => word.trim() !== '')
      .map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + 
          word.slice(1).toLowerCase();
      })
      .join(' ');

    setText(newText);
  };

  const handleReverseCase = () => {
    let newText = text.split(' ')
      .map(word => {
        if(word.trim() === '') return '';
        return word.split('').reverse().join('');
      }).join(' ');
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea 
            className={`form-control ${getFormBackground()}`} 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            id="myBox" 
            rows="8" 
            style={{color: getTextColor()}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-secondary ms-3" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-danger ms-3" onClick={handleCase}>
          SentenceCase
        </button>
        <button className="btn btn-warning ms-3" onClick={handleReverseCase}>
          ReverseCase
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
          Your text Summary
        </h1>
        <p style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2 style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>Preview</h2>
        <p style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
          {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  )
}

export default TextForm;