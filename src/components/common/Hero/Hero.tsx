import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LottieHandler } from "@components/feedback";

const Hero = () => {
    return (
        <div className="py-5 bg-light mb-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold mb-3">
                                Welcome to Our <span className="text-primary">E-Commerce</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Discover the latest trends in fashion and electronics. Shop now
                                and enjoy exclusive deals and fast shipping.
                            </p>
                            <Link to="/categories" className="btn btn-primary btn-lg">
                                Shop Now
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <LottieHandler type="empty" message="" />{" "}
                        {/* Using LottieHandler for visual, ideally should be a hero image or specific lottie */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
