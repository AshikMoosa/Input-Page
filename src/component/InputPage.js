import React from "react";
import InputCpt from "./common/InputCpt";

function InputPage() {
  return (
    <div className="input-section">
      <div className="container">
        <h1>Inputs</h1>
        <div className="inp-simple">
          <InputCpt size="default" />
          <InputCpt size="default" error="error" />
          <InputCpt size="default" disabled={true} />
        </div>
        <div className="inp-helper">
          <InputCpt size="default" helper="Some interesting text" />
          <InputCpt
            size="default"
            error="error"
            helper="Some interesting text"
          />
        </div>
        <div className="inp-icon">
          <InputCpt size="default" icon="phone" />
          <InputCpt size="default" icon="lock" />
        </div>
        <div className="inp-value">
          <InputCpt size="default" value="Text" />
        </div>
        <div className="inp-size">
          <InputCpt size="sm" />
          <InputCpt size="default" />
        </div>
        <div className="inp-fullwidth">
          <InputCpt size="default" value="Text" />
        </div>
        <div className="inp-multiline">
          <label>Label</label>
          <textarea rows="5" placeholder="Placeholder"></textarea>
        </div>
      </div>
    </div>
  );
}

export default InputPage;
