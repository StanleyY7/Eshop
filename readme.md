# Project: Legion (Eshop)

Link https://stanleyy7.github.io/Eshop/

![legionLatest](https://user-images.githubusercontent.com/119549394/219933057-ce25b8a2-764e-4bda-af9b-4050a6eb3f3f.png)

<img width="250" src="https://github.com/StanleyY7/Eshop/actions/workflows/main.yml/badge.svg"/>

## Outline
The main aim of this project was to utilise our existing knowledge of HTML, CSS/SCSS, React and Javascript to create a responsive e-commerce website. 

### Design

Below are 3 different designs/wireframes I created (using canva) for the project, ultimately I went with the Legion website design as it more closely resembled the MVP requirements of the project, I then adapted the design to better meet the MVP requirements further.

![Untitled design (13)](https://user-images.githubusercontent.com/119549394/215723162-8fb69dd3-7967-4bf8-944e-067ea26578be.png)

## MVP

The main requirements for this project were:

-   To have a Home Page
     -   Which contains:
        -   A Grid of products
        -   A Carousel of featured products
        
-   To have a Product Page (with id parameter). Similar to a product page on another site, allows the user to add to cart and select product variants.
        
-   To have all products stored in Firestore:
      -  Which stores the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
-    To clarify, all data is to be stored in Firestore and fetched by the frontend, there is to be no static product data in the react application.

### Bonus Features

- Added Jest Component Tests
- Added Cypress Component Tests

## Summary

I met the above requirements by first creating a website wireframe/design, then I worked on the MVP requirements. More specifically, for the MVP requirements, I made a basic layout of the frontend first, then built the backend, once that was done (i.e. populated with the required data) I then worked on completing each of the MVP requirements by building the relevant components for them. After all of this was completed, I then worked on media queries.

## Tech Stack
- HTML
- CSS/SCSS
- Javascript
- React
- Vite

