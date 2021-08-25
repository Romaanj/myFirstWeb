const books = [    
{
    book: "사피엔스",
    author: "유발 하라리"
},
{
    book: "약속의 땅",
    author: "버락 오바마"
},
{
    book: "위대한 기업에 투자하라",
    author: "필립 피셔"
},
{
    book: "죽음의 수용소에서",
    author: "빅터 프랭클"
},
{
    book: "질서 너머",
    author: "조던 피터슨"
},
{
    book: "12가지 인생의 법칙",
    author: "조던 피터슨"
},
{
    book: "엔드 오브 타임",
    author: "브라이언 그린"
},
{
    book: "제로 투 원",
    author: "피터 틸"
},
{
    book: "카네기 인간 관계론",
    author: "데일 카네기"
},
{
    book: "하버드 상위 1퍼센트의 비밀",
    author: "정주영"
},
];

const book = document.querySelector("#book span:first-child");
const author = document.querySelector("#book span:last-child");
const todayBook = books[Math.floor(Math.random() * books.length)];

book.innerText = `📕 Today's book : ${todayBook.book}`;
author.innerText = `👨‍🏫 Author : ${todayBook.author}`;