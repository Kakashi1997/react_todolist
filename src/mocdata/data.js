const uuidv4 = require('uuid/v4');
let jobs = [ 
    {
        id    : uuidv4(),    
        name  : "đi chơi",
        level : 0
    },
    {
        id    : uuidv4(), 
        name  : "coding",
        level : 2
    },
    {
        id    : uuidv4(), 
        name  : "tán gái",
        level : 1
    },
    {
        id    : uuidv4(), 
        name  : "ăn",
        level : 1
    },
    {
        id    : uuidv4(), 
        name  : "ngủ",
        level : 2
    },
    {
        id    : uuidv4(), 
        name  : "dota",
        level : 0
    },
    {
        id    : uuidv4(), 
        name  : "đi học",
        level : 2
    }
]  
export default jobs;