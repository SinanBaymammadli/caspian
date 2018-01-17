import scrollToElement from "scroll-to-element";

const slideToSection = (e, id) => {
  //e.preventDefault();
  const section = document.querySelector(id);
  scrollToElement(section, {
    offset: -60,
    duration: 300
  });
};

export default slideToSection;
