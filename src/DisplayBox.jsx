import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// card flip effect
import ReactCardFlip from 'react-card-flip';

class DisplayBox extends React.Component {

    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.props.setFlipped(!this.props.flipped)
      this.props.setGenerateButton(false)
    }

    render() {
      if (this.props.extension) {
        return (
          <ReactCardFlip isFlipped={this.props.flipped} flipSpeedBackToFront={this.props.isGenerateButton && !this.props.flipped ? '0' : '0.5'} flipSpeedFrontToBack='0.5'> 
            <Card className='shadow mx-auto' style={{ maxWidth:'32rem', height:'15rem' }}>
              <Card.Body className='text-dark d-flex justify-content-center align-items-center'>
                <p className='display-1 fw-bold'>.{this.props.extension[0]}</p>
                <Button variant='dark' onClick={this.handleClick} size="sm" className='position-absolute bottom-0 start-50 translate-middle'>Reveal</Button>
              </Card.Body>
            </Card>   
            <Card className='shadow mx-auto' style={{ maxWidth:'32rem', height:'15rem' }}>
              <Card.Body className='text-dark d-flex justify-content-center align-items-center'>
                <p className='display-6'>
                  <a target='_blank' href={this.props.extension[2]}>{this.props.extension[1]}</a>
                </p>
                <Button variant='dark' onClick={this.handleClick} size="sm" className='position-absolute bottom-0 start-50 translate-middle'>Hide</Button>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        )
      } else {
        return <></>
      }
    }
}

DisplayBox.propTypes = {
  flipped: PropTypes.bool.isRequired,
  setFlipped: PropTypes.func.isRequired,
  isGenerateButton: PropTypes.bool.isRequired,
  setGenerateButton: PropTypes.func.isRequired,
}

export default DisplayBox;