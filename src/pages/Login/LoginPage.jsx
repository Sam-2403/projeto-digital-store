import React from "react";
import styled from "styled-components";
import LoginCard from "../../components/Login/LoginCard";

const Container = styled.div`
        width: 100%;
        height: 90vh;
        background: linear-gradient(to bottom, #B5B6F2 0%, #EFEFFF 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 100px;
    `

export default function LoginPage() {

    return (
        <Container>
            <LoginCard></LoginCard>
        </Container>
    )
}