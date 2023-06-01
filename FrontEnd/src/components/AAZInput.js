import { TextField } from "@mui/material";
import React from "react";

function AAZInput( props ) {
    const {
        label,
        disabled,
        onChange,
        color,
        variant,
        type,
        myClass,
        value
    } = props;
    return (
        <>
            <TextField
                className={ myClass }
                color={ color }
                label={ label }
                disabled={ disabled }
                onChange={ onChange }
                variant={ variant }
                type={ type }
                value={ value }
            />
        </>
    );
}
export default AAZInput;
