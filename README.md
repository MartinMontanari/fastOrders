# fastOrders
An electron APP built to made product orders

# Project dependencies:
```
1. Hace docker installed in your computer
2. Have docker-compose installed in your computer
3. Have installed npm and nodejs (V10 at least) in your computer
```

## How to install and use it

1. The first step that you will have to do is build the docker containers to mount the db.
2. In the root path `/fastOrders` you need move to `/fastOrders/docker` folder and just need run `docker-compose up -d` command so that the orchestrator build the docker containers wich mount app db.
3. Once db is up and listening on the `:3000` port, you can import the `orders.sql` script to create _orders_ table and have some seeded data to test the app. You could do this using adminer, enter into `:8080` port in your web browser and login with: `host: mysql` / `user: root` / `password: secret`.
4. To run the app correctly is necessary install all project dependencies, you should only need running the `npm install` command in your terminal on the base path `/fastOrders`.
5. Tu execute the app you should run `npm start` command in your terminal on the base path `/fastOrders`.
Bye!
