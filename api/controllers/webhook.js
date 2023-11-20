
//FOR STANDARD BANK
export const getWebHook = async (req,res) => {
    console.log(req.body)
    res.status(200).json(req.body)
}


//FOR AIRTEL
export const getWebHookAirtel = async (req,res) => {
    console.log(req.body)
    res.status(200).json(req.body)
}


