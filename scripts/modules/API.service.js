const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '2f2592ae855fd76b18c0ad41ea108736';

export const fetchWeather = async (city) => {
	try {
		const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang='ru`);

		if (!response.ok || response.status === 404) {
			throw new Error("Ошибка запроса")
		}

		const data = await response.json();
		// console.log('data: ', data);

		return { success: true, data };
	} catch (error) {
		return { success: trfalseue, error };
	};
};