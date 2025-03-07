import Pet from '../models/Pet.js';

class PetRepository {
  async create(petData) {
    return await Pet.create(petData);
  }

  async findAll() {
    return await Pet.find();
  }
}

export default new PetRepository();