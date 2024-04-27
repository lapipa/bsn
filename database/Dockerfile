# Use the official MongoDB image as the base image
FROM mongo:latest

# Set environment variables
# MONGO_INITDB_ROOT_USERNAME and MONGO_INITDB_ROOT_PASSWORD are used to create a MongoDB user
# MONGO_INITDB_DATABASE is the name of the database to be created
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password
ENV MONGO_INITDB_DATABASE=mydatabase

# Expose the default MongoDB port
EXPOSE 27017

# The command to run MongoDB
CMD ["mongod"]