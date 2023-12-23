// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

import { tutorials, Sequelize } from "../models";
const Tutorial = tutorials;
const Op = Sequelize.Op;

// Create and Save a new Tutorial
export function create(req, res) {

}

// Retrieve all Tutorials from the database.
export function findAll(req, res) {

}

// Find a single Tutorial with an id
export function findOne(req, res) {

}

// Update a Tutorial by the id in the request
export function update(req, res) {

}

// Delete a Tutorial with the specified id in the request
const _delete = (req, res) => {
};
export { _delete as delete };

// Delete all Tutorials from the database.
export function deleteAll(req, res) {

}

// Find all published Tutorials
export function findAllPublished(req, res) {

}