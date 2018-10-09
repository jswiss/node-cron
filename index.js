const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

app = express();

// schedule tasks to be run on the server
cron.schedule('* * * * *', function() {
	console.log('running a task every minute');
});

// schedule tasks to be run on the server
cron.schedule('* * 21 * *', function() {
	console.log('---------------------');
	console.log('Running Cron Job');
	fs.unlink('./error.log', err => {
		if (err) throw err;
		console.log('Error file succesfully deleted');
	});
});

app.listen(3128);
