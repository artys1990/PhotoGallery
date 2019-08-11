import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl} from 'reactstrap';
class MyCarousel extends Component {

  constructor(props) {
    super(props);
    this.items = this.props.images;
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.items.map((item, index) => {
      return (
        <CarouselItem 
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
          
        >
          <img className="imag" src={item} alt={`${index} display slider`} />
        </CarouselItem>
      );
    });

    return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval={false}
                className="test2"
            >   
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>

    );
  }
}


export default MyCarousel;