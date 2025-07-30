import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getUsersWithPost = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                posts: true,
            },
        });

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({message: error})
    }
};