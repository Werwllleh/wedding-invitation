import dayjs from "dayjs";
import 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ru';


export const formatDate = (date, format) => {
  const monthsGenitive = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];


  const day = dayjs(date).locale('ru').format('DD'); // День
  const monthIndex = dayjs(date).locale('ru').month(); // Индекс месяца (0-11)
  const year = dayjs(date).locale('ru').format('YYYY'); // Год

  if (format && format.includes('MMMM')) {
    return `${day} ${monthsGenitive[monthIndex]} ${year}`;
  } else {
    return dayjs(date).format(format);
  }

};
