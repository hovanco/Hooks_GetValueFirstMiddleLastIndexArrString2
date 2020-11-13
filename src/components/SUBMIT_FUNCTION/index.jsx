import React, { useState } from "react";
import { getFirstMiddleLastIndex } from "../HANDLE_STRING_FUNCTION";

function SUBMIT_FUNCTION() {
  const [stringInput, setStringInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(getFirstMiddleLastIndex(stringInput));
  };
  const handleReset = (event) => {
    event.preventDefault();
    setStringInput("");
    setResult("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            ARRAY STRING INPUT - SHOW VALUE FIRST - MIDDLE -LAST OF INDEX
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Array string input</label>
                <input
                  type="text"
                  className="form-control"
                  name="num1"
                  value={stringInput}
                  onChange={(e) => setStringInput(e.target.value)}
                  placeholder="Enter list string-number"
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Result</label>
                <input type="text" className="form-control" value={result} />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={!stringInput} // disabled Submit btn after enter data at input
            >
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SUBMIT_FUNCTION;
