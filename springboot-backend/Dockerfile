# Use the official OpenJDK image for the Spring Boot backend
FROM openjdk:17-jdk-slim

# Copy the JAR file from the target directory to the image
COPY target/springboot-backend-0.0.1-SNAPSHOT.jar /app.jar

# Expose the port that the app will run on
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app.jar"]
