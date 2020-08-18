// code away!
const express = require("express");

const logger = require("./middleware/logger");

const usersRouter = require("./users/userRouter");
const postsRouter = require("./posts/postRouter");


const server = express();
const port = 4000;

server.use(express.json());

server.use(usersRouter);
server.use(postsRouter);

server.use(logger);

// Fall back
/*server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})*/


server.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`);

})
 