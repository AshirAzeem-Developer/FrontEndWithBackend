import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function AAZIconButton( props ) {
  const { color, iconComponent, spacing, direction, disabled, onClick } = props;

  return (
    <Stack direction={ direction } spacing={ spacing }>
      <IconButton disabled={ disabled } color={ color } onClick={ onClick }>
        { iconComponent }
      </IconButton>
    </Stack>
  );
}
