import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "yellow",
};

function Spinner() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        className="spinner"
        color="yellow"
        loading={loading}
        cssOverride={override}
        size={180}
      />
      <p className="loading">Loading data from API</p>
    </div>
  );
}

export default Spinner;