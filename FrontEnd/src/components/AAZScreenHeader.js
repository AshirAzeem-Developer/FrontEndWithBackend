import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AAZModal from "./AAZModal";
export default function AAZScreenHeader( props ) {
    const { screenTitle, buttonList } = props;
    let back = () => {
        window.history.back();
    };
    return (
        <>
            <Box className=' rounded mb-3 bg-white shadow align-items-center p-3' >
                <div className=" d-flex  align-items-center screenHeader">
                    <div>
                        <IconButton onClick={ back } aria-label="delete">
                            <ArrowBackIcon fontSize="large" color="info" />
                        </IconButton>
                    </div>
                    <div>
                        <Typography variant="h5" className="fw-bold">
                            { screenTitle }
                        </Typography>
                    </div>
                    <div className="ms-auto">
                        { buttonList &&
                            buttonList.length > 0 &&
                            buttonList.map( ( e, i ) => {
                                return (
                                    <AAZModal modalTitle="Add Student" key={ i } />
                                )
                            } ) }
                    </div>
                </div>
            </Box>
        </>
    )
}