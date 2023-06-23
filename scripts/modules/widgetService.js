import { fetchForecast, fetchWeather, getCity } from "./API.service.js";
import {
	renderWidgetForecast,
	renderWidgetOther,
	renderWidgetToday,
	showError
} from "./render.js";

export const startWidget = async (city, widget) => {
	if (!city) {
		const dataCity = await getCity();

		if (dataCity.success) {
			city = dataCity.city;
		} else {
			showError(dataCity.error, widget);

		}
	}

	if (!widget) {
		widget = document.createElement('div');
		widget.classList.add('widget');
	}

	const dataWeather = await fetchWeather(city);
	// console.log('dataWeather: ', dataWeather);

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError(dataWeather.error, widget);
	}

	const dataForecast = await fetchForecast(city);
	// console.log('dataForecast: ', dataForecast);

	if (dataForecast.success) {
		renderWidgetForecast(widget, dataForecast.data);
	} else {
		showError(dataForecast.error, widget);
	}

	return widget;
};