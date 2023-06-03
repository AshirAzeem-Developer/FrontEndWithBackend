import * as React from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';



export default function AAZInputWithIcon( props ) {
    const { inputHeading, myIcon, type } = props
    return (
        <Box sx={ { m: 2 } }>
            <Box sx={ { display: 'flex', alignItems: 'flex-end', width: '250' } } >
                { myIcon }
                <TextField id="input-with-sx" label={ inputHeading } variant="standard" className="w-100 p-1 mx-3" type={ type } />
            </Box>
        </Box>
    );
}