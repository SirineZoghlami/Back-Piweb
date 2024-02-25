import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

export function validateRegisterUser(obj){
    const schema = Joi.object({
            username: Joi.string().trim().min(3).max(100).required(),
            password: passwordComplexity().required(), // 8Aa:
            role : Joi.string().valid('Administrator', 'Energy Manager', 'Operator').required()
            
           
    });
    return schema.validate(obj);
};

