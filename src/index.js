function generateActivityIdeas(event) {
  event.preventDefault();

  new Typewriter("#activity-ideas", {
    strings:
      "If you are spending only 1 Day: Marvel at the Eiffel Tower and soak up the panoramic city views. Take a stroll along the Seine River and admire the iconic landmarks lining its banks. Visit the Louvre Museum and see masterpieces like the Mona Lisa.",
    autoStart: true,
    delay: 1,
  });
}

let activityFormelement = document.querySelector(
  "#activity-idea-generator-form"
);
activityFormelement.addEventListener("submit", generateActivityIdeas);
