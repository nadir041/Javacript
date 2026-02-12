// const coding = ["js", "ruby", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item); 
//     return item
// })
// console.log(values);




const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);

// const  newNums = []
// myNums.forEach( (num) => {
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: "Book1", genre: "fiction", publish: 1991, edition: 2004 },
    {title: "Book2", genre: "history", publish: 1992, edition: 2005 },
    {title: "Book3", genre: "def", publish: 1993, edition: 2006 },
    {title: "Book4", genre: "ghi", publish: 1994, edition: 2007 },
    {title: "Book5", genre: "history", publish: 1999, edition: 2008 },
    {title: "Book6", genre: "mno", publish: 1996, edition: 2009 },
    {title: "Book7", genre: "history", publish: 1997, edition: 2010 },
    {title: "Book8", genre: "stu", publish: 1998, edition: 2011 },
    {title: "Book9", genre: "history", publish: 1991, edition: 2012 },
]


let userBooks = books.filter( (bk) => bk.genre === "history");

userBooks = books.filter( (bk) => {
    return bk.publish === 1991 && bk.genre === "history"
} )

console.log(userBooks);
