// expected response 200 status code for api/v1/products/1
const config = require('../config');

test('Should return 200 status code....', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// expected 200 response for /api/v1/cards
test('Should return 200 status code....', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// expected 200 response for api/v1/couriers
test('Should return 200 status code....', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});
//expected 404 status code response for api/v1/products/100(NEGATIVE/NO PRODUCT)
test('Should return 404 status code....', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/100`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(404);
});
//verifying response body for /api/v1/kits/2
test('Body should return the details of the kit', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

expect(actualResponseBody.name).toBe("For movies and series");
});