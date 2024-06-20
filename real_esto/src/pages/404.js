import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">The page you are looking for does not exist.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
