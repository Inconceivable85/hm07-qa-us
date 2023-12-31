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

// new 500
//NEGATIVE TESTING testing 500 for order without available warehouse
const requestBody3 = {
	"productsList": [
		{
		  "id": 5,
		  "quantity": 1
		},
		{
		  "id": 16,
		  "quantity": 2
		},
		{
		  "id": 18,
		  "quantity": 1
		}
	  ]
}

//testing POST response expected 409 /api/v1/orders
test('Status code should be 409', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody3)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(409);
});

//TEST NOT PROVEN BELOW

//TEST NOT PROVEN ABOVE


const requestBody4 = {
	"products": [
	  {
		"id": 1,
		"quantity": 2
	  }
	]
  }
test('Response body should contain...', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody4)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["Everything You Need"]["Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free"]).toBe(false);
});
//{
//   "Everything You Need": {
//     "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": false
//   },