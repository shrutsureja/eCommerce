import { Request, RequestHandler, Response } from 'express';

const homePage: RequestHandler = (req, res) => {
	res.send('Hello, World! ~ Shrut Sureja');
};

const sendPage: RequestHandler = (req: Request, res: Response) => {
	res.send(`Hello, shrut!`);
};

export { homePage, sendPage };
