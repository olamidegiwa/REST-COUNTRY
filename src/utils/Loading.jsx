import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const Loading = ({ darkMode }) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState(darkMode ? "darkgrey" : "darkred");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="py-5 bg-main-color">
      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
