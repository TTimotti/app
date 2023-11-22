const quotes = [
    {
        quote: "젊음은 젊은이에게 주기에는 너무 아깝다",
        author: "조지 버나드 쇼"
    },
    {
        quote: "평온한 바다는 결코 유능한 뱃사람을 만들 수 없다",
        author: "영국 속담"
    },
    {
        quote: "동정할거면 돈으로 줘라",
        author: "박명수"
    },
    {
        quote: "내일이란 오늘의 다른 이름일 뿐이다",
        author: "윌리엄 포크너"
    },
    {
        quote: "내가 세상을 이기었노라",
        author: "요한복음 316장 33절"
    },
    {
        quote: "우리가 세상에 아무 것도 가지고 온 것이 없으며 또한 아무 것도 가지고 가지 못하리니",
        author: "디모데전서 6장 7절"
    },
    {
        quote: "이 또한 지나가리라",
        author: "솔로몬"
    },
    {
        quote: "나더러 주여 주여 하는 자마다 천국에 다 들어갈 것이 아니며",
        author: "마태복음 7장 21절"
    },
    {
        quote: "여호와를 경외하는 것이 지식의 근본이거늘",
        author: "잠언 1장 7절"
    },
    {
        quote: "내가 네게 명령한 것이 아니냐 강하고 담대하라",
        author: "여호수아 1장 9절"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const drawQuote = () => {
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = todayQuote.quote;
    author.innerHTML = `- ${todayQuote.author} -`;
}
drawQuote();