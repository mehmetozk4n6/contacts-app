import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import Cities from "./Cities";

function Header({ city, setCity }) {
  const handleCity = (e) => {
    setCity(e);
    console.log(e);
  };

  return (
    <div className="bg-success p-2 text-white bg-opacity-75">
      <DropdownButton
        id="dropdown-basic-button"
        title={city || "Select City"}
        align="start"
        // onClick={handleChange("userRole")}
        onSelect={handleCity}
      >
        {/* <Dropdown.Item eventKey="Turkey">Turkey</Dropdown.Item> */}

        {Object.values(Cities).map((cityTr, index) => (
          <Dropdown.Item
            key={index}
            eventKey={
              cityTr.charAt(0).toUpperCase() + cityTr.slice(1).toLowerCase()
            }
          >
            {cityTr}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default Header;
