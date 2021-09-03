import React from "react";
import ButtonCpt from "./common/ButtonCpt";

function ButtonPage() {
  return (
    <div className="main">
      <div className="container">
        <h1>Buttons</h1>
        <div className="btn-simple">
          <ButtonCpt
            size="md"
            variant="default"
            color="default"
            name="Default"
          />

          <ButtonCpt
            size="md"
            variant="outline"
            color="pri-white"
            name="Default"
          />

          <ButtonCpt
            size="md"
            variant="text"
            color="pri-white"
            name="Default"
          />
        </div>
        <div className="btn-disabled">
          <ButtonCpt
            size="md"
            disabled={true}
            variant="default"
            color="default"
            name="Disabled"
          />
          <ButtonCpt
            size="md"
            disabled={true}
            variant="text"
            color="pri-white"
            name="Disabled"
          />
        </div>
        <div className="btn-icon">
          <ButtonCpt
            size="md"
            icon="left"
            variant="default"
            color="primary"
            name="Default"
          />
          <ButtonCpt
            size="md"
            icon="right"
            variant="default"
            color="primary"
            name="Default"
          />
        </div>
        <div className="btn-size">
          <ButtonCpt
            size="sm"
            variant="default"
            color="primary"
            name="Default"
          />
          <ButtonCpt
            size="md"
            variant="default"
            color="primary"
            name="Default"
          />
          <ButtonCpt
            size="lg"
            variant="default"
            color="primary"
            name="Default"
          />
        </div>
        <div className="btn-color">
          <ButtonCpt
            size="md"
            variant="default"
            color="default"
            name="Default"
          />
          <ButtonCpt
            size="md"
            variant="primary"
            color="primary"
            name="Primary"
          />
          <ButtonCpt
            size="md"
            variant="default"
            color="secondary"
            name="Secondary"
          />
          <ButtonCpt size="md" variant="default" color="danger" name="Danger" />
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
