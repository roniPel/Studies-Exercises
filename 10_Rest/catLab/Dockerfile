FROM openjdk:17-alpine
COPY ./target/catLab-0.0.1-SNAPSHOT.jar / usr/app/
WORKDIR /usr/app
RUN sh -c 'touch catLab-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java","-jar","catLab-0.0.1-SNAPSHOT.jar"]