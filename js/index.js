let quotes = [
    "There is no friend as loyal as a book. – Ernest Hemingway",
    "There is nothing to writing. All you do is sit down at a typewriter and bleed. – Ernest Hemingway",
    "Happiness in intelligent people is the rarest thing I know. – Ernest Hemingway",
    "I love sleep. My life has the tendency to fall apart when I’m awake, you know? - Ernest Hemingway",
    "The best way to find out if you can trust somebody is to trust them. – Ernest Hemingway",
    "I drink to make other people more interesting. – Ernest Hemingway",
    "When people talk, listen completely. Most people never listen. – Ernest Hemingway",
    "Courage is grace under pressure. - Ernest Hemingway",
    "It is good to have an end to journey toward; but it is the journey that matters, in the end. – Ernest Hemingway",
    "There’s no one thing that’s true. It’s all true. – Ernest Hemingway",
    "Every man’s life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another. – Ernest Hemingway",
    "Never to go on trips with anyone you do not love. – Ernest Hemingway",
    "The hard part about writing a novel is finishing it. – Ernest Hemingway",
    "In order to write about life first you must live it. – Ernest Hemingway",
];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerHTML = randomQuote;
