import styled from 'styled-components';

const App = () => {
    return (
        <Container>
            <Navbar>
                <Logo>Cloud File Manager</Logo>
                <NavLinks>
                    <NavItem>Platform</NavItem>
                    <NavItem>Solutions</NavItem>
                    <NavItem>Enterprise</NavItem>
                    <NavItem>Pricing</NavItem>
                </NavLinks>
                <NavButtons>
                    <NavButton>Contact Sales</NavButton>
                    <NavButton>Sign Up</NavButton>
                    <NavButton primary>Login</NavButton>
                </NavButtons>
            </Navbar>
            
            <HeroSection>
                <ContentArea>
                    <Label>ALL IN ONE CLOUD</Label>
                    <Title>Secure <Em>Cloud</Em> Storage<br />for All Your Files</Title>
                    <Description>
                        Documents, photos, videos and more—keep all<br />
                        your files and folders safe in online cloud storage
                    </Description>
                    <ButtonGroup>
                        <Button primary>Get Started</Button>
                    </ButtonGroup>
                </ContentArea>
                <IllustrationArea>
                    <img src='https://via.placeholder.com/400' alt='Illustration' style={{ width: '100%' }} />
                </IllustrationArea>
            </HeroSection>

            <ClientLogos>
                <h1>Logos</h1>
                <h1>Logos</h1>
                <h1>Logos</h1>
            </ClientLogos>
        </Container>
    );
}

const Container = styled.div`
    background: #020B2C;
    min-height: 100vh;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

const NavItem = styled.a`
    color: #fff;
    cursor: pointer;
    opacity: 0.8;
    &:hover { opacity: 1; }
`;

const NavButtons = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavButton = styled.button<{primary?: boolean}>`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: ${props => props.primary ? '#0066FF' : 'transparent'};
    color: white;
    &:hover { opacity: 0.9; }
`;

const HeroSection = styled.div`
    display: flex;
    padding: 4rem;
    align-items: center;
`;

const ContentArea = styled.div`
    flex: 1;
`;

const Label = styled.div`
    color: #0066FF;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    font-size: 3.5rem;
    margin: 0;
    line-height: 1.2;
`;

const Em = styled.span`
    font-style: italic;
`;

const Description = styled.p`
    color: #AAB8D3;
    font-size: 1.2rem;
    line-height: 1.6;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
`;

const Button = styled.button<{primary?: boolean}>`
    padding: 1rem 2rem;
    border-radius: 8px;
    border: ${props => props.primary ? 'none' : '1px solid #AAB8D3'};
    background: ${props => props.primary ? '#0066FF' : 'transparent'};
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover { opacity: 0.9; }
`;

const IllustrationArea = styled.div`
    flex: 1;
`;

const ClientLogos = styled.div`
    display: flex;
    gap: 2rem;
    padding: 2rem 4rem;
    opacity: 0.5;
`;

export default App;