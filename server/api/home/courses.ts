export default defineEventHandler(() => {
    return $fetch('https://ibs-training.ru/api/home/getCourses')
});
