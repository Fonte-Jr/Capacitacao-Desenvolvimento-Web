import { Request, Response } from "express";
import { JwtHelper } from "../utils/JwtHelper";

export class Authorize{

    static authorize(req: Request, res: Response, next: any){
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.sendStatus(401);

        let token = authHeader.split(' ')[1];

        const decoded = JwtHelper.verify(token);
        if(typeof(decoded) === 'string') return res.sendStatus(401);

        next();
    }

    static authorizeAdmin(req: Request, res: Response, next: any){
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.sendStatus(401);

        let token = authHeader.split(' ')[1];

        const decoded = JwtHelper.verify(token);
        
        if(typeof(decoded) === 'string') return res.sendStatus(401);
        if(decoded.role !== 1) return res.sendStatus(403);

        next();
    }

}