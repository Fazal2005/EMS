CREATE TABLE "users" ( 
    "id" SERIAL PRIMARY KEY, 
    "name" text NOT NULL, 
    "email" text NOT NULL UNIQUE, 
    "role" text NOT NULL, 
    "password" varchar NOT NULL);