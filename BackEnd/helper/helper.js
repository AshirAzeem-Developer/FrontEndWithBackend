const ResponseObj = {
    status: null,
    data: null,
    error: "",
    message: ""
}

const sendResponse = ( status, data, error, message ) => {
    ResponseObj.status = status;
    ResponseObj.data = data;
    ResponseObj.error = error;
    ResponseObj.message = message;

    return ResponseObj
}

module.exports = {
    sendResponse
}