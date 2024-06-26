## Description
v0.1

Author: Sumeet Singh

Dated: 26/06/2024

Website for learning project to construct a website for self authored game developer 
named AgniSamooh to host video games from author Sumeet Singh and the community as open source.
Will include multiplayer backend services for related games such as BubbleUp.


## Software components
 * Frontend - React
 * Backend - AWS Lambda
 * Database - RDS
 * Hosting - AWS Route 53 + AWS Certificate Manager + AWS Cloudfront + AWS S3 (region: us-east-1)
 * APIs; 
```bash
DELETE /delete-account // Listens for DeleteAccountButton.js
DELETE /logout // Listens for LogoutButton.js 
GET /get-account-details // Listens for AccountForm.js
POST /https://formspree.io // Listens for ContactUsForm.js
POST /login // Listens for LoginForm.js
POST /signup // Listens for SignUpForm.js
POST /update-account // Listens for AccountForm.js
PUT /join-mailing-list // Listens for JoinMailingList.js
```


## Building, Testing and Deploying
* Locally (Dev) - Build a backend SQL server and use node.js to run backend Server.js
* Online (Prod) - Push this repo to Github and Github Actions CI/CD will build/test/publish to S3 bucket