import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Profile/UserContext";
import { useEffect } from "react";



const Homepage = () => {
    const { users, status, userInfo } = useContext(UserContext);


    return (
    <>
        <Wrapper>
            <Title>All Facespace Members</Title>
            {!status && (
                <ProfilesHere>
                    {users.map((user)=> {
                        return (
                            <Profile key={user.id}>
                                <UserHere to={`/users/${user.id}`}>
                                    <UserAvatar src={user.avatarUrl} alt={user.name} />
                                </UserHere>
                            </Profile>
                        );
                    })}
                </ProfilesHere>
            )}
            {status && (
                <ProfilesHere>
                    {users.map((user)=> {
                        return (
                            <Profile key={user.id}>
                                <UserHere to={`/users/${user.id}`}>
                                    {userInfo.friends.includes(user.id) && (
                                        <ImageZone>
                                            <FriendOrNot>Friend</FriendOrNot>
                                            <UserAvatar src={user.avatarUrl} alt={user.name} />
                                        </ImageZone>
                                    )}
                                    {!userInfo.friends.includes(user.id) && (
                                        <ImageZone>
                                            <UserAvatar src={user.avatarUrl} alt={user.name} />
                                        </ImageZone>
                                    )}
                                </UserHere>
                            </Profile>
                        )
                    })}
                </ProfilesHere>
            )}
        </Wrapper>
    </>
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const Title = styled.h1`
    font-size: var(--heading-font-size);
    font-family: var(--heading-font-family);
    color: var(--primary-color);
    margin: 10px;
`

const ProfilesHere = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Profile = styled.div`
`

const UserHere = styled(NavLink)`
    text-decoration: none;
    margin: 10px;
`

const ImageZone = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const UserAvatar = styled.img`
    width: var(--user-img-width);
    height: var(--user-img-width);
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        border: 8px solid var(--primary-color);
    }
`

const FriendOrNot = styled.span`
    color: white;
    font-family: var(--heading-font-family);
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    line-height: 25px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 85px;
    display: block;
    background: #f5431a;
    box-shadow: 0 0 10px 3px #ff6e4e;
    position: absolute;
    top: 10px;
    right: -15px;
    border-radius: 5px;
`

export default Homepage