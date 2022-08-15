import React from "react";

var colour = "";
var number = "0";

function ProgressBar(props: { numbers: number, typeStatus: string }) {
  const number = props.numbers;
  const type = props.typeStatus

  if (number < 30) {
    colour = "rgb(1, 212, 173)";
  } else if (number >= 30 && number < 70) {
    colour = "rgb(248, 188, 1)";
  } else {
    colour = "rgb(243, 1, 1)";
  }

  const outerReact = {
    height: 20,
    width: "100%",
    display: 'flex',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 6,
  };

  const innerReact = {
    height: "100%",
    width: `${number}%`,
    backgroundColor: colour,
    borderRadius: "inherit",
    textAlign: 'end',
    fontFamily: "Montserrat,sans-serif",
    fontSize: 14,
    color: "#fff",
    paddingRight: 6,
    paddingTop: 2,
    fontWeight: 600
  };

  const spanReact = {
    fontFamily: "Montserrat,sans-serif",
    fontSize: 14,
    color: "#7A7D80",
  }

  return (
    <>
    <span style={spanReact} >{`${type}`}</span>
      <div style={outerReact}>
        <div style={innerReact as any}>{number}</div>
      </div>
    </>
  );
}

export default ProgressBar;
