// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
 fetch('https://jsonplaceholder.typicode.com/posts')
     .then(function (value){
     return value.json();
 })
     .then(function (value){
        console.log(value);
 });
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (comments){
            return comments.json();
        })
        .then(function (result){
            console.log(result);
        });