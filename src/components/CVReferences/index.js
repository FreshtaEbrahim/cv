import React from "react";
import "./CVReferences.css";
import { VscReferences } from "react-icons/vsc";

export default function CVReferences() {
  return (
    <div className="CVReferences">
      <div className="CVReferences-title">
        <div className="CVReferences-headline">
          References
          <VscReferences className="CVReferences-icon" />
        </div>
      </div>

      <div className="CVReferences-text">
        <h2 className="CVReferences-header">Available upon request</h2>
        <p className="CVReferences-body"></p>
      </div>
    </div>
  );
}
