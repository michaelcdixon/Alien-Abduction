const quotes = [
	`"Earth creature, I am addressing you! Respond or be vaporized!"`,
	`"I think this calls for the Jumbo Probe."`,
	`"What's shakin', Pox? You look a little... what's the word... constipated."`,
	`"When do I get to blow things up?!"`,
	`"That… could have gone better."`,
	`"Ripley, what are you doing?"`,
	`"It's just a flesh wound."`,
	`"One alien is a curiosity, Two are an invasion."`,
	`"Alien: Peeeeeeeace? No peeeeeeeace."`,
	`"We all know interspecies romance is weird."`,
	`"I can't help thinking somewhere in the universe there has to be something better than man. Has to be."`,
	`"Ever have that feeling where you're not sure if you're awake or dreaming?"`,
	`"The universe is big. It’s vast, complicated and ridiculous. And sometimes, impossible things just happen and we call them miracles."`,
	`"I can wait for the galaxy outside to get a little kinder."`,
	`"Can't we all just get along?"`,
	`"Martian Translation Device: Don't run! We are your friends!"`,
	`"Why can't we work out our differences?"`,
	`"We know they’re extremely advanced technologically, which suggests that they’re peaceful."`,
	`"Martian Translation Device: We come in peace! We come in peace!"`,
	`"An advanced civilization, by definition, is not barbaric."`,
];

function newQuote() {
	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	let ourQuote = document.querySelector(".our-quote");
	ourQuote.innerText = randomQuote;
	document.querySelector(".quote");
}
setInterval(newQuote, 5500);
