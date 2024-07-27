# Use the official Golang image as the base image
FROM golang:1.18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# install gcc
RUN apk add --no-cache build-base

# Download all dependencies
RUN go mod download

# Copy the source code into the container
COPY . .

# Build the application
RUN CGO_ENABLED=1 GOOS=linux go build -a -installsuffix cgo -o main .

# Use a smaller base image for the final stage
FROM alpine:latest  

# Set the working directory inside the container
WORKDIR /app/

RUN mkdir ./data

# Copy the binary from the build stage
COPY --from=build /app/.env .
COPY --from=build /app/main .

# Command to run the executable
CMD ["./main"]