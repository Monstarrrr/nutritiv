import React, { useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client";
import nutritivApi from '../Api/nutritivApi';
import { useSelector } from 'react-redux';

const refreshToken = localStorage.getItem('refresh_token');
// const refreshToken = "ThisIsSomeIncorrectToken"
const socket = io(
  "http://localhost:4000",
  {
    query: { refreshToken },
    // transports: ['websocket']
  },
);

export const Chat = () => {
  
  const userId = useSelector(state => state.user.id)
  
  const [socketError, setSocketError] = useState(false)

  // CHATS INFO
  const [chatsInfos, setChatsInfo] = useState([])
  const [activeChatId, setActiveChatId] = useState(null)
  
  // CHATS CONTENT
  const [chat, setChat] = useState(null)
  const [messageToBeSent, setMessageToBeSent] = useState("")
  const [tempMessageId, setTempMessageId] = useState(0)

  const chatboxBottomRef = useRef();
  const chatRef = useRef(chat);
  
  // SOCKET
  useEffect(() => {
    chatRef.current = chat 
  });
  // SOCKET - MESSAGE
  useEffect(() => {
    socket.on("connect_error", err => {
      console.log(err); // true
      setSocketError(true)
    });
    socket.on("error", err => {
      console.log(err); // true
      setSocketError(true)
    });
    socket.on("message", ({id, text, sender}) => {
      console.log('# socket io res :', id, text, sender)
      !chatRef.current.messages.some(message => message.id === id) && (
        setChat({
          ...chatRef.current,
          "messages": [
            ...chatRef.current.messages,
            {
              id,
              text,
              sender,
            }
          ]
        })
      )
    })
    return () => {
      socket.disconnect()
    }
  }, []);
  
  // GET CHATS INFO
  useEffect(() => {
    let fetchApi = async () => {
      try {
        const { data } = await nutritivApi.get(
          `/chats/`
        )
        console.log('# get /chats/ :', data)
        setChatsInfo(data)
        setActiveChatId(data[0]._id)
        chatboxBottomRef.current?.scrollIntoView()
      } catch(err) {
        console.error(
          'get /chats/:', err
        )
      }
    }
    fetchApi();
  }, []);
  
  // GET CHAT BY ID
  useEffect(() => {
    let fetchApi = async () => {
      try {
        const { data } = await nutritivApi.get(
          `/chats/single/${activeChatId}/?messagesQty=${10}`
        )
        setChat(data)
        console.log('# /chats/single/ res :', data)
      } catch(err) {
        console.error('/chats/single/:', err)
      }
    }
    if(activeChatId){
      fetchApi();
    }
  }, [activeChatId]);
  
  // AUTO SCROLL
  useEffect(() => {
    chatboxBottomRef.current?.scrollIntoView()
  }, [chat]);
  
  // ACTIVE CHAT
  const handleActiveChat = (e) => {
    setActiveChatId(e.target.id)
  }

  // SEND MESSAGE
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    setTempMessageId(tempMessageId + 1)
    setChat({
      ...chat,
      "messages": [
        ...chat.messages,
        {
          "id": tempMessageId,
          "text": messageToBeSent,
          "sender": userId,
          "loading": true
        }
      ]
    })
    setMessageToBeSent("")
        
    try {
      const { data } = await nutritivApi.post(
        `/chats/message/${activeChatId}`,
        {
          text: messageToBeSent
        }
      )
      const { text, id } = data;
      const room = activeChatId;
      socket.emit('message', {text, id, refreshToken, room})
      setChat({
        ...chat,
        "messages": [
          ...chat.messages,
          {...data, loading: false}
        ]
      })
      console.log('# /chats/message/ :', data)
    } catch(err) {
      console.error('/chats/message/:', err)
    }
  }
  const handleMessageToBeSent = (e) => {
    setMessageToBeSent(e.target.value)
  }

  const handleLoadMoreMessages = async () => {
    try {
      const { data } = await nutritivApi.get(
        `/chats/messages/${chat._id}/?stack=${2}&quantity=${10}`,
      )
      console.log('# get more messages /chats/messages/ :', data)
    } catch(err) {
      console.error(':', err)
    }
  }
  
  return (
    <div>
      {
        socketError && <h2>AUTHENTICATION ERROR</h2>
      } 
      {
        chatsInfos.map(chatInfo => (
          <React.Fragment key={chatInfo._id}>
            <br />
            <button
              id={chatInfo._id} 
              onClick={handleActiveChat}
              style={chatInfo._id === activeChatId ? {color: "grey"} : undefined}
            >
              {chatInfo._id}
            </button>
            {
              chatInfo._id === activeChatId && (
                <span role="img" aria-label='active' >
                  ◀
                </span>
              )
            }
          </React.Fragment>
        ))
      }
      <br />
      <br />
      
      {/* CHATBOX */}
      <div style={{
        background: "lightblue",
        display: "flex",
        flexDirection: "column", 
        height: '300px', 
        overflow: 'auto'
      }}>
        {chat && (
          <>
            {chat.messages.length > 0 ? (
                <>
                  <button onClick={handleLoadMoreMessages}>
                    Load more messages...
                  </button>
                  {chat.messages.map(message => (
                    message.sender === userId ? (
                      <p 
                        key={message.id} 
                        style={{
                          alignSelf: "end",
                          textAlign: "right", 
                          width: "100%"
                        }}
                      >
                        <span style={{fontWeight: "bold"}}>
                          You:
                        </span>
                        <br />
                        {message.loading ? (
                          <span role="status" aria-label='sending'>
                            🕘
                          </span>
                        ) : (
                          <span role="status" aria-label='sent'>
                            ✔️
                          </span>
                        )}
                        {message.text}
                      </p>
                    ) : (
                      <p key={message.id} style={{width: "100%"}}>
                        <span style={{fontWeight: "bold", textAlign: "end"}}>
                          {message.sender}:
                        </span>
                        <br />
                        {message.text}
                      </p>
                    )
                  ))}
                </>
            ) : (
              <p>
                No messages in {chat._id}.
              </p>
            )}
            <div ref={chatboxBottomRef} />
          </>
        )}
        {/* SUBMIT */}
      </div>
      <form 
        onSubmit={handleSendMessage} 
        style={{display: 'flex'}}
      >
        <input 
          onChange={handleMessageToBeSent} 
          style={{flexGrow: 1}}
          type="text" 
          value={messageToBeSent} 
        />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}