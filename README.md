# Ware Is My Resume? #CloudGuruChallenge
As participation in this cloud challenge, I will be deploying my resume on Azure.

## Front-end
The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

## Back-end
The back-end is an HTTP triggered Azure Functions with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.

## Testing
TBD

## CI/CD
TBD
