import axios from "axios"

const API = "http://localhost:5000/api/biodata"

export const saveBiodata = async(data)=>{

const token = localStorage.getItem("token")

const res = await axios.post(
API,
data,
{
headers:{ Authorization: token }
}
)

return res.data

}