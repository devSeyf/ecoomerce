import { Heading } from "@components/common";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <Container className="mb-5">
      <Heading title="About Us" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image
              src="/about_hero.jpg"
              alt="About Us"
              fluid
              rounded
              className="shadow-lg" // Global CSS should handle shadow-lg if Bootstrap doesn't have it, but Bootstrap does.
              style={{ borderRadius: "1rem" }}
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h2 className="mb-3" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our Story
            </h2>
            <p className="lead" style={{ color: "var(--text-muted)" }}>
              Welcome to LuxeStore, where style meets substance. We are trying to redefine the online shopping experience.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Founded in 2025, our mission is to provide high-quality fashion and lifestyle products that inspire confidence.
              We believe that everyone deserves to look and feel their best without breaking the bank.
              Our team works tirelessly to curate a collection that blends contemporary trends with timeless elegance.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Thank you for choosing us for your style journey. We are excited to have you with us.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default AboutUs;
