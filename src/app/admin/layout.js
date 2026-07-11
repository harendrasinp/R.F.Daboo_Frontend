import AdminHeader from "@/admin_components/AdminHeader"

const Admin_Layout=({children})=>{
    return(
        <div>
            <AdminHeader/>
            <div>
                <h1></h1>
            </div>
            {children}
        </div>
    )
}

export default Admin_Layout