import { useState } from "react";
import { toast } from "react-toastify"; // , ToastContainer
import "react-toastify/dist/ReactToastify.css";

import "./Login.scss";

const Login = () => {
  const [avatar, setAvatar] = useState({ file: null, url: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    toast.warn("Hello");
  };

  const handleAvatar = (e) => {
    // console.log(e.target.files[0]);

    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      {/*  */}
      <div className="separator"></div>
      {/*  */}
      <div className="item">
        <h2>Create an account,</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            <p>Upload an image</p>
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
