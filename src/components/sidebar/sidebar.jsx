import React, { useContext, useState } from 'react'
import './sidebar.css';
import { Context } from '../../context/context';
const Sidebar = () => {
 const [extended,setExtended]=useState(false);
 const {onSent,previousprompt,setRecentPrompt,newChat}=useContext(Context);
 
 const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
 }
 
const setExtendedstate=()=>{
    if(extended){
        setExtended(false);
    }else{
        setExtended(true);
    }
}
    return (
        <div className='sidebar'>
            <div className='top'>
                <div className='menu'>
                    <img src='./src/assets/menu.png' onClick={setExtendedstate}/>
                </div>
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src='./src/assets/add.png' />
                    {extended?<p>New chat</p>:null}
                </div>
                {extended?
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {previousprompt.map((item,index)=>{
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src='./src/assets/message.png' />
                           <p>{item.slice(0,18)}...</p>
    
                        </div>
                        )
                    })}
                   
                </div>:null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src='./src/assets/question.png' />
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src='./src/assets/history.png' />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src='./src/assets/setting.png' />
                    {extended?<p>Settings</p>:null}
                </div>

            </div>



        </div>
    )
}

export default Sidebar;
