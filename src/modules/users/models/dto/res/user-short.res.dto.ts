import { PickType } from '@nestjs/swagger';

import { UserBaseResDto } from './user-base.res.dto';

export class UserShortResDto extends PickType(UserBaseResDto, [
  'name',
  'email',
  'role',
  'id',
]) {}
