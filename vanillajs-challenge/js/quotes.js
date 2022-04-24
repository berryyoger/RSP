const quotes = [
    {
        quote: "Carpe diem, Quam minimum credula postero.",
        author: "Quintus Horatius Flaccus"
},
    {
        quote: "The greatest weakness of all weaknesses is to fear too much to appear weak.",
        author: "Jacques-Bénigne Bossuet"
},
    {
        quote: "יהי אור",
        author: "כִּתבֵי הַקוֹדֶשׁ"
},
    {
        quote: "늦었다고 생각했을때가 제일 늦었더라.",
        author: "나"
},
    {
        quote: "Call me Ishmael",
        author: "Moby Dick"
},
    {
        quote: "편지를 거기 둔 건 나 읽으라는 친절인가?",
        author: "강신재"
},
    {
        quote: "다만 前頭의 光明으로 驀進할 ᄯᅡ름인뎌.",
        author: "독립선언서"
},
    {
        quote: "나는 자신이 무엇을 원하는지 아는 사람을 좋아한다.",
        author: "The Sorrows of Young Werthers"
}
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;