# Coffee Shop Finder App

## Overview

This project is a Coffee Shop Finder App built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search for, explore, and interact with coffee shops, leveraging efficient APIs for data handling and ensuring secure deployment on AWS.

## Assignment Overview

The assignment tasks include:

1. **API Development**: Constructing RESTful APIs for managing and retrieving coffee shop data, including product listings.
   
2. **Frontend Integration**: Using React.js to build a dynamic and visually appealing frontend that interacts with the backend APIs.
   
3. **Third-Party Services Integration**: Incorporating third-party APIs for features like maps or payment gateways.
   
4. **Deployment**: Configuring and deploying the application on AWS, focusing on scalability, security, and performance.

## Project Structure

### Backend

- **Server**: `server.js` sets up the Express server and connects to MongoDB using Mongoose.
  
- **Routes**: `coffeeShopRoutes.js` defines RESTful routes for CRUD operations on coffee shops.
  
- **Controllers**: `coffeeShopController.js` implements controller functions for handling API requests.
  
- **Models**: `coffeeshop.js` defines the MongoDB schema for CoffeeShop.

### Installation and Setup

1. **Clone Repository**: Clone both frontend and backend repositories from GitHub.

2. **Backend Setup**:
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Install dependencies
   npm install
   
   # Set up environment variables (create a .env file if necessary)
   PORT=5555
   DB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
   
   # Start the server
   npm start

### Deployment

To deploy this application on AWS:

1. **GitHub Actions**: Set up GitHub Actions for CI/CD. Build Docker images for frontend and backend, push them to DockerHub.

2. **AWS Setup**:
   - Configure a self-hosted runner for both frontend and backend on AWS.
   - Pull Docker images from DockerHub using the self-hosted runner.
   
3. **EC2 Deployment**:
   - Deploy backend first by running Docker container on EC2.
   - Repeat similar steps for frontend deployment.

## Access URLs

- **Backend API**: [http://44.202.166.106:5555/](http://44.202.166.106:5555/)
- **Frontend Application**: [http://44.202.166.106:5173/](http://44.202.166.106:5173/)

## Bonus (Advanced Search Capabilities)
Implement advanced search filters and sorting options using Elasticsearch or a similar technology.

## Contact
For any questions or feedback, please contact: akshitmittal20@gmail.com
[Akshit Mittal](mailto:akshitmittal20@gmail.com)



## Deployment Process

### GitHub Actions and DockerHub

1. **Build Docker Images**:
   - Set up GitHub Actions to build Docker images for both frontend and backend repositories.
   - Push these images to DockerHub repositories.

### AWS Deployment

2. **AWS Setup**:
   - Configure a self-hosted runner on AWS for both frontend and backend.
   - Set up appropriate permissions and security groups.

3. **Backend Deployment**:
   - Pull the backend Docker image from DockerHub using the AWS self-hosted runner.
   - Run the Docker container on an EC2 instance.

4. **Frontend Deployment**:
   - Repeat the above steps for deploying the frontend Docker image to another EC2 instance.

5. **Verification**:
   - Access the deployed application URLs to ensure everything is running correctly.

Congratulations! You have successfully deployed the MERN stack application on AWS EC2.