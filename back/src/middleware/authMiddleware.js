import jwt from "jsonwebtoken"

//esquema de validação de token de usuário

export default (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'No token provided'});

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Token error'});

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Malformatted Token'});

    jwt.verify(token, process.env.API_SECRET, (err, decoded) => {
        iff (err) 
            return res.status(401).send({ error: 'Invalid Token'})
        
       req.userId = decoded.id; 
       return next();
    })



}