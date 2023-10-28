// eslint-disable-next-line no-undef
const config = require('../config');
//{
//	"name": "Project7-deleteHandlers",
//	"cardId": 1
//  }


test('Response code Should return 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/9`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


const requestBody2 = 
{
	"name": "deleteHandlers2",
	"cardId": 1
  }

  test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

//GOOD TO HERE!!! DONT TOUCH!!!

test('Boolean response for DELETE method on /api/v1/kits', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
            method: 'DELETE'
    
        });
        actualResponseBody = await response.json()
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody["ok"]).toBe(true);
});
