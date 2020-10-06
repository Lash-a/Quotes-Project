let quotes = [
    {
        author : "Albert Einstein",
        quote : "Common sense is the collection of prejudices acquired by age eighteen."
    },

    {
        author : "Thomas Hardy",
        quote : "A man's silence is wonderful to listen to."
    },

    {
        author : "Jay Leno",
        quote : "There's this big pie in show business, and you physically can't eat the whole pie. If you give everybody a slice of pie, you will still have more than enough. The real trick is not to try to get the whole pie, but to keep the biggest slice."
    },

    {
        author : "John Quincy Adams",
        quote : "All men profess honesty as long as they can. To believe all men honest would be folly. To believe none so is something worse."
    },

    {
        author : "Francois de La Rochefoucauld",
        quote : "To establish oneself in the world, one has to do all one can to appear established."
    },

    {
        author : "Richard Feynman",
        quote : "The first principle is that you must not fool yourself - and you are the easiest person to fool."
    },

    {
        author : "Mark Twain",
        quote : "The human race has one really effective weapon, and that is laughter."
    },

    {
        author : "Elizabeth Bowen",
        quote : "If you look at life one way, there is always cause for alarm."
    },

    {
        author : "H. L. Mencken",
        quote : "The chief value of money lies in the fact that one lives in a world in which it is overestimated."
    },

    {
        author : "Matthew Arnold",
        quote : "Resolve to be thyself: and know, that he who finds himself, loses his misery."
    },

    {
        author : "Ralph Waldo Emerson",
        quote : "In the highest civilization, the book is still the highest delight. He who has once known its satisfactions is provided with a resource against calamity."
    },

    {
        author : "Michael Hainey",
        quote : "How his death hung over that house. It’s part of what I know to be true—your absence is greater than your presence."
    },

    {
        author : "Oscar Wilde",
        quote : "The true mystery of the world is the visible, not the invisible."
    },
    
    {
        author : "James A. Garfield",
        quote : "Next in importance to freedom and justice is popular education, without which neither freedom nor justice can be permanently maintained."
    },

    {
        author : "Aesop",
        quote : "We hang the petty thieves and appoint the great ones to public office."
    },

    {
        author : "Jane Austen",
        quote : "Nothing amuses me more than the easy manner with which everybody settles the abundance of those who have a great deal less than themselves."
    },

    {
        author : "Trey Parker and Matt Stone,",
        quote : "Sometimes what's right isn't as important as what's profitable."
    },

    {
        author : "Gordon Atkinson",
        quote : "I write because I'm afraid to say some things out loud."
    },

    {
        author : "Arthur C. Clarke",
        quote : "At the present rate of progress, it is almost impossible to imagine any technical feat that cannot be achieved - if it can be achieved at all - within the next few hundred years."
    },

    {
        author : "Socrates",
        quote : "Think not those faithful who praise all thy words and actions; but those who kindly reprove thy faults."
    },

    {
        author : "Herbert Spencer",
        quote : "The great aim of education is not knowledge but action."
    },

    {
        author : "D. H. Lawrence",
        quote : "It is a fine thing to establish one's own religion in one's heart, not to be dependent on tradition and second-hand ideals. Life will seem to you, later, not a lesser, but a greater thing."
    },

    {
        author : "Gordon Atkinson",
        quote : "Integrity combined with faithfulness is a powerful force and worthy of great respect."
    },

    {
        author : "Jane Goodall",
        quote : "Lasting change is a series of compromises. And compromise is all right, as long your values don't change."
    },

    {
        author : "Harold Rosenberg",
        quote : "No degree of dullness can safeguard a work against the determination of critics to find it fascinating."
    },

    {
        author : "Bill Vaughan",
        quote : "We learn something every day, and lots of times it's that what we learned the day before was wrong."
    },

    {
        author : "Arthur Brisbane",
        quote : "A good friend can tell you what is the matter with you in a minute. He may not seem such a good friend after telling."
    },

    {
        author : "Bob Wells",
        quote : "For every action there is an equal and opposite government program."
    },

    {
        author : "Will Rogers",
        quote : "I'm not a real movie star. I've still got the same wife I started out with twenty-eight years ago."
    },

    {
        author : "Jane Austen",
        quote : "Where so many hours have been spent in convincing myself that I am right, is there not some reason to fear I may be wrong?"
    },

    {
        author : "Edith Sitwell",
        quote : "I am patient with stupidity but not with those who are proud of it."
    },

    {
        author : "Daniel Webster",
        quote : "The world is governed more by appearances than realities, so that it is fully as necessary to seem to know something as to know it."
    },

    {
        author : "Robertson Davies",
        quote : "A truly great book should be read in youth, again in maturity and once more in old age, as a fine building should be seen by morning light, at noon and by moonlight."
    },

    {
        author : "Benjamin Disraeli",
        quote : "My idea of an agreeable person is a person who agrees with me."
    },

    {
        author : "Lisa Kudrow",
        quote : "I think it's always a good move to listen to that inner voice, if it doesn't lead to a crime."
    },

    {
        author : "Sheila Graham",
        quote : "You can have anything you want if you want it desperately enough. You must want it with an inner exuberance that erupts through the skin and joins the energy that created the world."
    },

    {
        author : "Aaron McGruder",
        quote : "When I pass, speak freely of my shortcomings and my flaws. Learn from them, for I'll have no ego to injure."
    },

    {
        author : "Og Mandino",
        quote : "Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend them all the care, kindness and understanding you can muster. Your life will never be the same again."
    },

    {
        author : "Robert Graves",
        quote : "The remarkable thing about Shakespeare is that he really is very good, in spite of all the people who say he is very good."
    },

    {
        author : "Mark Twain",
        quote : "Never learn to do anything: if you don't learn, you'll always find someone else to do it for you."
    }
];

// selects text placeholder
let quoteSelector = document.querySelector(".rand-quotes-text");
// selects quote author
let author = document.querySelector(".quote-author");
// selects new quote button
let quoteBtn = document.getElementById("new-quote-generator");
// selects body 
let bodySelector = document.querySelector("body");
// selects all fontawesome icons
let iconSelector = document.querySelectorAll(".fab");
// selects twitter icon
let twitIcon = document.getElementById("twitter-icon");
// selects tumbl-icon
let thumbIcon = document.getElementById("tumbl-icon");
// selects quote-icon
let quoteIcon = document.getElementById("quote-icon");


quoteBtn.addEventListener("click", function () {
    // container for generateRandColor function to set its color value to one
    let color = generateRandColor();
    // generate random numbers equal to quotes variables length;
    let rand = Math.floor((Math.random() * quotes.length));
    // change quote with random 
    quoteSelector.textContent = quotes[rand].quote;
    // set quote color to random 
    quoteSelector.style.color = color;
    // change author
    author.textContent = "- " + quotes[rand].author;
    // changes author color
    author.style.color = color;
    // change body background color
    bodySelector.style.background = color;
    // change button background
    quoteBtn.style.background = color;
    // change button border color
    quoteBtn.style.border = '1px solid ' + color;
    twitIcon.style.color = color;
    thumbIcon.style.color = color;    
    quoteIcon.style.color = color;
});


function generateRandColor(){
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    return 'rgb(' + red + "," + green + "," + blue +")";
}

