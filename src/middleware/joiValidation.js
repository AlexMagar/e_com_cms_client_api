import Joi from 'joi'

const SHORTSTR = Joi.string().min(3).max(100)
const LONGSTR = Joi.string().min(5).max(2000)
const SHORTSTRREQ = Joi.string().min(3).max(100).required()
const LONGSTRREQ = Joi.string().min(3).max(2000).required()

// ================ admin ===========
export const newAdminValidation = (req, res, next) => {
    try {
        //define the schema
        const schema = Joi.object({
            fName: SHORTSTRREQ,
            lName: SHORTSTRREQ,
            email: SHORTSTR.email({minDomainSegments: 2}).required(),
            phone: SHORTSTRREQ,
            address:SHORTSTR.allow(""),
            password:SHORTSTRREQ.min(6)
        })

        const {error} = schema.validate(req.body)

        //check data against the rule
        error ? res.json({
            status: 'error',
            message: error.message
        })
        : next()
        
    } catch (error) {
        next(error)
    }
}


export const loginValidation = (req, res, next) =>{
    try {
        //define the schema
        const schema = Joi.object({
            email: SHORTSTR.email({minDomainSegments: 2}).required(),
            password: SHORTSTRREQ.min(6)
        })

        const { error} = schema.validate(req.body)

        //check data against the rule
        error 
        ? res.json({
            status: 'error',
            message:error.message
            })
        : next()

    } catch (error) {
        next(error)
    }
}

export const newAdminVerificationValidation = (req, res, next) =>{
    try {
        //define the schema
        const schema = Joi.object({
            email: SHORTSTRREQ.email({minDomainSegments: 2}),
            code: SHORTSTRREQ,
        })

        const { error} = schema.validate(req.body)

        //check data against the rule
        error ? res.json({
            status: 'error',
            message:error.message
        })
        : next()

    } catch (error) {
        next(error)
    }
}