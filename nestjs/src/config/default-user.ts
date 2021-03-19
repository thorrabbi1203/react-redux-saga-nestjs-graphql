import { getRepository } from 'typeorm';
import { DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD } from './constants';
import { User } from 'src/user/entities';

export const setDefaultUser = async () => {
  const userRepository = getRepository<User>(User);

  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('email = :email', {
      email: DEFAULT_USER_EMAIL,
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      name: 'nguyen',
      lastName: 'phuoc thao',
      email: DEFAULT_USER_EMAIL,
      password: DEFAULT_USER_PASSWORD,
      roles: ['ADMIN'],
    });

    return await userRepository.save(adminUser);
  }
};
