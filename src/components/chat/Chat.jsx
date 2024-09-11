import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: "smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      {/* Top */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane</span>
            <p>Yo whats up my fools.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* Center */}
      <div className="center">
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img
              src="https://images.unsplash.com/photo-1574788175339-a53dcba9a9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw0fHxwYXJ0cyUyMGN1dHRpbmd8ZW58MHx8fHwxNzI0NzA4OTEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png own" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              eveniet eligendi debitis labore beatae rem vel esse accusamus
              distinctio perspiciatis, adipisci ratione a facilis non incidunt
              voluptates odio eos quos?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* Bottom */}
      <div className="bottom">
        <div className="icons">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Type a message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
