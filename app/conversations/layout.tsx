import Sidebar from "../Components/Sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";


const ConversationsLayout =async ({ children }: { children: React.ReactNode }) => {
    const conversations = await getConversations();
    return ( 
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
     );
}
 
export default ConversationsLayout;

