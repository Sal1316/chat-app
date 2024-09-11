import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ex
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1485947323568-b12a3f352094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw5fHxwYXJ0cyUyMGN1dHRpbmd8ZW58MHx8fHwxNzI0NzA4OTEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="icon" src="./download.png" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1485947323568-b12a3f352094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw5fHxwYXJ0cyUyMGN1dHRpbmd8ZW58MHx8fHwxNzI0NzA4OTEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="icon" src="./download.png" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1485947323568-b12a3f352094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw5fHxwYXJ0cyUyMGN1dHRpbmd8ZW58MHx8fHwxNzI0NzA4OTEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="icon" src="./download.png" alt="" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1485947323568-b12a3f352094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw5fHxwYXJ0cyUyMGN1dHRpbmd8ZW58MHx8fHwxNzI0NzA4OTEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="icon" src="./download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
