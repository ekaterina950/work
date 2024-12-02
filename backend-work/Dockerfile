FROM maven:3.8.4-openjdk-17 AS builder

WORKDIR /app

COPY . /app

RUN mvn compile && mvn package

FROM openjdk:17-ea-30-jdk-slim

WORKDIR /app

COPY --from=builder /app/target/app.jar app.jar

EXPOSE 8000

CMD ["java", "-jar", "app.jar"]