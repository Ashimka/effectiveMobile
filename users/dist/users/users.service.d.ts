import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    resetProblems(): Promise<{
        count: number;
    }>;
}
