import { useState } from "react";
import styled from "styled-components";


const SignInButton = () => {

    const [status, setStatus] = useState("idle");
    const [errMessage, setErrMessage] = useState("");
    const [formData, setFormData] = useState("");


    const handleClick = (ev) => {
        ev.preventDefault();
        setStatus("pending");
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
            const { status, error } = json;
            if (status === "success") {
                setStatus("confirmed");
            } else if (error) {
                setStatus("error");
                setErrMessage("Something went wrong");
            }
            });
        };
    return(
        <Button onClick={handleClick}>
            {status === "pending" && (
            <div>
                <div></div>
                <div></div>
            </div>
            )}
            {status === "idle" && <span>Submit</span>}
            {status === "error" && <span>{errMessage}</span>}
        </Button>
            )
    };

const Button = styled.button`
background: var(--primary-color);
border-color: transparent;
border-radius: 5px;
color: white;
font-family: var(--heading-font-family);
cursor: pointer;
font-size: 16px;
font-weight: 600;
`

export default SignInButton;