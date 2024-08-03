const { sign } = require("jsonwebtoken") ;

const generateRefreshToken = (id) => {
 
  return   sign({ id },"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ", { expiresIn: "2d" });

 

};

module.exports = {
  generateRefreshToken
};
 