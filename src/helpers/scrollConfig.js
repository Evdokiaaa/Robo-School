const scrollToSection = (sectionID, duration) => {
  const section = document.querySelector(sectionID);
  if (section) section.scrollIntoView({ behavior: "smooth", duration });
};
const scrollUp = () => {};
export { scrollToSection };
