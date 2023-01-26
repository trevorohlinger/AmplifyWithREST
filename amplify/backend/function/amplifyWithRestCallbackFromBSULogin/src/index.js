exports.handler = async (event) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'http://localhost:3000?code=true'
    }
  };

  return response;
};
