// const { POINT_CONVERSION_COMPRESSED } = require('constants');
// const { Telegaf, Telegraf } = require('telegraf')
// const token = '1657753595:AAHanfIdeA3Zu6vnvO75J88zi-VOeF3SMQI';
// const bot = new Telegraf(token)



// const jokes = ['Почему в мультфильме "Маша и Медведь" не показывают родителей Маши?- Они, наверное, уже в дурдоме!', 
//                'Коврик у двери, на нем вышито: "Представь, что я твой начальник"', 
//                '- Официант, в вине я нашел седой волос! - Не удивительно, ведь вину 200 лет'];

// bot.command('giveJoke', (ctx) => {
//     const jokeIndex = Math.floor(Math.random() * jokes.length);
//     const joke = jokes[jokeIndex];
//     ctx.reply(joke);
// });
// bot.launch()


// const photos = ['https://unsplash.com/photos/SYx3UCHZJlo',
//                       'https://unsplash.com/photos/UljbyG2UcVI',
//                       'https://unsplash.com/photos/7XAM0J3dNQM',
//                       'https://unsplash.com/photos/okVXy9tG3KY'] ;

// bot.command('replyWithPhoto', (ctx)=> {
//     const photoIndex = Math.floor(Math.random() * photos.length);
//     const photo = photos [photoIndex];
//     ctx.replyWithPhoto(photo);
// });
// bot.launch()


const weekSchedule = [
    {
        dayName: 'monday',
        lessons: [
            {
                name: 'Math',
                auditory: 212,
                teacher: 'Dan Abramov'
            },
            {
                name: 'Geometry',
                auditory: 212,
                teacher: 'Dan Abramov'
            }
        ]
    },
    {
        dayName: 'tuesday',
        lessons: [
            {
                name: 'Physics',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            {
                name: 'English',
                auditory: 512,
                teacher: 'Samara Isaevna'
            }
        ]
    },
    {
        dayName: 'wednesday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
    {
        dayName: 'thursday',
        lessons: [
            {
                name: 'Literature',
                auditory: 515,
                teacher: 'Aigul Ahmatova'
            },
            {
                name: 'Management',
                auditory: 321,
                teacher: 'Fatima Bokolovna'
            }
        ]
    },
    {
        dayName: 'friday',
        lessons: [
            {
                name: 'econometrics',
                auditory: 308,
                teacher: 'Nurzhan Bukarova'
            },
            {
                name: 'IT English',
                auditory: 102,
                teacher: 'Venera Bukaraeva'
            }
        ]
    },
    {
        dayName: 'saturday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков!'
            }
        ]
    },
    {
        dayName: 'sunday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков!'
            }
        ]
    }
];

const newWeekSchedule = weekSchedule.map(week => {
    return `${week.dayName} ${week.lessons}`
})
console.log(newWeekSchedule);


// const list1 = weekSchedule.map(week => week.lessons);
//     const list2 = list1.map(lessons => ({ lesson: lessons[0].name }));
//     console.log(list1);
//     console.log(list2);
