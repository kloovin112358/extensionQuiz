import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// card flip effect
import ReactCardFlip from 'react-card-flip';

export default class DisplayBox extends React.Component {

    constructor() {
      super();
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    // TODO - figure out how to flip card to front before moving to next one
    // it is a problem when viewing backside then generating another - it shows the back of the next one

    render() {
      if (this.props.extension) {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipSpeedBackToFront='0.5' flipSpeedFrontToBack='0.5'> 
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

    // function DisplayBox(props) {

    //     const [isFlipped, setFlipped] = useState(false);
      
    //     if (props.extension) {
    //       return (
    //         <ReactCardFlip isFlipped={isFlipped}>
    //           <Card.Body className='text-dark'>
    //             <p className='display-1 fw-bold'>.{props.extension[0]}</p>
    //             <button onClick={setFlipped(!isFlipped)}>Click to flip</button>
    //           </Card.Body>
    //           <Card.Body className='text-dark'>
    //             {props.extension[1]}
    //             {props.extension[2]}
    //             <button onClick={setFlipped(!isFlipped)}>Click to flip</button>
    //           </Card.Body>
    //         </ReactCardFlip>
    //         // <Card className='shadow mx-auto' style={{ maxWidth:'30rem' }}>
              
    //         // </Card>
    //       )
    //     }
    //     return <></>
    //   }
}