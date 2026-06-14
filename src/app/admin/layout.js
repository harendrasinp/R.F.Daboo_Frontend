import AdminHeader from "@/admin_components/AdminHeader"
const Admin_Layout=({children})=>{
    return(
        <div>
            <AdminHeader/>
            {children}
        </div>
    )
}

export default Admin_Layout