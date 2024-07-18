var quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  { author: "Frank Zappa", quote: "So many books, so little time" },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "J.K. Rowling",
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    author: "Albert Camus",
    quote:
      "Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Stephen Chbosky",
    quote: "We accept the love we think we deserve.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    author: "Andre Gide",
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
  },
  {
    author: "H. Jackson Brown Jr",
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
  },
  {
    author: "George Carlin",
    quote: "Beethoven was so hard of hearing he thought he was a painter.",
  },
  {
    author: "Lauren Asher,",
    quote: "There was something cathartic about pouring out all my feelings.",
  },
  {
    author: "Casey McQuiston",
    quote:
      "Sometimes August thinks Jane looks like a watercolor painting, fluid and lovely, darker in places, bleeding through the page.",
  },
  {
    author: "Paulo Coelho",
    quote:
      "It's the possibility of having a dream come true that makes life interesting.",
  },
  {
    author: "Augustine of Hippo",
    quote:
      "The truth is like a lion; you don’t have to defend it. Let it loose; it will defend itself.",
  },
  {
    author: "Frantz Fanon",
    quote:
      "The people come to understand that wealth is not the fruit of labour but the result of organised, protected robbery. Rich people are no longer respectable people; they are nothing more than flesh eating animals, jackals and vultures which wallow in the people's blood.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
];

var lastRandom = 0;
function displayQuotes() {
  var quoteBox = ``;
  var random = Math.floor(Math.random() * quotes.length);
  while (random === lastRandom) {
    random = Math.floor(Math.random() * quotes.length);
  }
  lastRandom = random;
  // used this consol.log to make sure that the same number will not appear two times in a row
  console.log(lastRandom);
  quoteBox += `
            <div class="quote-generate mt-4 p-md-3" >
                <p class="p-4" id="quote">
                    &ldquo;${quotes[lastRandom].quote}&rdquo;
                    </p>
                    <p class="pt-2 text-capitalize mb-0" id="author">― ${quotes[lastRandom].author}</p>;
            </div>`;
  document.getElementById("author-quote").innerHTML = quoteBox;
}
