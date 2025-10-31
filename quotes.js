const quotes = [
    {
        "id": 1,
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "id": 2,
        "quote": "The best way to predict the future is to invent it.",
        "author": "Alan Kay"
    },
    {
        "id": 3,
        "quote": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll"
    },
    {
        "id": 4,
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs"
    },
    {
        "id": 5,
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
    },
    {
        "id": 6,
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "id": 7,
        "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
    },
    {
        "id": 8,
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    },
    {
        "id": 9,
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "id": 10,
        "quote": "If you can dream it, you can do it.",
        "author": "Walt Disney"
    },
    {
        "id": 11,
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    },
    {
        "id": 12,
        "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
        "author": "William Butler Yeats"
    },
    {
        "id": 13,
        "quote": "Success is not the key to happiness. Happiness is the key to success.",
        "author": "Albert Schweitzer"
    },
    {
        "id": 14,
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    },
    {
        "id": 15,
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "id": 16,
        "quote": "The best revenge is massive success.",
        "author": "Frank Sinatra"
    },
    {
        "id": 17,
        "quote": "The harder I work, the luckier I get.",
        "author": "Gary Player"
    },
    {
        "id": 18,
        "quote": "Don’t watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
    },
    {
        "id": 19,
        "quote": "The secret of success is to do the common thing uncommonly well.",
        "author": "John D. Rockefeller Jr."
    },
    {
        "id": 20,
        "quote": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi"
    },
    {
        "id": 21,
        "quote": "Act as if what you do makes a difference. It does.",
        "author": "William James"
    },
    {
        "id": 22,
        "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "author": "Walt Whitman"
    },
    {
        "id": 23,
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "id": 24,
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "id": 25,
        "quote": "To succeed in life, you need two things: ignorance and confidence.",
        "author": "Mark Twain"
    },
    {
        "id": 26,
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
    },
    {
        "id": 27,
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "id": 28,
        "quote": "What you do today can improve all your tomorrows.",
        "author": "Ralph Marston"
    },
    {
        "id": 29,
        "quote": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh"
    },
    {
        "id": 30,
        "quote": "The biggest risk is not taking any risk.",
        "author": "Mark Zuckerberg"
    },
    {
        "id": 31,
        "quote": "Innovation distinguishes between a leader and a follower.",
        "author": "Steve Jobs"
    },
    {
        "id": 32,
        "quote": "Everything you've ever wanted is on the other side of fear.",
        "author": "George Addair"
    },
    {
        "id": 33,
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
    },
    {
        "id": 34,
        "quote": "The road to success and the road to failure are almost exactly the same.",
        "author": "Colin R. Davis"
    },
    {
        "id": 35,
        "quote": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers"
    },
    {
        "id": 36,
        "quote": "Life is either a daring adventure or nothing at all.",
        "author": "Helen Keller"
    },
    {
        "id": 37,
        "quote": "The mind is everything. What you think you become.",
        "author": "Buddha"
    },
    {
        "id": 38,
        "quote": "Never let your memories be greater than your dreams.",
        "author": "Doug Ivester"
    },
    {
        "id": 39,
        "quote": "Opportunities don't happen. You create them.",
        "author": "Chris Grosser"
    },
    {
        "id": 40,
        "quote": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
    },
    {
        "id": 41,
        "quote": "Whether you think you can or think you can't, you're right.",
        "author": "Henry Ford"
    },
    {
        "id": 42,
        "quote": "The journey of a thousand miles begins with one step.",
        "author": "Lao Tzu"
    },
    {
        "id": 43,
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
    },
    {
        "id": 44,
        "quote": "Never give up on a dream just because of the time it will take to accomplish it.",
        "author": "Earl Nightingale"
    },
    {
        "id": 45,
        "quote": "The difference between ordinary and extraordinary is that little extra.",
        "author": "Jimmy Johnson"
    },
    {
        "id": 46,
        "quote": "The best dreams happen when you're awake.",
        "author": "Cherie Gilderbloom"
    },
    {
        "id": 47,
        "quote": "Life is what happens to us while we are making other plans.",
        "author": "Allen Saunders"
    },
    {
        "id": 48,
        "quote": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
    },
    {
        "id": 49,
        "quote": "Things work out best for those who make the best of how things work out.",
        "author": "John Wooden"
    },
    {
        "id": 50,
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
    },
    {
        "id": 51,
        "quote": "Dream big and dare to fail.",
        "author": "Norman Vaughan"
    },
    {
        "id": 52,
        "quote": "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        "author": "Don Zimmer"
    },
    {
        "id": 53,
        "quote": "Failure is the condiment that gives success its flavor.",
        "author": "Truman Capote"
    },
    {
        "id": 54,
        "quote": "Champions keep playing until they get it right.",
        "author": "Billie Jean King"
    },
    {
        "id": 55,
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "id": 56,
        "quote": "Education costs money. But then so does ignorance.",
        "author": "Sir Claus Moser"
    },
    {
        "id": 57,
        "quote": "There is no substitute for hard work.",
        "author": "Thomas Edison"
    },
    {
        "id": 58,
        "quote": "The future depends on what you do today.",
        "author": "Mahatma Gandhi"
    },
    {
        "id": 59,
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {
        "id": 60,
        "quote": "The harder you work for something, the greater you'll feel when you achieve it.",
        "author": "Anonymous"
    },
    {
        "id": 61,
        "quote": "Don't count the days, make the days count.",
        "author": "Muhammad Ali"
    },
    {
        "id": 62,
        "quote": "The expert in anything was once a beginner.",
        "author": "Helen Hayes"
    },
    {
        "id": 63,
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "id": 64,
        "quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill"
    },
    {
        "id": 65,
        "quote": "Even if you fall on your face, you're still moving forward.",
        "author": "Victor Kiam"
    },
    {
        "id": 66,
        "quote": "Everything has beauty, but not everyone can see it.",
        "author": "Confucius"
    },
    {
        "id": 67,
        "quote": "Wherever you go, go with all your heart.",
        "author": "Confucius"
    },
    {
        "id": 68,
        "quote": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosevelt"
    },
    {
        "id": 69,
        "quote": "Hope is not a strategy.",
        "author": "Vince Lombardi"
    },
    {
        "id": 70,
        "quote": "Perseverance is not a long race; it is many short races one after the other.",
        "author": "Walter Elliot"
    },
    {
        "id": 71,
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
    },
    {
        "id": 72,
        "quote": "Victory belongs to the most persevering.",
        "author": "Napoleon Bonaparte"
    },
    {
        "id": 73,
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
    },
    {
        "id": 74,
        "quote": "A goal without a plan is just a wish.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "id": 75,
        "quote": "The past cannot be changed. The future is yet in your power.",
        "author": "Unknown"
    },
    {
        "id": 76,
        "quote": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
    },
    {
        "id": 77,
        "quote": "Either you run the day or the day runs you.",
        "author": "Jim Rohn"
    },
    {
        "id": 78,
        "quote": "Start where you are. Use what you have. Do what you can.",
        "author": "Arthur Ashe"
    },
    {
        "id": 79,
        "quote": "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        "author": "Lyndon B. Johnson"
    },
    {
        "id": 80,
        "quote": "Learn from yesterday, live for today, hope for tomorrow.",
        "author": "Albert Einstein"
    },
    {
        "id": 81,
        "quote": "Quality is not an act, it is a habit.",
        "author": "Aristotle"
    },
    {
        "id": 82,
        "quote": "If you can dream it, you can achieve it.",
        "author": "Zig Ziglar"
    },
    {
        "id": 83,
        "quote": "Make each day your masterpiece.",
        "author": "John Wooden"
    },
    {
        "id": 84,
        "quote": "The difference between the impossible and the possible lies in determination.",
        "author": "Tommy Lasorda"
    },
    {
        "id": 85,
        "quote": "Failure is success in progress.",
        "author": "Albert Einstein"
    },
    {
        "id": 86,
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein"
    },
    {
        "id": 87,
        "quote": "Success is the sum of small efforts repeated day in and day out.",
        "author": "Robert Collier"
    },
    {
        "id": 88,
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "id": 89,
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
    },
    {
        "id": 90,
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    }
];

module.exports = quotes;
