import React, { useContext } from 'react'
import './Main.css';
import { Context } from '../../context/context.jsx';
import User from '../../assets/user.png';
import Send from '../../assets/send.png';

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
   
  return (
    <div className='main'>
      <div className='nav'>
        <p>AnyQuest</p>
        <div className='user-img'>
          <img src={User} />

        </div>

      </div>
      <div className='main-container'>
        {!showResult
        ?<>
          <div className="greet">
          <p><span>Hello,Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className='card-container'>
          <div className="card">
            <p>Suggest places to visit</p>


          </div>
          <div className="card">
            <p>Summarize the concept of urban planning</p>

          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>

          </div>
          <div className="card">
            <p>Tell me about interview questions of reactjs</p>

          </div>
        </div>
        </>:
        <div className='result'>
             <div className="result-title">
                   <img src='./src/assets/user.png' alt=''/>
                   <p>{recentPrompt}</p>
             </div>
             <div className='result-data'>
              {loading?
              <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
                </div>

        </div>
          }
        

        <div className="main-bottom">
          <div className="search-box">
            <input  onChange={(e)=>setInput(e.target.value)}
             value={input} type='text' placeholder='Enter Promt here'></input>
            <div>

              
             {input?  <img src={Send} alt=""  onClick={()=>onSent()}/>
          :null}
              </div>
          </div>
          <div className='bottom-text'>
           <p>AnyQuest is not 100% accurate.It can make mistakes.
           </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main;
