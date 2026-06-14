import Header from "@/admin_components/header"
const Admin_Layout=({children})=>{
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Admin_Layout