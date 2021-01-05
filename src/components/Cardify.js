import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Cardify extends Component {
  render() {
    const { author, cardBody, btnHandler, btnText } = this.props
    return (
      <Card>
        <Card.Header as="h5">{author.name} asks ...</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col className='align-self-center'>
                <Image src={author.avatarURL} roundedCircle fluid  />
              </Col>
              <Col lg={9} md={9} sm={9} xs={9} >
                {cardBody}
              </Col>
            </Row>
          </Container>

          {btnHandler && btnText && (
            <Button
              variant='info'
              className='mt-3'
              block
              onClick={btnHandler}>{btnText}</Button>
          )}
        </Card.Body>
      </Card>
    )
  }
}

export default Cardify
