# eCommerce app working with API

User is able to fetch data from API, filter the products (search), add them to shopping cart and skim through pages.

__Implemented features:__

* On start application displays first page of products
* Pagination is implemented under main section.
* Overview of the product - containing picture, title, id, button for adding to the cart with quantity input.
* Clicking on the product shows the modal with details. Detailed product information is displayed in the foreground, what is underneath is covered with a semi-transparent filling.
* Details of the product contain - picture, title, id, description, brand, button for adding to the cart with quantity input.
* The application has a filter (search functionality). Entering the value in the filter returns the results from the API for e.g. query `/products?q=:query`.
* User can add products to cart by clicking button. 
* Products should be placed in the shopping cart are displayed with quantity in the top right corner of the screen. 
* Clicking on the cart button links to cart route with basket details.

__Technology used:__

* Vue is the main JS framework used to create UI
* Vuetify is used as an UI framework, with it's material design features
* Vuex keeps track of application's state
* Vue router handles routing 


## Notes

To start the app, type command below in main directory and in /client

```
npm start
```
The API was provided by Staples company.