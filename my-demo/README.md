### `running server`

In order to fetch the data from your db.json file run:

json-server --watch db.json --port 8000

NOTE:You need to specify the port number in order to get the correct data of your db.json or else without the port number it will run to the default port number which is 3000.

## Instructions

For this project, i’ll be building out a restaurant React application that displays a
list of available food on the menu page , among other features. 

## Setup

After creating the app my-demo:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8000`.
3. In a new terminal, run `npm start`. This will run your React app on port `3000`.

Make sure to open [http://localhost:8000/foods](http://localhost:8000/foods) in
the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8000

## Core Deliverables

As a user, I should be able to:

- Move from one page to another through client-side routing.
- Click the 'ORDER NOW'buttonon the "Home.js"page and be taken to the "Menu.js"page.
- See profiles of all foods rendered in `Menu.js` page.
- Be able to send a message on the form in the "Contact.js" page.
### Endpoints for Core Deliverables

#### GET /foods

Example Response:

```json

[
    {
    "id":1,
    "name": "Pea Soup",
    "price": "$32",
    "image": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "button": "Order Now"
    },
    {
        "id":2,
        "name": "Chocolate Cake",
        "price": "$35",
        "image": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "button": "Order Now"
    },
]
