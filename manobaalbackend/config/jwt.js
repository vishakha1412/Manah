 import jwt from 'jsonwebtoken'

const generateToken =(id)=>{
    let token=jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    return token    
}
export default generateToken