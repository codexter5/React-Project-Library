import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-amber-50/80 flex items-center justify-center z-50">
      <ClipLoader
        color="#92400e"  // warm brown color
        loading={loading}
        size={100}
        className="mx-auto"
      />
    </div>
  );
};

export default Spinner;
