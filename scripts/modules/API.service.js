const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '2f2592ae855fd76b18c0ad41ea108736';

export const fetchWeather = async (city) => {
	try {
		const response = await fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);

		if (!response.ok || response.status === 404) {
			throw new Error("Ошибка запроса погоды")
		}

		const data = await response.json();

		return { success: true, data };
	} catch (error) {
		return { success: false, error };
	};
};


export const fetchForecast = async (city) => {
	try {
		const response = await fetch(`${API_URL}forecast?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);

		if (!response.ok || response.status === 404) {
			throw new Error("Ошибка запроса прогноза")
		}

		const data = await response.json();

		return { success: true, data };
	} catch (error) {
		return { success: false, error };
	};
};


// Вычисляю город по айпи
export const getCity = async () => {
	const url = 'https://ipapi.co/city/';

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Ошибка запроса города")
		}

		const city = await response.text();
		// console.log('city: ', city);

		return { success: true, city };
	} catch (error) {
		console.log(error)

		return { success: false, error };
	}
};