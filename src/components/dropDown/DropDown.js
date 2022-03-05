import React from "react";
import "./DropDown.scss"

export default function DropDown({data, firstElem, setTown}) {

  const handleChange = (e) => {
    setTown(e.target.value)
  };

  return (
    <div className="dropDown">
      <select className="local" onChange={(e)=>handleChange(e)}>
        <option value="all">{firstElem}</option>
        {
          data.map((town,i) => {
            return <option key={"option-" + i} value={town.id}>{town.name}</option>
          })
        }
      </select>
    </div>
  );
}