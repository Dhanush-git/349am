class Carousel extends HTMLElement {
  constructor() {
    super();
    this.paginationMobile = this.dataset.paginationMobile == 'false' ? false : true;
    this.arrowsMobile = this.dataset.arrowsMobile == 'false' ? false : true;
    this.paginationDesktop = this.dataset.paginationDesktop == 'false' ? false : true;
    this.arrowsDesktop = this.dataset.arrowsDesktop == 'false' ? false : true;
    this.perpageMobile = this.dataset.perpageMobile || 1;
    this.perpageDesktop = this.dataset.perpageDesktop || 1;

    this.carousel = new Splide(this, {
      perPage: this.perpageMobile,
      perMove: 1,
      pagination: this.paginationMobile,
      arrows: this.arrowsMobile,
      omitEnd: true,
      mediaQuery: 'min',
      breakpoints: {
        475: {
          perPage: this.perpageDesktop,
          pagination: this.paginationDesktop,
          arrows: this.arrowsDesktop,
        },
      },
    });
    this.carousel.mount();
  }
}

customElements.define('splide-carousel', Carousel);
