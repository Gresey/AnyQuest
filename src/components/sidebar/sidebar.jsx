import React, { useContext, useState } from 'react'
import './sidebar.css';
import { Context } from '../../context/context';
import ADD from '../../assets/add.png'
import Menu from '../../assets/menu.png';
import Message from '../../assets/message.png';
import History from '../../assets/history.png';
import Settings from '../../assets/setting.png';
import Question from '../../assets/question.png';


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
                    <img src={Menu} onClick={setExtendedstate}/>
                </div>
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src={ADD} />
                    {extended?<p>New chat</p>:null}
                </div>
                {extended?
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {previousprompt.map((item,index)=>{
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src={Message} />
                           <p>{item.slice(0,18)}...</p>
    
                        </div>
                        )
                    })}
                   
                </div>:null}
            </div>
            <div className='bottom'>
                {/* <div className='bottom-item recent-entry'>
                    <img src={Question} />
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={History} />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={Settings} />
                    {extended?<p>Settings</p>:null}
                </div> */}

            </div>



        </div>
    )
}

export default Sidebar;
