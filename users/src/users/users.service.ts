import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async resetProblems() {
    const count = await this.prisma.user.count({
      where: { problems: true },
    });
    await this.prisma.user.updateMany({
      where: { problems: true },
      data: { problems: false },
    });
    return { count };
  }
}
