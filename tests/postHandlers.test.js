
// testing 201 response against api/v1/orders with multiple duplicate item id's
const config = require('../config');



  const requestBody = {
	"productsList": [
		{
		  "id": 5,
		  "quantity": 1
		},
		{
		  "id": 5,
		  "quantity": 2
		},
		{
		  "id": 5,
		  "quantity": 1
		}
	  ]
}

test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

const requestBody1 = {
	"productsList": [
		{
		  "id": 1,
		  "quantity": 1
		},
		{
		  "id": 2,
		  "quantity": 2
		},
		{
		  "id": 3,
		  "quantity": 1
		}
	  ]
}

//TESTING FOR 409 RESPONSE
test('Status code should be 409', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody1)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(409);
});

