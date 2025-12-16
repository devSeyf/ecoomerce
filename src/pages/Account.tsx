import { useAppSelector } from "@store/hooks";
import { Heading } from "@components/common";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "motion/react";
import styles from "@styles/global.css"; // We'll rely on global vars or inline styles for now

const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <Container>
      <Heading title="Account Info" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              className="border-0 shadow-lg text-center p-5"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >
              <div
                className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                  color: "white",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {accountInfo?.firstName?.charAt(0).toUpperCase()}
                {accountInfo?.lastName?.charAt(0).toUpperCase()}
              </div>

              <h2 className="mb-1">
                {accountInfo?.firstName} {accountInfo?.lastName}
              </h2>
              <p className="text-muted mb-4">{accountInfo?.email}</p>

              <div className="d-flex justify-content-center gap-3">
                {/* Placeholder for future actions */}
                <span className="badge bg-light text-dark p-2 border">Member since 2025</span>
              </div>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Account;
