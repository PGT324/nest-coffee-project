import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '박건태',
    description: '유저 이름',
  })
  name: string;

  @ApiProperty({
    example: 'qkrrjsxo456@naver.com',
    description: '유저 이메일',
  })
  email: string;

  @ApiProperty({
    example: '01046649194',
    description: '유저 휴대폰',
  })
  phone?: string;
}
