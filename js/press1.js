let presscontents = [
    {
        maintext: "This property company ups the Ante <br> with Luxury and Sustainability",
        date: "Sunset Magazine | August 13 2021",
        subtext: "Where sun sand and splendor are <br> still to be discoverd",
        magazine: "Newyork times | June 9 2021",
        maintext1: "Mike Meldman is one of the most<br> influential real-estate moguls in the country thanks to his luxurious  rich and famous during the pandemic.",
        date1: "Business Insider |  June 4, 2021",
        subtext1: "There is a real buy-in for resort <br> communities offering amusement and <br> amenities.",
        magazine1: "Luxury Magazine | Spring/Summer 2021"

    },
    {
        maintext: "This Blue Chip Caribbean Island Hopes to Dethrone St. Barts",
        date: "New York Post | April 5, 2021",
        subtext: "No Longer Waiting for Retiremen",
        magazine: "New York Times International Homes | March 27-28, 2021",
        maintext1: "Golf and Pickleball are Having a Love Affairy",
        date1: "New York Times | March 22, 2021",
        subtext1: "For Many, the Pandemic Has Led to the &#039;Discovery&#039; of Golf",
        magazine1: "New York Times | March 22, 2021",

    },
    {
        maintext: "Celebrities Keep Flocking to Discovery Resorts During the Pandemic. Here&#039;s Why",
        date: "Elle Decor | September 2020",
        subtext: "Green Golf Homes in Five Destinations",
        magazine: "New York Times | September 11, 2020",
        maintext1: "Bring Your Clubs. And the Kids.",
        date1: "New York Times | September 11, 2020",
        subtext1: "Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club",
        magazine1: "Forbes | August 2020"
    },
    {
        maintext: "How Discovery Land Company&#039;s Mike Meldman Develops the World&#039;s Most Exclusive Private Clubs and Resort Communities",
        date: "CSQ | June 17, 2020",
        subtext: "U.S. Golf Communities for the Love of the Game (Yellowstone Club and Madison Club)",
        magazine: "Mansion Global | April 23, 2020",
        maintext1: "A Rockwellian Lifestyle at Silo Ridge (Silo Ridge)",
        date1: "Quest Magazine | April 10, 2020",
        subtext1: "Thinking of golf in retirement?",
        magazine1: "New York Times | March 7, 2020"

    },
    {
        maintext: " 5Luxury and Sustainability",
        date: "Mumbai | November 21 2021",
        subtext: "Sustainability",
        magazine: "Austarlia | MAy 30 2012",
        maintext1: " Sustainability",
        date1: "Times | jan 21 2021",
        subtext1: "No longer waiting for retirement",
        magazine1: "Norway | Feb 30 2000"

    }
]
let index = 0;
function next() {
    index++;
    changetext();
}
function prev() {
    index--;
    changetext();
}
function changetext() {
    if (index < 0) index = presscontents.length - 1;
    if (index >= presscontents.length) index = 0;

    document.getElementById("image1").innerHTML = presscontents[index].maintext;
    document.getElementById("picture1").innerHTML = presscontents[index].date;
    document.getElementById("image2").innerHTML = presscontents[index].subtext;
    document.getElementById("picture2").innerHTML = presscontents[index].magazine;
    document.getElementById("image3").innerHTML = presscontents[index].maintext1;
    document.getElementById("picture3").innerHTML = presscontents[index].date1;
    document.getElementById("image4").innerHTML = presscontents[index].subtext1;
    document.getElementById("picture4").innerHTML = presscontents[index].magazine1;
}