import { Injectable } from '@nestjs/common';

@Injectable()
export class MechanicsService {
  public async create() {
    return 'This action adds a new user';
  }

  public async update() {
    return 'This action updates a user';
  }

  public async get() {
    return 'This action returns a user';
  }

  public async getAll() {
    return 'This action returns all users';
  }

  public async delete() {
    return 'This action removes a user';
  }

  public async getMechanics() {
    return 'This action returns all mechanics';
  }
}
