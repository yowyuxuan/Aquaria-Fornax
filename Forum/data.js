var defaultThreads = [
    {
        id: 1,
        title: "Introduction",
        author: "Jia Yu",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Yu Xuan",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Khan",
                date: Date.now(),
                content: "Hey to you too"
            },
            {
                author: "Yu Chen",
                date: Date.now(),
                content: "Hi everyone! Happy to meet you guys!"
            }
        ]
    },
    {
        id: 2,
        title: "Chit Chat",
        author: "Jia Yu",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Khan",
                date: Date.now(),
                content: "I love marketing!"
            },
            {
                author: "Yu Chen",
                date: Date.now(),
                content: "Yay! We're nearing the end of the year. Looking forward to our Xmas Party!"
            },

            {
                author: "Yu Xuan",
                date: Date.now(),
                content: "Picked up an amazing course, BT3103 in NUS! It really helps it in my future career! 100% recomended!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
