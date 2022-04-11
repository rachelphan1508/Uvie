import jwt from 'jsonwebtoken';

//wants to upvote a post
// click the upvote button => auth middleware(next) => upvote controller

const auth = async(req, res, next) => {
    try {
        console.log(req.headers);
        //check if the user is really who he is
        const token = req.headers.authorization.split(" ")[1];
        const isCusAuth = token.length < 500;
        let decodedData;
        if (token && isCusAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;
