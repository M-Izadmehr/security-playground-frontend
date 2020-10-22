import React from "react";
import ControlDormancy from "./ControlDormancy";
import LoggedKeysList from "./LoggedKeysList";

const HackerPanel = () => (
  <div className="card">
    <div className="title">Hacker Panel</div>
    <ControlDormancy />
    <LoggedKeysList />
  </div>
);

export default HackerPanel;
