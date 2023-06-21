import { fetchWeather } from "./API.service.js";
import {
	renderWidgetForecast,
	renderWidgetOther,
	renderWidgetToday
} from "./render.js";

export const startWidget = async () => {
	const widget = document.createElement('div');
	widget.classList.add('widget');

	const dataWeather = await fetchWeather('Ереван');
	// console.log('dataWeather: ', dataWeather);

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError();
	}

	renderWidgetForecast(widget);

	return widget;
};