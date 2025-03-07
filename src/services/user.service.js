import UserRepository from '../dao/repositories/user.repository.js';

class UserService {
  async createUser(userData) {
    return await UserRepository.create(userData);
  }
  async getAllUsers() {
    return await UserRepository.findAll();
  }
}
export default new UserService();