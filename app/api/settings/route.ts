import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function POST(request: Request) {
    try { 
        const currentUser = await getCurrentUser();
        const { name, image } = await request.json();
        
        if (!currentUser?.id) {
            return new NextResponse('UnAuthorized',{status:401})
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
               name,image
            }
        })

        return NextResponse.json(updatedUser);
        

    }
    catch(error:any){
        console.log(error, 'SETTINGS_ERROR');
        return new NextResponse('internal error', { status: 500 });
   }
}