import axios from "axios"

const API = `${import.meta.env.VITE_API_URL}/api/biodata`

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