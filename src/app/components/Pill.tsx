import React from "react";

type PillProps = {
  title: string;
};

function Pill({ title }: PillProps) {
  return (
    <div className="bg-pills rounded-2xl mr-4 px-3 mt-2 leading-8">{title}</div>
  );
}

export default Pill;
