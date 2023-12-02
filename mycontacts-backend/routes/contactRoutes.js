const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");
// This logic moved to contactController.js
    // router.route("/").get((req, res) => {
    //     res.status(200).json({message: "Get all contacts"});
    // });
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router; 