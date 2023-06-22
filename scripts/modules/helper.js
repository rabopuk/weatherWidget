// Добавляю 0 в часах и минутах
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
		'дек',
	];

	const weekdays = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
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

	return { hours, minutes, dayOfMonth, month, year, dayOfWeek };
};


// Нахожу символ направления ветра
export const getWindDirection = (deg) => {
	const directions = [
		'&#8593;', // N
		'&#8598;', // NW
		'&#8592;', // W
		'&#8601;', // SW
		'&#8595;', // S
		'&#8600;', // SE
		'&#8594;', // E
		'&#8599;', // NE
	];
	const i = Math.round(deg / 45) % 8;

	return directions[i];
};


// Рассчитываю Точку Росы
export const calculateDewPoint = (temp, humidity) => {
	const a = 17.27, // постоянная
		b = 237.7; // постоянная

	const f = (a * temp) / (b + temp) + Math.log(humidity / 100); // высчитывается по формуле
	const dewPoint = (b * f) / (a - f); // точка росы

	return dewPoint.toFixed(2);
};


// Конвертирую давление из гПа в мм рт.ст.
export const convertPressure = pressure => (pressure / 133.3223684 * 100).toFixed(2);


//
export const getForecastData = (data) => {
	// Получаю следующие 5 дней
	const forecast = data.list.filter(
		(item) =>
			new Date(item.dt_txt).getHours() === 12 &&
			new Date(item.dt_txt).getDate() > new Date().getDate()
	);
	// console.log('forecast: ', forecast);

	const forecastData = forecast.map((item) => {
		const date = new Date(item.dt_txt);
		const weekdaysShort = [
			'вс',
			'пн',
			'вт',
			'ср',
			'чт',
			'пт',
			'сб',
		];

		const dayOfWeek = weekdaysShort[date.getDay()];
		const weatherIcon = item.weather[0].icon;

		let minTemp = Infinity;
		let maxTemp = -Infinity;

		for (let i = 0; i < data.list.length; i++) {
			const temp = data.list[i].main.temp;
			const tempDate = new Date(data.list[i].dt_txt);

			// if (tempDate.getDate() === date.getDate()) {
			// 	if (temp < minTemp) {
			// 		minTemp = temp;
			// 	} else {
			// 		maxTemp = temp;
			// 	}
			// }

			if (tempDate.getDate() === date.getDate() && temp < minTemp) {
				minTemp = temp;
			}

			if (tempDate.getDate() === date.getDate() && temp > maxTemp) {
				maxTemp = temp;
			}
		}

		return {
			dayOfWeek,
			weatherIcon,
			minTemp,
			maxTemp,
		};
	});

	return forecastData;
};