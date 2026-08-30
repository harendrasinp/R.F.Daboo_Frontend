import CredentialsApi from "./credentialsApi";

export const principalAPI=async (principalformData)=>{
    const response = await CredentialsApi.put("admin/principalThought",principalformData);
    return response.data

}
export const getPrincipalThought=async ()=>{
    const response = await CredentialsApi.get("admin/getprincipalThought");
    return response.data
}
