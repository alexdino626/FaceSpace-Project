import styled from "styled-components"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Profile/UserContext";




const SignIn = () => {
    const {
        userName,
        status,
        setUserName,
        setStatus,
        setUserInfo,
    } = useContext(UserContext);

    let history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch ("/api/signIn", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body : JSON.stringify({ member : userName })
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.status==="error"){
                window.alert(data.msg)
            } else {
                setStatus(true)
                setUserName(userName);
                setUserInfo(data.data);
                sessionStorage.setItem("member", JSON.stringify(data.data));
                history.push("/");
            }
        })
    };

    return(
        <>
            {!status && (
                <Wrapper>
                    <SignInWrapper>
                        <SignInForm onSubmit={handleSubmit}>
                            <SignInTitle>Sign In Here</SignInTitle>
                            <SignInInput
                            type="text"
                            name="username"
                            placeholder="Your Firstname"
                            required
                            onChange={handleChange}
                            autoFocus
                            />
                            <SignInButton type="submit">Sign In</SignInButton>
                        </SignInForm>
                    </SignInWrapper>
                </Wrapper>
            )}
            {status && (
                <Wrapper>
                    <SignInWrapper>
                        {`Hi, ${userName}. Looks like you've already signed in. Click the facespace key to continue.`}
                    </SignInWrapper>
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
`

const SignInWrapper = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 5;
`

const SignInForm = styled.form`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const SignInTitle = styled.h1`
    padding: 20px;
    color: white;
    background-color: var(--primary-color);
    margin-bottom: 10px;
    border-radius: 5px;
`

const SignInInput = styled.input`
    margin: 0 20px;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba (0,0,0,0.5);
`

const SignInButton = styled.button`
    width: 210px;
    margin-top: 10px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-family: var(--heading-font-family);
    font-size: 18px;
    border-radius: 5px;
`

export default  SignIn