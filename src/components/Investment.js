import React, { useState } from "react";

const Investment = () => {
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [close, setClose] = useState(0);

  const onHighHandle = (e) => {
    setHigh(e.target.value);
  };

  const onLowHandle = (e) => {
    setLow(e.target.value);
  };

  const onCloseHandle = (e) => {
    setClose(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("clicked");
  };

  const pivotPoint = (Number(high) + Number(low) + Number(close)) / 3;

  const support1 = pivotPoint * 2 - high;

  const resistance1 = pivotPoint * 2 - low;

  const support2 = pivotPoint - (high - low);

  const resistance2 = pivotPoint + (high - low);

  const support3 = low - 2 * (high - pivotPoint);

  const resistance3 = Number(high) + 2 * (pivotPoint - low);

  //

  return (
    <div className="main">
      <h2>Investment</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="high">High</label>
        <input
          type="number"
          placeholder="High"
          value={high}
          onChange={onHighHandle}
        />
        <label htmlFor="low">Low</label>
        <input
          type="number"
          placeholder="Low"
          value={low}
          onChange={onLowHandle}
        />

        <label htmlFor="close">Close</label>
        <input
          type="number"
          placeholder="Close"
          value={close}
          onChange={onCloseHandle}
        />
        {/* <button type="submit" onClick={onSubmitHandler}>
            Submit
          </button> */}
        {/* {showAll} */}
        <ul>
          <li>P.P: {pivotPoint}</li>
          <li>S1: {support1}---- Normal day</li>
          <li>R1: {resistance1}</li>
          <li>S2: {support2}---- News day</li>
          <li>R2: {resistance2}</li>
          <li>S3: {support3}---- Event day</li>
          <li>R3: {resistance3}</li>
        </ul>
      </form>
    </div>
  );
};

export default Investment;
