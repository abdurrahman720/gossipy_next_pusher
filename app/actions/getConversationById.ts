import getCurrentUser from "./getCurrentUser";
import prisma from '@/app/libs/prismadb'

const getConversatioById = async(conversationId: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return null
        }
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        })

        return conversation
     }
    catch (err: any) {
        return null
    }
}
 
export default getConversatioById;