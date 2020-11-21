exports.checkToken = function (req, res)
 {
    //get authcookie from request
    const authcookie = req.cookies.authcookie
    
    //verify token which is in cookie value
    jwt.verify(authcookie,"secret_key",(err,data)=>{
     if(err){
       res.sendStatus(403)
     } 
     else if(data.user)
        {
      req.user = data.user
       next()
        }
    })
}
