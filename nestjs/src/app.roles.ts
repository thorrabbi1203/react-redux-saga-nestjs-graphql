import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  AUTHOR = 'AUTHOR',
  ADMIN = 'ADMIN',
}

export enum AppResource {
  USER = 'USER',
  POST = 'POST',
  HERO = 'HERO',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  // AUTHOR ROLES
  .grant(AppRoles.AUTHOR)
  .updateOwn([AppResource.USER])
  .deleteOwn([AppResource.USER])
  .createOwn([AppResource.POST])
  .updateOwn([AppResource.POST])
  .deleteOwn([AppResource.POST])
  // ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.AUTHOR)
  .createAny([AppResource.POST, AppResource.USER, AppResource.HERO])
  .updateAny([AppResource.POST, AppResource.USER, AppResource.HERO])
  .deleteAny([AppResource.POST, AppResource.USER, AppResource.HERO]);
