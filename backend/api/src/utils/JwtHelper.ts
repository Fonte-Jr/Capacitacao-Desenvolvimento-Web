import { sign, verify } from "jsonwebtoken";


interface IJwtData{
    uid: number,
    role: number
}

export class JwtHelper{

    static sing(data: IJwtData){
        try{
            return sign(data, "Secret" as string, { expiresIn: '1h'});
        }    
        catch(error){
            console.log(error);
        }
    }

    static verify(token: string): IJwtData | string{
        try{
            const decoded = verify(token, "Secret" as string);
            if(typeof(decoded) === 'string') return 'INVALID_TOKEN';

            return decoded as IJwtData;
        }
        catch(error){   
            return `Erro on parsing token ${error}`;
        }
    }
}