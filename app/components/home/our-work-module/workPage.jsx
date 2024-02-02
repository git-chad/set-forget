import React from "react";
import FirstSec from "./firstSec";
import SecondSec from "./secondSec";
import Carousels from "../../ecyce/carousels";

const WorkPage = () => {
  return (
    <div>
      <FirstSec />
      <SecondSec />
      <Carousels type={'talk'}/>
    </div>
  );
};

export default WorkPage;
