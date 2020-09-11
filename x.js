function init() {
  const nodeset = document.querySelectorAll("body > .unmask");

  const observerConfig = {
    rootMargin: "0px 0px -250px 0px",
    threshold: 0,
  };

  const observer = new window.IntersectionObserver((elements, self) => {
    elements.forEach((element) => {
      if (element.isIntersecting) {
        // Add class and stop watching
        element.target.classList.add("unmasked");
        self.unobserve(element.target);
      }
    });
  }, observerConfig);

  nodeset.forEach((node) => {
    observer.observe(node);
  });
}
