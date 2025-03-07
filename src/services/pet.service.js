import PetRepository from '../dao/repositories/pet.repository.js';

class PetService {
  async createPet(petData) {
    return await PetRepository.create(petData);
  }
  async getAllPets() {
    return await PetRepository.findAll();
  }
}
export default new PetService();