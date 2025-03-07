import express from 'express';
import { getAllUsers, createUser } from '../controllers/user.controller.js';
import { getAllPets, createPet } from '../controllers/pet.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/pets', getAllPets);
router.post('/pets', createPet);

export default router;