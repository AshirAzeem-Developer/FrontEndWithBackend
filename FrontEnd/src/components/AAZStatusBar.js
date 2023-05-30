import { Box } from "@mui/system";

function AAZStatusBar(props) {
    const { statusData } = props;
    let maximum = statusData.map((x) => x.value);
    maximum = Math.max(...maximum);
    return (
        <Box>
            <Box className="statusParent">
                {statusData && Array.isArray(statusData) && statusData.length > 0
                    ? statusData.map((x, i) => (
                        <Box
                            key={i}
                            sx={{ backgroundColor: `${x.color}` }}
                            className="statusThumb"
                        >
                            {x.label}
                        </Box>
                    ))
                    : null}
            </Box>
        </Box>
    );
}

export default AAZStatusBar;