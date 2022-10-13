import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <CircularProgress /> : null,
    () => setLoading(true),
    () => setLoading(false)
  ];
};

export default Loader;