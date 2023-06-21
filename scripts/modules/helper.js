const addZeroMinutesHours = n => n < 10 ? `0${n}` : n;

export const getCurrentDateTime = () => {
	const months = [
		'янв',
		'фев',
		'мар',
		'апр',
		'май',
		'июн',
		'июл',
		'авг',
		'сен',
		'окт',
		'ноя',
		'дек'
	];

	const weekdays = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота'
	];

	const date = new Date();

	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const dayOfMonth = date.getDate();
	const dayOfWeek = weekdays[date.getDay()];

	// date.setHours(3);
	// date.setMinutes(7);

	const hours = addZeroMinutesHours(date.getHours());
	const minutes = addZeroMinutesHours(date.getMinutes());

	// console.log('hours: ', hours);
	// console.log('minutes: ', minutes);


	return { hours, minutes, dayOfMonth, month, year, dayOfWeek };
};