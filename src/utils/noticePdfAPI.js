import CredentialsApi from "./credentialsApi";

export const UploadNoticeAPI=async (NoticeData)=>{
    const response = await CredentialsApi.post("admin/uploadPdf",NoticeData);
    return response.data

}
export const getAllNoticeAPI=async ()=>{
    const response = await CredentialsApi.get("admin/AllPdf");
    return response.data
}
