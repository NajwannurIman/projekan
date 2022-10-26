import { Card, Container, Row, Col, Image } from "react-bootstrap";
import chainsawImage from "../assets/popular/chainsaw.jpg";
import bnhImage from "../assets/popular/bnh.jpg";
import elitImage from "../assets/popular/elit.jpg";
import mobImage from "../assets/popular/mob.jpg";
import opredImage from "../assets/popular/opred.jpg";
import spyImage from "../assets/popular/spy.jpg";
const Populer = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark text-center">POPULAR ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="animeWrapper" id="populer">
            <Card className=" text-white text-center animeImage">
              <Image
                src={chainsawImage}
                alt="chain saw man"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Chainsaw Man</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={spyImage} alt="Spy X Family" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Spy X Family</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={bnhImage} alt=">Boku No Hero" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Boku No Hero</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image
                src={elitImage}
                alt="Class Room of Elit"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">
                    Class Room of elit
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image
                src={opredImage}
                alt="One Pieace Movie Red"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1     ">
                  <Card.Title className="text-center">
                    One Pieace Movie Red
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="animeWrapper">
            <Card className=" text-white text-center animeImage">
              <Image src={mobImage} alt="Mob Psycho 100" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">
                    Mob Psycho 100
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
export default Populer;
