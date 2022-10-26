import { Button, Col, Container, Row } from 'react-bootstrap';
const Intro = () =>{
    return(
<div className='intro' >
        <Container className='text-dark text-center d-flex justify-content-center align-item-center '>
            <Row>
                <Col> 
                <div className='title'>Nonton Anime</div>
                <div className='title'> Yang pasti Legal</div>
                <div className='IntroButton mt-4 text-center'>
                    <Button variant='dark'> Lihat Semua List</Button>
                </div>
                </Col>
            </Row>
        </Container>
</div>
    )
}
export default Intro