import React, { useEffect, useState } from "react";

const HackerPanel = () => {
  const [data, setData] = useState([]);
  // fetch data
  const loadData = async () => {
    const loggedKeys = await fetch("https://security-check-playground.herokuapp.com/css-keylogger/keys");
    const loggedKeysJson = await loggedKeys.json();
    setData(loggedKeysJson);
  };

  // get logged keys
  useEffect(() => {
    const intervalId = setInterval(loadData, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="card">
      <div className="title">Hacker Panel</div>
      <p>List of logged key strokes by client:</p>
      {data.map(({ time, key }) => {
        const date = new Date(time);
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hour = date.getHours();
        return (
          <div key={time} className="d-flex">
            <div style={{ width: 120 }}>
              <b>time: </b>
              {hour}:{minutes}:{seconds}
            </div>
            <div>
              <b>value: </b>
              {key}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HackerPanel;
