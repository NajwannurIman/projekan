import { Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = ()=> {
    return (
    <div className="atas`">
    <Navbar variant='light '>
        <Container>
            <Navbar.Brand href="/">Nonton Anime</Navbar.Brand>
            <Nav>
                <Nav.Link href="#populer">Popular</Nav.Link>
                <Nav.Link href="#season">On Season</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
    )
}
export default Navigationbar