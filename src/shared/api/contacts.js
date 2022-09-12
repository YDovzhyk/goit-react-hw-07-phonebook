import axios from "axios";

const instance = axios.create({
    baseURL: "https://6319cf3a8e51a64d2becf458.mockapi.io/contacts",
    params: {
        _limit: 12,
    }
});

export const getContacts = async() => {
    const {data} = await instance.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const removeContact = async(id) => {
    const {data} = await instance.delete(`/${id}`);
    return data;
}