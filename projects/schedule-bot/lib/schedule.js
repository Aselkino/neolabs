const weekSchedule = [
    {
        dayName: 'sunday',
        lessons: []
    },
    {
        dayName: 'monday',
        lessons: [
            {   
                time:"9:00",
                name: 'Math',
                auditory: 212,
                teacher: 'Dan Abramov'
            },
            {   
                time:"10:00",
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
                time:"9:00",
                name: 'Physics',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            {
                time:"10:00",
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
                time:"9:00",
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
                time:"9:00",
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            {
                time:"10:00",
                name: 'English',
                auditory: 512,
                teacher: 'Samara Isaevna'
            }
        ]
    },
    {
        dayName: 'friday',
        lessons: [
            {
                time:"9:00",
                name: 'Math',
                auditory: 212,
                teacher: 'Damira Asanbekova'
            },
            {
                time:"10:00",
                name: 'English',
                auditory: 512,
                teacher: 'Samara Isaevna'
            }
        ]
    },
    {
        dayName: 'saturday',
        lessons: [
            {   
                time:"9:00",
                name: 'Literature',
                auditory: 212,
                teacher: 'Gulnara Zhobazarovna'
            },
            {   
                time:"10:00",
                name: 'Geometry',
                auditory: 212,
                teacher: 'Dan Abramov'
            }
        ]
    }
];

exports.getTodaySchedule = function() {
    const today = new Date();
    const dayNumber = today.getDay(); // 2

    const todaySchedule = weekSchedule[dayNumber];

    console.log(todaySchedule);

    const scheduleString = `
    День: ${todaySchedule.dayName} 🥳

    Занятия:
        ${todaySchedule.lessons.map(lesson => {
            return `\n${lesson.time}, ${lesson.name}, аудитория ${lesson.auditory}, ${lesson.teacher}`;
        })}`;

    return scheduleString;
}
