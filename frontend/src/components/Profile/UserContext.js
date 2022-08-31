import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    //big user list
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

//fetch from server
const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    return data;
};

useEffect(() => {
    fetchUsers().then((item) => setUsers(item.data));
}, []);

//sign-in
const [userName, setUserName] = useState("");
const [status, setStatus] = useState(false);

return (
    <UserContext.Provider value ={{ 
        users, 
        userName, 
        setUserName, 
        status, 
        setStatus, 
        userInfo, 
        setUserInfo 
        }}>
            {children}
        </UserContext.Provider>
)
}
export default UserProvider