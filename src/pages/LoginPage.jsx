import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("1234");
  const { isAuthentiacted, login, user } = useAuth();


  const handleForm = (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthentiacted) navigate("/", { replace: true });
  }, [isAuthentiacted, navigate]);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-12">
      <h1 className="font-bold text-2xl text-white mb-6">Login form</h1>
      <form
        onSubmit={handleForm}
        className="w-full md:w-2/3 lg:w-2/5 xl:w-2/5 px-5 py-10 rounded-xl border-slate-500 border-2 flex-col flex justify-center items-center gap-y-6 bg-slate-800"
      >
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-slate-100"
          >
            Email :
          </label>
          <input
            type="text"
            id="email"
            placeholder="Please enter your email ..."
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-4 text-slate-700 font-semibold outline-none border-none rounded-lg bg-slate-300"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="password"
            className="text-lg font-semibold text-slate-100"
          >
            Password :
          </label>
          <input
            type="text"
            id="password"
            placeholder="Please enter your password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="w-full py-2 px-4 text-slate-700 font-semibold outline-none border-none rounded-lg bg-slate-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-600 border border-slate-400 py-2 mt-6 font-bold text-slate-100 text-lg hover:bg-slate-700 transition-all duration-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
