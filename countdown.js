// Replace the date below with the date that you want to countdown to in the format YYYY-MM-DD
var deadline = '2021-12-30';

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t/1000) % 60);
	var minutes = Math.floor((t/1000/60) % 60);
	var hours = Math.floor((t/(1000*60*60)) % 24);
	var days = Math.floor(t/(1000*60*60*24));

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementsByClassName(id)[0];

	var daysSpan = clock.querySelector('#days').getElementsByTagName('h1')[0];
	var hoursSpan = clock.querySelector('#hours').getElementsByTagName('h1')[0];
	var minutesSpan = clock.querySelector('#minutes').getElementsByTagName('h1')[0];
	var secondsSpan = clock.querySelector('#seconds').getElementsByTagName('h1')[0];

	var timeInterval = setInterval(function() {
		var t = getTimeRemaining(endtime);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = t.hours;
		minutesSpan.innerHTML = t.minutes;
		secondsSpan.innerHTML = t.seconds;

		if (t.total<=0) {
			clearInterval(timeInterval);
		}
	}, 1000);
}

initializeClock('content', deadline);
