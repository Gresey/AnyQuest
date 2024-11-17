# AnyQuest - Dockerized Q&A Web App

**AnyQuest** is a powerful Q&A web app designed to answer a wide range of questions, from simple facts to complex inquiries. Built using ReactJS and powered by the Gemini API, AnyQuest offers a user-friendly interface capable of handling both general and specific queries. The app is containerized with Docker, ensuring seamless deployment and scalability.




## Prerequisites

Before you begin, make sure you have the following installed:

- **Docker**: You need Docker installed on your machine to build and run the container.
  - [Docker Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Hub Account** (if you wish to pull the image from Docker Hub)


---

## Running the App Locally with Docker

If you have Docker installed and want to run **AnyQuest** locally, follow these steps:

### 1. Clone this repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/gresey/anyquest.git
cd anyquest
```

### 2. Build the Docker Image
In the root of the project directory, build the Docker image using the following command:
```bash
docker build -t anyquest .
```

### 3. Run the Docker Container
Once the image is built, run the container with the following command:
```bash
docker run -d -p 8080:80 anyquest
```

This will start the app, and you can access it by navigating to `http://localhost:8080` in your web browser.

---

## Running the App from Docker Hub

If you prefer to pull the pre-built image from Docker Hub, you can run **AnyQuest** without having to build it locally.

### 1. Pull the Image from Docker Hub
To pull the image, run:
```bash
docker pull gresey/anyquest:latest
```

### 2. Run the Docker Container
After pulling the image, run the following command to start the app:
```bash
docker run -d -p 8080:80 gresey/anyquest:latest
```

Now, navigate to `http://localhost:8080` in your web browser to view the app.

---



