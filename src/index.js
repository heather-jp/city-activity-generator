function displayActivities(response) {
  new Typewriter("#activity-ideas", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateActivityIdeas(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a304144904abba9o32da5fa19eftfe9a";
  let context =
    "You are well travelled and have extensive knowledge of the kind of activities that people who are away on short breaks can take part in whilst on holiday. When asked, you provide suggestions on what they can do in the city if (1) they are only in the city for one day; (2) if they are in the city for a weekend break; and (3) if they are in the city for up to a week. You keep each suggestion you make friendly but concise. Separate each answer to (1), (2) and (3) with <br /><br />. You state the length of stay at the start of each line. Make sure to use user instructions. On the final line below the suggestions, sign the result with 'Generated by SheCodes AI' inside <small> and <em> elements. Include a <br /> before the sign. Do NOT put this sign at the top.";
  let prompt = `User instructions: Generate activities that the user can do in ${instructionsInput.value} without travelling outside of that city.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let activityIdeasElement = document.querySelector("#activity-ideas");
  activityIdeasElement.classList.remove("hidden");
  activityIdeasElement.innerHTML = `<span class="blink">⌛</span> Generating activity ideas for you during your stay in ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayActivities);
}

let activityFormElement = document.querySelector(
  "#activity-idea-generator-form"
);
activityFormElement.addEventListener("submit", generateActivityIdeas);
