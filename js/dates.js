$(document).ready(function() {
	let date = new Date()

	let hour = date.getHours()
	let greet = ''
	if (hour >= 0 && hour < 12) {
		greet = 'Good morning!'
	} else if (hour >= 12 && hour < 17) {
		greet = 'Good afternoon!'
	} else if (hour >= 17 && hour <= 23) {
		greet = 'Good evening!'
	}

	let day = date.getDay()
	let dayOfWeek = ''
	if (day === 0) {
		dayOfWeek = 'Sunday'
	} else if (day === 1) {
		dayOfWeek = 'Monday'
	} else if (day === 2) {
		dayOfWeek = 'Tuesday'
	} else if (day === 3) {
		dayOfWeek = 'Wednesday'
	} else if (day === 4) {
		dayOfWeek = 'Thursday'
	} else if (day === 5) {
		dayOfWeek = 'Friday'
	} else if (day === 6) {
		dayOfWeek = 'Saturday'
	}

	let month = date.getMonth()
	let monthOfYear = ''
	let monthColor = ''
	if (month === 0) {
		monthOfYear = 'January'
		monthColor = 'rgb(27,45,80)'
	} else if (month === 1) {
		monthOfYear = 'February'
		monthColor = 'rgb(64,144,155)'
	} else if (month === 2) {
		monthOfYear = 'March'
		monthColor = 'rgb(158,188,217)'
	} else if (month === 3) {
		monthOfYear = 'April'
		monthColor = 'rgb(143,87,147)'
	} else if (month === 4) {
		monthOfYear = 'May'
		monthColor = 'rgb(227,180,187)'
	} else if (month === 5) {
		monthOfYear = 'June'
		monthColor = 'rgb(231,144,112)'
	} else if (month === 6) {
		monthOfYear = 'July'
		monthColor = 'rgb(212,76,50)'
	} else if (month === 7) {
		monthOfYear = 'August'
		monthColor = 'rgb(174,143,88)'
	} else if (month === 8) {
		monthOfYear = 'September'
		monthColor = 'rgb(193,171,142)'
	} else if (month === 9) {
		monthOfYear = 'October'
		monthColor = 'rgb(129,67,86)'
	} else if (month === 10) {
		monthOfYear = 'November'
		monthColor = 'rgb(53,21,65)'
	} else if (month === 11) {
		monthOfYear = 'December'
		monthColor = 'rgb(43,95,85)'
	}

	let dayOfMonth = date.getDate()

	let year = date.getFullYear()

	$('.main-area').css('background-color', monthColor)

	$('.subhead').css('color', monthColor)

	let greeting = `<p>${greet}</p> <h2>Today is ${dayOfWeek}, ${monthOfYear} ${dayOfMonth}, ${year}.</h2>`
	$('#greeting').html(greeting)

	let copyright = `<h5>&copy; ${year} Serena Scalzi &nbsp;|&nbsp; Photo by Patrick Fore on Unsplash</h5>`
	$('#copyright').html(copyright)
})
