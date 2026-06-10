import axios from 'axios'


const LoginApi=async (data)=>{
    const data= await axios("http://localhost:4545/admin/Login",data)
}
export default LoginApi