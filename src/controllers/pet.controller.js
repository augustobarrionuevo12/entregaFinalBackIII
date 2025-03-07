import PetService from '../services/pet.service.js';

export const getAllPets = async (req, res) => {
  try {
    const pets = await PetService.getAllPets();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const pet = await PetService.createPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};