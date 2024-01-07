import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
    const params = useParams();

    const conversationId = useMemo(() => {
        if (!params?.conversationId) {
            return '';
        }

        return params.conversationId as string;
    }, [params?.conversationId])
    
    const isOpen = useMemo(() => !!conversationId, [conversationId]);

    return useMemo(() => ({
        isOpen, conversationId
    }),[isOpen, conversationId])
}

export default useConversation;

// we need to get the conversationId from params to get to know if there is any conversation with this user 
// isOpen indicates that the particular conversation is open right now

