




// const asyncHandler = () => {}
// const asyncHandler = (fun) => () => {}
//  const asyncHandler = (fun) => async() => {}


const asyncHandler = (fun) => async(req, res, next) => {
    try {
        await fun(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

// const asyncHandler = (requesthandler) => {
//     (req,res,next) => {
//         Promise.resolve(() => requesthandler(req,res, next))
//         .catch((err) => next(err))
//     }
// }

export {asyncHandler}
