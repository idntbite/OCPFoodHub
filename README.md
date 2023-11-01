
# OCPFoodHub 🍔

Welcome to OCPFoodHub, a  platform designed to make food reservation easier for employees and automate the ordering procedures within the food industry in the Gentour region (Youssoufia & Bneguerir) (at least for the OCP food providers). This repository encompasses both frontend and backend components, ensuring a holistic and seamless experience for users and service providers.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Features](#features)
- [Future Potential](#future-potential)
- [Estimated Pricing for Deployment](#estimated-pricing-for-deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

OCPFoodHub is designed to bridge the gap between customers and OCP food service providers. Whether you're a customer seeking your next meal or a service provider aiming to expand your reach, OCPFoodHub caters to all.

![OCPFoodHub Shot 1](AppSnips/OCPFoodHub_shot1.png)

![OCPFoodHub Shot 2](AppSnips/OCPFoodHub_shot2.png)

![OCPFoodHub Login](AppSnips/OCPFoodHub_shot3.png)


## Tech Stack

### Backend

- **Language**: Java
- **Framework**: Spring Boot
- **Database**: AWS DynamoDB
- **Authentication**: OAuth2

The backend is initialized through the [`FoodBoltApplication`](https://github.com/idntbite/OCPFoodHub/blob/main/OCPFoodHub/src/main/java/edu/cloudtech/FoodBolt/FoodBoltApplication.java) class, which sets up the Spring Boot application and initiates a `FoodboltLambda`.

### Frontend

- **Library**: React
- **Routing**: React Router DOM
- **Notifications**: React S-Alert

The frontend is set up using React and other associated libraries, as detailed in the [`package.json`](https://github.com/idntbite/OCPFoodHub/blob/main/OCPFoodHub/UserInterface/package.json) file.

## Getting Started

1. **Backend Setup**:
   - Navigate to the backend directory: `cd OCPFoodHub/src/main/java`
   - Install dependencies and run the application.

2. **Frontend Setup**:
   - Navigate to the frontend directory: `cd OCPFoodHub/UserInterface`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`

## Features

- **User Authentication**: Secure signup and login functionality with OAuth2 integration.
- **Dynamic Routing**: Efficiently navigate through the application with React Router.
- **Responsive Alerts**: Get instant feedback on your actions with React S-Alert.
- **Database Integration**: Seamless integration with AWS DynamoDB for storing and retrieving data.

### DynamoDB Implementation

OCPFoodHub utilizes AWS DynamoDB as its primary database solution. DynamoDB is a managed NoSQL database service provided by Amazon Web Services. It offers fast and predictable performance with seamless scalability.

#### Configuration

The connection to AWS DynamoDB is configured in the [`DynamoDBConfig.java`](https://github.com/idntbite/OCPFoodHub/blob/main/OCPFoodHub/src/main/java/edu/cloudtech/FoodBolt/Config/DynamoDBConfig.java) file. This configuration sets up the credentials and region for connecting to DynamoDB and provides beans for `DynamoDBMapper`, which is used for ORM operations with DynamoDB.

#### Data Model

The data model for OCPFoodHub includes tables for users, service providers, meals, and reservations. Each table has its primary key and secondary indexes for efficient querying.

#### Operations

The application performs CRUD (Create, Read, Update, Delete) operations on the DynamoDB tables. These operations are integrated into the backend services and controllers, ensuring seamless data flow between the frontend and the database.

## Future Potential

OCPFoodHub is in its nascent stages, but the potential for growth is immense:

1. **Mobile Application**: Extend the platform with mobile applications for both Android and iOS.
2. **Advanced Search**: Implement AI-driven search capabilities for enhanced user experience.
3. **Recommendation System**: Propose meals and restaurants based on user preferences and history.
4. **Integration with Delivery Services**: Collaborate with delivery services for a comprehensive end-to-end experience.
5. **Localization**: Offer the platform in multiple languages to cater to a global audience.

## Estimated Pricing for Deployment

When considering deployment, it's essential to factor in the costs associated with hosting, database operations, and other services. Here's a rough estimate:

1. **Backend Hosting (AWS EC2)**:
   - t2.micro instance: Free for the first 12 months, then approx. $8.50/month.

2. **Frontend Hosting (AWS S3 + CloudFront)**:
   - S3: $0.023 per GB for storage.
   - CloudFront: $0.085 per GB for data transfer out.

3. **DynamoDB**:
   - Write Capacity Unit (WCU): $1.25 per WCU per month.
   - Read Capacity Unit (RCU): $0.25 per RCU per month.
   - Storage: $0.25 per GB per month.

4. **Other AWS Services**:
   - Lambda, API Gateway, etc., might incur additional costs based on usage.

5. **Domain Name**: Approx. $10/year.

6. **SSL Certificate**: Free with AWS Certificate Manager or other providers.

**Note**: The above prices are approximate, use the [AWS Pricing Calculator](https://calculator.aws/#/) for a more accurate estimate.

## Contributing

We're open to contributions from the community. If you're keen on enhancing features, refining documentation, rectifying bugs, or sponsoring deployment, please send a pull request.

## License

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for more details.
