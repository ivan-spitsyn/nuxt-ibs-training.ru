export default eventHandler(async (event) => {
    return [
        { link: '/catalog/', text: 'Каталог' },
        { link: '/schedule/', text: 'Расписание' },
        { link: '/corporate/', text: 'Корпоративное обучение' },
        { link: '/testing/', text: 'Оценка персонала' },
        { link: '/consulting/', text: 'Консалтинг' },
        { link: '/it-guru/', text: 'IT-гуру' },
    ]
})
