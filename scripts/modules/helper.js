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
	// console.log('year: ', year);

	const month = months[date.getMonth()];
	// console.log('month: ', month);

	const dayOfMonth = date.getDate();
	// console.log('dayOfMonth: ', dayOfMonth);

	const dayOfWeek = weekdays[date.getDay()];
	// console.log('dayOfWeek: ', dayOfWeek);

	let hours = date.getHours();
	// console.log('hours: ', hours);

	if (hours < 10) {
		hours = `0${hours}`;
	}

	let minutes = date.getMinutes();
	// console.log('minutes: ', minutes);

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return { hours, minutes, dayOfMonth, month, year, dayOfWeek, };
};