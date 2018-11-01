export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();    
    this.wrapper.addEventListener('moudemove', this.onMove);
  }

  onMove(event) {
    console
  }

  onEnd(event) {
    this.wrapper.removeEventListener('moudemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('moudedown', this.onStart);
    this.wrapper.addEventListener('moudeup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}