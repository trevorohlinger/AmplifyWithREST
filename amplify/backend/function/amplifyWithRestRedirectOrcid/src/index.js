exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://sandbox.orcid.org/oauth/authorize?client_id=APP-RASOJQY62Z86Q8CU&response_type=code&scope=/read-limited&redirect_uri=http://localhost:3000/'
    //  Location: 'https://spm35eaceb.execute-api.us-west-2.amazonaws.com/dev/orcid'
    }
  };

  //return callback(null, response);
