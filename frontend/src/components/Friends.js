import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {UserContext} from "../components/Profile/UserContext"



const Friends = ({ friendIDs }) => {
    const {users} = useContext(UserContext);

    return (
        <>
            <Wrapper>
                {
                    friendIDs.map((friendId)=> {
                        return (
                            users.map((userID)=> {
                                if (userID.id === friendId) {
                                    return (
                                        <Friend key={userID.id} to={`/users/${friendId}`}>
                                            <FriendAvatar src={userID.avatarUrl} alt={userID.name}/>
                                            <FriendName>{userID.name}</FriendName>
                                        </Friend>
                                    )
                                }
                            })
                        )
                    })
                }
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Friend = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    text-decoration: none;
`

const FriendAvatar = styled.img`
    width: var(--user-img-width);
    height: var(--user-img-width);
    border-radius: 50%;
    margin: 5px;
    &:hover {
        cursor: pointer;
        border: 8px solid var(--primary-color);
    }
`
const FriendName = styled.h3`
`

export default Friends