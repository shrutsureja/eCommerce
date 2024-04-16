import { Request, RequestHandler, Response } from 'express';

const homePage: RequestHandler = (req, res) => {
	res.send('Hello, World! ~ Shrut Sureja');
};

export { homePage };
