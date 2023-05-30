import { Button } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function AAZButton( props ) {
  const { label, onClick, disabled, startIcon, endIcon, loading, color } = props;
  return (
    <>
      <Button
        startIcon={ startIcon }
        color={ color }
        endIcon={ endIcon }
        onClick={ onClick }
        variant="contained"
        disabled={ loading || disabled }
      >
        { loading ? <CircularProgress /> : label }
      </Button>
    </>
  );
}
export default AAZButton;
