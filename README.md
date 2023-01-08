# Shipping idea

## Setup

Create .env from .env.example

`cp .env.example .env`

Run docker with

`docker-compose up -d`

Will launch 3 containers:

* `localhost:40000` -  API
	* There is a postman collection for api doc
* `localhost:40001` Postgres
* `localhost:40002` Frontend
