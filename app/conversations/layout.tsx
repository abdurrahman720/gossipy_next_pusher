import Sidebar from "../Components/Sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";


const ConversationsLayoutComponent =async ({ children }: { children: React.ReactNode }) => {
    const conversations = getConversations();
    return ( 
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
     );
}
 
export default ConversationsLayoutComponent;