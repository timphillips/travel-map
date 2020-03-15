import React from "react";

export function InfoBox() {
  return (
    <div className="infoBox">
      <h1 className="infoBox__title">Travel Log</h1>
      <p className="infoBox__subtitle">
        Created by{" "}
        <a
          href="http://www.tim-phillips.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tim Phillips
        </a>
        . Source code on{" "}
        <a
          href="https://github.com/timphillips/travel-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
