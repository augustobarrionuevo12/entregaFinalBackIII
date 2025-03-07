import User from '../models/User.js';

class UserRepository {
  async create(userData) {
    return await User.create(userData);
  }

  async findAll() {
    return await User.find();
  }
}

export default new UserRepository();