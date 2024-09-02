import jwt from "jsonwebtoken";
const crearJWT = (id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}


export default  crearJWT