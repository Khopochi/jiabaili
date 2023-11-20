import axios from "axios";



// const inputBody = {
//     "reference": "Testing transaction",
//     "subscriber": {
//       "country": "UG",
//       "currency": "UGX",
//       "msisdn": 999989584
//     },
//     "transaction": {
//       "amount": 1000,
//       "country": "UG",
//       "currency": "UGX",
//       "id": "random-unique-id"
//     }
// };
// const headers = {
// 'Content-Type':'application/json',
// 'Accept':'*/*',
// 'X-Country':'MW',
// 'X-Currency':'MWK',
// 'Authorization': 'Bearer  UCLcp1oeq44KPXr8X*******xCzki2w'
// };

const api_key = 'NTcyMzM1YTAtOGIzMC00YWVjLTlhYzktNjllMWYwMzc5NDMwOjRmNTNkZDc0LWI0MmItNGM2OC1hNjUwLTU0OWUyN2Y2MDA3YQ=='
const headers = {
  'content-type':'application/vnd.ni-identity.v1+json',
  'authorization': 'Basic '+api_key
  };


//posting payment & creating order
export const TransactionSTD = async (req,res) => {
    try{
        //posting payment
        const response = await axios.post('https://api-gateway.sandbox.standardbank.co.mw/identity/auth/access-token',{}, {headers})
        const token = response.data.access_token
        //creating order
          const orderHeader = {
            'authorization':'Bearer '+token,
            'content-type':'application/vnd.ni-payment.v2+json',
            'accept': 'application/vnd.ni-payment.v2+json'
          };
          console.log(req.body)
          const orderResponse = await axios.post('https://api-gateway.sandbox.standardbank.co.mw/transactions/outlets/c8937989-a7b5-4676-a50e-a5a824e77c7d/orders', req.body,{ headers: orderHeader })
          res.status(200).json(orderResponse.data)
    }catch(err){
        // console.log(err)
        res.status(500).json({error: "Failed", err})
    }
}

//create order
export const createOrder = async (req, res) => {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvSWVHZXd3aW9kcldYZjhMTDRGdzkxcGRsZU5sM3hyajI0TVM2cUNzWWlvIn0.eyJleHAiOjE3MDAwMzY1OTYsImlhdCI6MTcwMDAzNjI5NiwianRpIjoiNGQ1MzBiMDgtYTIzYS00ZjlmLTgzZTgtYzczNGE5MzEzMTU3IiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5zYW5kYm94LnN0YW5kYXJkYmFuay5jby5tdy9hdXRoL3JlYWxtcy9TdGFuZGFyZEJhbmtNYWxhd2lTYW5kYm94Iiwic3ViIjoiNGNkYzI5ODktNDE2NC00YTNjLWI2YjAtYWU0YmNmZmVjODcxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiNTcyMzM1YTAtOGIzMC00YWVjLTlhYzktNjllMWYwMzc5NDMwIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJNUiIsIlZEUiIsIk1WIiwiRkxQIiwiQ08iLCJNRVJDSEFOVF9TWVNURU1TIiwiUkEiLCIwMDAiLCJDT1NTIiwiQ1YiLCJNQyIsIlZPIiwiVlAiLCJNSSIsIlZUIiwiQ0EiLCJDU0FSIl19LCJzY29wZSI6IiIsImNsaWVudEhvc3QiOiIxMC4yNDQuNTMuMTA3IiwiY2xpZW50SWQiOiI1NzIzMzVhMC04YjMwLTRhZWMtOWFjOS02OWUxZjAzNzk0MzAiLCJyZWFsbSI6IlN0YW5kYXJkQmFua01hbGF3aVNhbmRib3giLCJnaXZlbl9uYW1lIjoiSklBIEJBSSBMSSBTVVBFUk1BUktFVCIsImNsaWVudEFkZHJlc3MiOiIxMC4yNDQuNTMuMTA3IiwiaGllcmFyY2h5UmVmcyI6WyJhNWMyNWIwMC1kMzkyLTRlNzctYTlhOS02Mjg3Y2NlZTZkNTgiXX0.6q0R-ZxpG99VOgKUWiMfdhf82U3SUE_SgHZLZIcUEyMton2BvlWlr5TWyUN3zrGSHFRtEr-xq-WnoSB63bWDFY1fxrAcoiO4rqUw5VEPyPwS9wA_hkNqva1X6hDFhUVishFmgzTWqISK3nQAFTnoPUOfi-f0UieGlMVfL73oD2djLl01Sgd48l3d6GnIKLg2JPvf9GXeis51qsvZvrILxiZmc7T_LN0AILahDLAex33a05k6oMEOfrElObMISXS4f2_KvNNjyjK48p3OYkh9Ty7BQEzHSFSUJVR5hBI2iob7PBgWLEimu8s8mvUwk2qfjDjX_nc68M9YflAbhwT-vA"
  const orderHeader = {
    'authorization':'Bearer '+token,
    'content-type':'application/vnd.ni-payment.v2+json',
    'accept': 'application/vnd.ni-payment.v2+json'
    };
    console.log(req.body)
  try{
        const response = await axios.post('https://api-gateway.sandbox.standardbank.co.mw/transactions/outlets/c8937989-a7b5-4676-a50e-a5a824e77c7d/orders', req.body,{ headers: orderHeader })
        // console.log(response)
        res.status(200).json(response.data)
  }catch(err){
    res.status(500).json({error: "Failed", err})
  }
}




