import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bleachImage from "../assets/onseason/bleach.jpg";
import irumaImage from "../assets/onseason/iruma.jpg";
import UzakiImage from "../assets/onseason/uzaki.jpg";
import PedalImage from "../assets/onseason/pedal.jpg";
import kenImage from "../assets/onseason/ken.jpg";
import bluelockImage from "../assets/onseason/bluelock.jpg";
const Season = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark text-center" >Onseason Anime</h1>
        <br />
        <Row>
          <Col md={4} className="animeWrapper" id='season'>
            <Card className=" text-white text-center animeImage">
              <Image
                src={bleachImage}
                alt="Bleach"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Bleach</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={irumaImage} alt="Mairimashita! Iruma-kun" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Mairimashita! Iruma-kun</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={UzakiImage} alt=">Uzaki-chan wa Asobitai!" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Uzaki-chan wa Asobitai!</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image
                src={PedalImage}
                alt="Yowamushi Pedal: Limit Break"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">
                  Yowamushi Pedal: Limit Break
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image
                src={kenImage}
                alt="Tensei shitara Ken Deshita"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1     ">
                  <Card.Title className="text-center">
                  Tensei shitara Ken Deshita
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={bluelockImage} alt="Blue Lock" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">
                  Blue Lock
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Season;
