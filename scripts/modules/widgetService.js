import { fetchForecast, fetchWeather } from "./API.service.js";
import {
	renderWidgetForecast,
	renderWidgetOther,
	renderWidgetToday
} from "./render.js";

export const startWidget = async () => {
	const city = 'Ереван';
	const widget = document.createElement('div');
	widget.classList.add('widget');

	const dataWeather = await fetchWeather(city);
	// console.log('dataWeather: ', dataWeather);

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError(dataWeather.error);
	}

	const dataForecast = await fetchForecast(city);
	// console.log('dataForecast: ', dataForecast);

	if (dataForecast.success) {
		renderWidgetForecast(widget, dataForecast.data);
	} else {
		showError(dataForecast.error);
	}

	return widget;
};