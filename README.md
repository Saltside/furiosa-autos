# furiosa-autos

Welcome to the Saltside Web code challenge! Please follow the instructions below in detail and submit your project when you're satisfied with the results.

## Project

The project consists of a simple [express](http://expressjs.com/en/index.html) application with [jade](http://jade-lang.com/) templating. It is currently incomplete and your tasks will consist of completing it and bugfixing it.

### Development
First, run `npm i` to install dependencies. Start the server by running `npm start` and start working! The server will restart automatically when you update code that requires it to do so.

The server runs on `http://localhost:3000`.

### Styling
You do not need to do any styling to solve the tasks, but if you do so - change `public/style.less`.

### Fake API
A fake, [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based, API is provided in through `lib/api`.
__This file may not be changed in your solution!__

The fake api contains these functions. All of them are promise-based and returns a promise that will resolve with the data listed below.

`fetchModels()` - an array of strings representing car models.

Example: `['Saab', 'Volvo']`

`fetchServices()` - an array of objects, each representing a service that the company performs.

Example:
```
{
	job: 'Wheel replacement',
	cost: '120 caps',
	type: 'repair'
}
```

`fetchCustomerReviews()` - an array of objects, each representing a customer review. 

Example:
```
{
	content: 'There is no better workshop in the wastelands!',
	source: 'Bullet Farm'
}
```

`fetchCorporateReviews()` - an array of objects, each representing a corporate review.

Example:
```
{
	content: 'There is no better workshop in the wastelands!',
	source: 'Bullet Farm'
}
```

## Tasks

__All of the tasks must be solved without any client-side JS and without changing `api.js`__

[Bootstrap 3](http://getbootstrap.com/css/) is available in the project and you may use it to style any components, but visuals are secondary to functionality. We are looking for working software, not a good looking UI.

### What we're looking for
When we evaluate your solution we are primarily looking for the following qualities:
* Functionality - A working solution.
* Code cleanliness - An understandable solution.

We are not looking for:
* A visually appealing solution - styling doesn't matter.

### Task 1 - Implement the `/models` endpoint
* Implement the models endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchModels()` function. Render a list of models.
* Make alphabetic sorting possible (ascending, descending, none).

### Task 2 - Implement the `/services` endpoint
* Implement the `services` endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchServices()` function. Render a list of provided services.
* Make the services filterable by `type`. Add some sort of UI component that lets the user filter on the three types `repair`, `maintenance`, and `cosmetic`.

### Task 3 - Bugfix the `/reviews` endpoint
* Bugfix the `reviews` endpoint. It should render all Corporate and Customer reviews. Order is not important.
* Add a UI component that lets the user search for reviews. The search shall look for matches in both `content` and `source`.

## Submitting
Submit a zip/rar file with your project to our recruitment contact.
