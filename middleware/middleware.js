const joi = require('joi')

exports.validate_user = (req,res,next) => {
    let schema = joi.object().keys({
        nilai1 : joi.string().required().min(1),
        nilai2 : joi.string().required().min(1),
        operator : joi.string().required().min(1)
    })

    joi.validate(req.body,schema)
    .then(validated => {
        next()
    })
    .catch(err => {
        res.render("kalkulator",{ message : err.details})
    })
}