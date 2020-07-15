const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/books", (res, req) => {
    db.Book.find({}).then(data )
})

router.post("/api/books")


router.post("/api/books/:id")
