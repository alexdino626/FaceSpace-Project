import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../components/Profile/UserContext"





const Navbar = () => {
    const { status, userName } = useContext(UserContext);

    return (
        <>
            {!status && (
                <NavbarContainer>
                    <Logo to="/">
                        <LogoText>Facespace</LogoText>
                    </Logo>
                    <Signin to="/signin">Sign-In</Signin>
                </NavbarContainer>
            )}
            {status && (
                <NavbarContainer>
                    <Logo to="/">
                        <LogoText>Facespace</LogoText>
                    </Logo>
                    <Welcome>{`Hi, ${userName}`}</Welcome>
                </NavbarContainer>
            )}
        </>
    );
};

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--page-horizontal-padding);
    height: var(--header-height);
    font-family: var(--heading-font-family);
    background-color: var(--primary-color);
`

const Logo = styled(NavLink)`
    text-decoration: none;
`

const LogoText = styled.h1`
    color: white;
`

const SignIn =styled(NavLink)`
    text-decoration: none;
    color: white;
`

const Welcome = styled.h1`
    color: white;
`

export default Navbar