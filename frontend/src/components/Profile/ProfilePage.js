import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Friends } from "./Friends";

const Profile = () => {
    const { id } = useParams();

    const [user, setUser] = useState([]);
    const [friendsID, setFriendsID] = useState([]);

    const fetchUser = async () => {
        const response = await fetch(`/api/users/${id}`);
        const userInfo = await response.json();
        return userInfo;
    };

    useEffect(() => {
        fetchUser().then((item)=> {
            setUser(item.data);
            setFriendsID(item.data.friends);
        });
    }, [id]);


    return (
        <>
            <Wrapper>
                <Banner>
                    <iframe
                        allow="fullscreen"
                        frameBorder="0"
                        height="600"
                        src="https://giphy.com/embed/6kJzm031RcUOaL18g8/video"
                        width="100%"
                        title="GIF"
                    />
                </Banner>
                <UserProfileWrapper>
                    <UserInfo>
                        <UserProfileImage src={user.avatarUrl} alt="user profile" />
                        <UserName>{user.name}</UserName>
                    </UserInfo>
                    <UserFriendsTitle>{user.name}'s friends</UserFriendsTitle>
                    <UserFriendsList>
                        <Friends key={id} friendIDs={friendsID} />
                    </UserFriendsList>
                </UserProfileWrapper>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
`

const Banner = styled.div`
    height: 0;
    position: relative;
    width: 100%;
    z-index: -1;
    margin-bottom: 350px;
`

const UserProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
`

const UserProfileImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 50%;
    margin: 100px 0 50px 20px;
`

const UserFriendsTitle = styled.h1`
    border-bottom: 1px solid var(--primary-color);
    width: 60vw;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
`

const UserFriendsList = styled.div`
    margin: 20px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

const UserName = styled.h1`
    font-size: 40px;
    margin: 0 20px;
    text-align: center;
`

export default Profile