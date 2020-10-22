import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const LoggedKeysList = () => {
  const [data, setData] = useState([]);
  // fetch data
  const loadData = async () => {
    const loggedKeys = await fetch(`${BASE_URL}/css-keylogger/keys`);
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
    <div>
      <p>List of logged key strokes by client:</p>

      {data
        .sort((a, b) => b.time - a.time)
        .map(({ time, key }) => {
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

export default LoggedKeysList;
