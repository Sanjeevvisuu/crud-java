# Use a specific, stable version of OpenJDK with Alpine
FROM openjdk:17-alpine as build

# Install Maven (Maven can also be included in the image, but it's easier to use the OpenJDK + Maven setup)
RUN apk add --no-cache maven

# Set the working directory
WORKDIR /app

# Copy only the pom.xml (so Maven dependencies can be cached)
COPY pom.xml .

# Download Maven dependencies (cache them)
RUN mvn dependency:go-offline

# Copy the rest of the application files
COPY src /app/src

# Build the application
RUN mvn clean install

# Expose the port that your Spring Boot app runs on
EXPOSE 8080

# Define the command to run the Spring Boot application
CMD ["java", "-jar", "target/springboot-backend-0.0.1-SNAPSHOT.jar"]
