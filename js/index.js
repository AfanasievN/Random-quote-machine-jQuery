const quotes = [
   {
     "quote" : "Good things happen to those who hustle. ",
     "source" :" Anais Nin"
   },
   {
     "quote" : "My entire life can be summed up in four word: I hustled. I conquered ",
     "source" :" Unknown"
   },
   {
     "quote" : "You must either modify your dreams or magnify your skills. ",
     "source" :" Unknown"
   },
   {
     "quote" : "You must either modify your dreams or magnify your skills ",
    "source" : "Jim Rohn "
   },
   {
     "quote" : "Invest in your dreams. Grind now. Shine later",
     "source" :"Unknown "
   },
   {
     "quote" : " What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
     "source" :"Don Zimmer"
   },
   {
    "quote" :  "Live daringly, boldly, fearlessly. Taste the relish to be found in competition – in having put forth the best within you ",
     "source" :" Henry J. Kaiser"
   },
   {
    "quote" :  "Contrary to popular opinion, the hustle is not a dance step – it’s an old business procedure ",
    "source" : " Fran Lebowitz"
   },
   {
     "quote" : " I’m living everyday like a hustle. Another drug to juggle. Another day, another struggle.",
     "source" :"Notorious BIG "
   },
   {
     "quote" : "Some hustle for respect. Some hustle for love. Others hustle for truth. We all hustle to survive. ",
     "source" :" Unknown"
   },
   {
     "quote" : "Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were. ",
     "source" :"David Rockefeller "
   },
   {
     "quote" : "Greatness only comes before hustle in the dictionary. ",
     "source" :" Ross Simmonds"
   },
   {
     "quote" : "Some people want it to happen, some people wish it would happen, others make it happen. ",
     "source" :" Michael Jordan"
   },
   {
    "quote" :  "Entrepreneurship is living a few years of your life like most people won’t. So that you can spend the rest of your life like most people can’t ",
     "source" :"Unknown "
   },
   {
     "quote" : " When I started flirting with the hustle, failure became my ex. Now engaged to the game and married to success.",
     "source" :" Unknown"
   },
   {
     "quote" : " Without hustle, talent will only carry you so far",
   "source" :" Gary Vaynerchuk"
 },
   {
     "quote" : "The hustle brings the dollar. The experience brings the knowledge. The persistence brings success. ",
   "source" :" Ross Simmonds"
 },
   
   {
     "quote" : " Don’t stay in bed unless you can make money in bed",
   "source" :"George Burns "
 },
   {
     "quote" : "Sometimes when you innovate, you make mistakes. It is best to admit them quickly and get on with improving your other innovations",
    "source" : "Steve Jobs "}
 
  
]  
 

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)