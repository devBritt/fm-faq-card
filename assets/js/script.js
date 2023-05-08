// toggle a faq line item open/closed
// apply attribute for custom css when item is open

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(faqEl => {
  // get faq__question element from current faq__item
  const questionEl = faqEl.querySelector('.faq__question');
  
  // apply toggle listener to question
  questionEl.addEventListener('toggle', () => {
    // toggle faqEl open attribute
    faqEl.open ? faqEl.open = false : faqEl.open = true;
  });
})