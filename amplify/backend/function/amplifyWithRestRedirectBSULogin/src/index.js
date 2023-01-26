exports.handler = (event, context, callback) => {
    const response = {
     statusCode: 301,
     headers: {
       Location: 'https://idp.boisestate.edu/idp/profile/SAML2/Redirect/SSO;jsessionid=2kgur9jxigtu1jn9zbemopdj3?execution=e1s1',
     }
   };
 
   return callback(null, response);
 }
