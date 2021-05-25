# Ware Is My Resume? #CloudGuruChallenge
As participation in this cloud challenge, I will be deploying my resume on Azure. For a more visual step-by step instruction, I followed the [ACG Azure Project Walkthrough](https://www.youtube.com/watch?v=ieYrBWmkfno&t=1155s) as a guide to assist me in completing this project.

## Front-end
The front-end consist of a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter, [main.js](main.js). The visitor counter data fetched via an API call to an Azure Function.

## Back-end
The back-end consist of an HTTP triggered Azure Function with Cosmos DB input and output binding. The Function consist is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.

Note: Make sure that [.NET Core 3.1 SDK](https://dotnet.microsoft.com/download/dotnet/3.1) and [Azure Core Functions](https://github.com/Azure/azure-functions-core-tools#installing) are installed before you do this.

## Testing
TBD

## CI/CD
TBD
