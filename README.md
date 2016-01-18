# furiosa-autos

Welcome to the Saltside Web code challenge! Please read and follow the instructions below in detail and submit your project when you're satisfied with the results.

## Project

The project consists of a simple [express](http://expressjs.com/en/index.html) application with [jade](http://jade-lang.com/) templating. It is currently incomplete and your tasks will consist of completing it, bugfixing it, and applying some basic responsive styling to it.

### Development
First, run `npm i` to install dependencies. Start the server by running `npm start` and start working! The server will restart automatically when you update code that requires it to do so.

The server runs on `http://localhost:3000`.

### Styling
To add your own styling - change `public/style.less`.

### Fake API
A fake, [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based, API is provided in through `lib/api`.
__This file may not be changed in your solution!__

The fake api contains the following functions. All of them are promise-based and returns a promise that will resolve with the data listed below.

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

[Bootstrap 3](http://getbootstrap.com/css/) is available in the project and you may use it to style any components.

Keep in mind - __your solution must be accessible from the provided UI.__ If you add endpoints, also add ui controls for accessing them in the application.

### What we're looking for
When we evaluate your solution we are primarily looking for the following qualities:
* Functionality - A working solution.
* Code cleanliness and quality - An understandable solution.
* Simplicity - Keep it simple.

We are not looking for:
* A visually stunning solution - Try to use the styles available in bootstrap to solve the tasks.
* Plans for the far future - Solve the tasks at hand rather than preparing the application for 10k+ rpm.

### Task 1 - Implement the `/models` endpoint
* Implement the models endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchModels()` function. Render a list of models.
* Make alphabetic sorting possible (ascending, descending, none) by adding a UI component.

### Task 2 - Implement the `/services` endpoint
* Implement the `services` endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchServices()` function. Render a list of provided services.
* Make the services filterable by `type`. Add some sort of UI component that lets the user filter on the three types `repair`, `maintenance`, and `cosmetic`.

### Task 3 - Bugfix the `/reviews` endpoint
* Bugfix the `reviews` endpoint. It should render all Corporate and Customer reviews. Order is not important.
* Add a UI component that lets the user search for reviews. The search shall look for matches in both `content` and `source`.

### Task 4 - Make the application responsive
* Make the application viewable and usable on mobile devices as well as desktop devices.

Feel free to use bootstrap to solve this task, it is included by default. Assume a minimum device width of 320px.

You may decide yourself how to style the content on each page, the criteria for completing this task is that the content is viewable, and usable, on a mobile device.

## Submitting
Submit a zip/rar file with your project to our recruitment contact.
