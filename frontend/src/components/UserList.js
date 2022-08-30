import {Link} from "react-router-dom";
import styled from "styled-components";

const UserList = ({user}) => {
    let status = false;
    const signInUser = JSON.parse(sessionStorage.getItem("SignInUser"));
    const friends = signInUser?.friends;
    if (signInUser) status = true;

    return (
        <>
            {status === false ? (
                <Link to={`/${user.id}`}>
                    <Avatar src={user.avatarUrl} alt="avatar image" />
                </Link>
                ) : (
                    <Div>
                        <Link to={`/${user.id}`}>
                    <Avatar src={user.avatarUrl} alt="avatar image" />
                        </Link>
                        {friends.includes(user.id) && <Span>Friend</Span>}
                    </Div>
                )
            }
                </>
    )
}

const Div = styled.div`
`

const Avatar = styled.img`
`



export default UserList