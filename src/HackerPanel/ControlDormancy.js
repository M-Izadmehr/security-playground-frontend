import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const ControlDormancy = () => {
  const [isDormant, setIsDormant] = useState(false);

  // fetch data
  const getDormancy = async () => {
    const data = await fetch(`${BASE_URL}/css-keylogger/dormant`);
    const { isDormant } = await data.json();
    setIsDormant(isDormant);
  };

  // get initial value
  useEffect(() => {
    getDormancy();
  });

  const handleChange = async () => {
    console.log("===  ===");
    const params = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isDormant: !isDormant }),
    };

    const data = await fetch(`${BASE_URL}/css-keylogger/dormant`, params);
    const dataJson = await data.json();
    console.log('dataJson: ', dataJson)
    
    setIsDormant(dataJson.isDormant);
    window.location.reload()
  };

  return (
    <div>
      <label>
        Do you want to go dormant?
        <input
          type="checkbox"
          name="isDormant"
          checked={isDormant}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ControlDormancy;
