// TESTING STATUS CODE 200
const config = require('../config');

const requestBody = {
	"productsList": [
		{
			"id": 2,
			"quantity": 1
		}
	]
}

test('Should return Status Code 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//round2
test('Response body toBe true', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method:'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	}catch (error) {
		console.error(error);
		}
	expect(actualResponseBody.ok).toBe(true);
	});