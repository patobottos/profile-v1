// CURRENTLY NOT USING THIS COMPONENT

import React from "react";

type ThemeProps = {
  theme: string;
};

function Theme({ theme }: ThemeProps) {
  return (
    <div className="bg-pills rounded-2xl mr-4 px-3 mt-2 leading-8">{theme}</div>
  );
}

export default Theme;
