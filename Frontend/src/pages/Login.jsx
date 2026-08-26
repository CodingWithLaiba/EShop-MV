import Login from "../components/Login/Login.jsx";
const LoginPage = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useSelector((state) => state.user);

//   useEffect(() => {
//     if(isAuthenticated === true){
//       navigate("/");
//     }
//   }, [])
  
  return (
    <div className="w-full h-screen bg-gray-50">
        <Login />
    </div>
  )
}

export default LoginPage;