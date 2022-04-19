import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo One" />
                    <SignUp>SIGN UP HERE 😎</SignUp>
                    <Description>
                        <h2>Welcome to the Final Semeter Project</h2>
                        <h3>Made By</h3>
                        <h4>Saksham Gupta(Team Leader)  -2001640140046</h4>
                        <h4>Abhijeet Singh(Team Member) -2001640140003</h4>
                        <h4>Ashutosh Gupta(Team Member)  -2001640140014</h4>
                        <h4>Garima Trivedi(Team Member) -2001640140018</h4>
                        <h4>Vinay Kumar(Team Member)    -2001640140063</h4>
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo Two"></CTALogoTwo>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 100vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    background-image: url("/images/login-background.jpg");

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width:650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%; 
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: white;
    background-color: #00CED1;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    
    &:hover{
        background-color: #00FFFF;
        color: white;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.5%, 1);
    font-size: 18px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;