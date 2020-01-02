// Define Error Codes
let statusCode = {
    OK: 200,
    NOT_FOUND : 404,
    FORBIDDEN : 403,
    UNAUTHORIZED : 401,
    INTERNAL_SERVER_ERROR: 500
    };
     
    // Define Error Messages
    let statusMessage = {    
    DATA_UPDATED: 'Data updated successfully.',
    DELETE_DATA : 'Delete data successfully',
     
    };
     
    module.exports = {
    statusCode: statusCode,
    statusMessage: statusMessage
    }