//FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  //wait for document to load
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header"); //the class we want
    if (!groupHeader) return;

    //console.log(groupHeader);
    const group = groupHeader.parentElement; //gets the parent element
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //toggle 'icon'
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //toggle visibility of body
    groupBody.classList.toggle("open"); //adds class of open

    //close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    //console.log(othergroups);

    otherGroups.forEach((otherGroup) => {
      //loops through the groups
      //toggle other groups except the group which we are in
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body"); //select body
        const otherIcon = otherGroup.querySelector(".faq-group-header i"); //select icon

        otherGroupBody.classList.remove("open"); //removes the open class from the other groups
        otherIcon.classList.remove("fa--minus");
        otherIcon.classList("fa-plus");
      }
    });
  });
});

//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
