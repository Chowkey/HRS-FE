import React, { useState } from 'react';
import EmptyState from '../components/Conversations/EmptyState';
import Header from '../components/Conversations/Header';
import PromptForm from '../components/Conversations/PromptForm';
import PromptList from '../components/Sidebar/Prompt/PromptList';
import DesktopSidebar from '../components/Sidebar/DesktopSidebar';
import MobileSidebar from '../components/Sidebar/MobileSidebar';
import ConversationList from '../components/Conversations/Main/ConversationList';

const Chat = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const [isNewChat, setIsNewChat] = useState(true);

   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
   const toggleNewChat = () => setIsNewChat(!isNewChat);

   return (
      <div className='h-screen flex'>
         {/* Desktop Sidebar for lg screens */}
         <div className='hidden lg:block'>
            <DesktopSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onNew={toggleNewChat}>
               <PromptList />
            </DesktopSidebar>
         </div>

         {/* Mobile Sidebar for sm screens */}
         <div className='lg:hidden'>
            <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onNew={toggleNewChat}>
               <PromptList />
            </MobileSidebar>
         </div>

         <div className={`h-full flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'lg:pl-0'}`}>
            <div className='h-full flex flex-col'>
               <Header onOpen={toggleSidebar} />
               {isNewChat ?
                  <ConversationList /> : <EmptyState />}
               <PromptForm />
            </div>
         </div>
      </div>
   );
};

export default Chat;