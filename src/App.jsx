import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams} from 'react-router-dom';

const Todo = () => {
  let isLogin=false;
  const navigate = useNavigate();
    function loginOut(){
        if(!isLogin) {
        navigate('/login')
    }
    }
  return (<><p>這是 Todo 頁面</p> <button onClick={loginOut}>登出</button></>)
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function Post(){
  return (<>
  <h1>Post頁面</h1>
  <Outlet /></>
    )
  }

function PostId(){
  let params=useParams();
  return(<p>Post ID: {params.postId}</p>)
  }  

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<p>這是首頁</p>} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route path="post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
      
    </div>
  );
}

export default App;
