# Sprint 7 project
1.Sprint 7 project: 
The goal of Project 7 is to explore, expand and utilize the concepts and ideas we've learned during Sprint 7. Using the Urban Grocers URL, and the files downloaded and cloned from the server, we explore various tests using the javascript programming language. Using the combination of front and back-end testing, we are able to 
investigate, explore and maintain various acpects of the app. Our API requests receive and send back responses through internet protocols, specifically HTTP. By doing this we are able to better understand the Urban Grocers app, as well as gain a better understanding of the world of API testing and Javascript.

 2.Setup
Before running the tests, make sure you have the following software installed:
Postman(10.16.0)- For building and using API's. API testing helps us identify early issues. Our goal with Postman is to receive requests and send back responses through internet protocols, specifically HTTP.
Node.js(v18.17.1)- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. We can use it to run JS outside of the browser.    
VS Code(Update 1.83.)-VS Code has an integrated terminal. We use VS Code to run shell commands as a CMI. This enables us to run and test Node.js, jest framework directly below our tests and avoids having to switch back and forth while testing.
Git(git version 2.41.0.windows.3)- An open source command line interface. Aside form the normal interface commands Git allows us to track changes, mad ein VS Code. We can then well as remove, add, commit, and finally push our changes to Github.
Github- A platform and cloud-based service. It is used as a location for repositories and ultimately where we save/send our changes. Using Git, We can store and manage the final code.
Windows 10 internet explorer-supplementary for observing proper form and responses.(/api/swagger, /docs/)

---Describe how to start the project.
1. Open GitBash.
2. Link your GitHub account to Practicum. Click "Link GitHub account" button in the widget at the top of the page.
3. Create directory to store our Project 7.
    cd ~
    mkdir projects
    cd projects
4. Clone the repository. 
    Copy and Paste. " git clone https://github.com/Inconceivable85/hm07-qa-us.git"
5. Initialize by typing the following into GitBash
    npm init --yes
6. Install packages(jest) by typing the following
    npm install
    


Configuration

In order to run API tests and connect with the back end we need to establish a connection with the server to interface. We do this by...
1. Opening tripleten.com in the browser
2. Restarting the server
3. Copying the server address.
4. Paste the server address in the config.js file in an interface such as notepad or VS CODE in the proper location so the config in your code can connect appropiately. 
5. SAVE (cntl + s)
6. Open Postman. Paste the copied server URL in the Enviroment location. Ensure "current value" server is up-to-date and SAVE.

To see variations of possible tests and parameter options it helps to connect to 'swagger' and 'api DOCS'. We do this by...
1. Taking the copied server address and pasting it in separate web browser address bar. At the end type either "/api/swagger/" or "/DOCS/". Hit enter.
2. Decide which tests you would need to run. Observe variables, tokens, parameters(body), format type(JSON,XML), test type(DELETE,PUT,POST,GET) to better understand the goal.
 

--Google Chrome version 118.0.5993.71--

Running the Tests
To ensure proper initialization for testing and framework format success.
1. verify your initialized. In terminal(VS CODE) type 'npm init --yes'
2. verify Node framework packages available, specifically(VS CODE) "jest" In terminal type 'npm install'

 After deciding which tests need to be done, Requests need to be sent, endpoints need to used.221. Write your test in your CLI.(VS CODE) 
1. (OPTIONAL) In your C:(or file location) open the hm07-qa-us file and move to "tests". click and observe potential test formats. If helpful "open" in your chosen CLI(VSCODE)
2. In VSCode create tests and requests. The resquest(DELETE,POST,GET,PUT) will often dictate how your function should appear and what the response will be. It will also dictate what information you need to input into the parameters. Use api/swagger/ or /DOCS/ to narrow down the window of possibilities and outcomes.
3. Ensure to use proper form and format in coding. Keywords like "expect", camelCase, asynchronous operations. 
4. Likely your test will require asynchronous javascript. Callbacks, and more importantly Promises will be essential. (async/await).
5. RUN - npx jest fileNameHere.
4. Does your response match the expected outcome? If not possibly try to run locally.
5. Does your response match the expected outcome? if test is written correctly but does not respond with the code, possible BUG, Investigate!



When all test return and/or are satisfied with collective work.
1. move to GIT.
2. git add "filename.testorjs"
3. git commit -m "message to simply explain your work"
4. git push -u origin main
5. git status
6. Verify in GITHUB that your work has been successfully pushed.



Test cases
getHandlers.test.js
‘Should return 200 status code....’ /api/v1/products/1 - PASSED

'Should return 200 status code....' /api/v1/cards - PASSED

'Should return 200 status code....'  /api/v1/couriers - PASSED

(NEGATIVE) 'Should return 404 status code....'  /api/v1/products/100/ – PASSED
//NEGATIVE TEST/CORRECT RESPONSE//
'Body should return the details of the kit'   /api/v1/kits/2 -PASSED
//boolean//

postHandlers.test.js
'Status code should be 201...' /api/v1/orders - PASSED

(NEGATIVE)'Status code should be 409...' /api/v1/orders - PASSED
//NEGATIVE TEST/CORRECT RESPONSE//
(NEGATIVE)'Status code should be 409...' /api/v1/orders - PASSED
//NEGATIVE TEST/CORRECT RESPONSE//
'Response body should contain...' /api/v1/warehouses/check - PASSED
//boolean//


putHandlers.test.js
‘Should return Status Code 200...’ /api/v1/kits/7 - PASSED

‘Response body toBe true...’ /api/v1/kits/7 - PASSED


deleteHandlers.test.js
"Response code Should return 200..."  /api/v1/kits/9 - PASSED

"Status code should be 201..." /api/v1/kits - PASSED

"Boolean response for DELETE method on"  /api/v1/kits/8 - PASSED



Code Style
The following style conventions are followed in the code:
- Proper format in REST data resource representation
- Using nouns, where possible, to represent resources
- camelCase being used to name classes, variables, interfaces, and functions
- Using "const" for variables that will be permanent
- Using "let" for variables that will possibly need to be changed
- Async/await for needed asychronous operations
- Correct use of global(outisde,used most anywhere) and local(inside function) variables
- Simple and concise messages speaking of actions taken in correct tense. API URLs should focus on the resource or action being performed.

