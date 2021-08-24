const quotes = [
  `"Earth creature, I am addressing you! Respond or be vaporized!"`,
  `"I think this calls for the Jumbo Probe"`,
  `"What's shakin', Pox? You look a little... what's the word... constipated."`,
  `"When do I get to blow things up?!"`,
  `"That… could have gone better."`,
  `"Ripley, what are you doing?"`,
  `"It's just a flesh wound"`,
];


function newQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let ourQuote = document.querySelector(".our-quote");
  ourQuote.innerText = randomQuote;
  document.querySelector(".quote");

};
setInterval(newQuote,5500);




