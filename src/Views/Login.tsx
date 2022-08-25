import React, { useState, useContext } from "react";
import logo from "../Image/logo.png";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../storeContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export interface ILogin {
  username: string | null;
  password: string | null;
}
interface Res {
  response: ErrResponse;
}
interface ErrResponse {
  data: string;
  status: number;
}

const Login = (): JSX.Element => {
  const MySwal = withReactContent(Swal);
  const { loggedIn } = useContext(StoreContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<ILogin>({
    username: null,
    password: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(false);

  React.useEffect(() => {
    const userAcception = localStorage.getItem("k-trak-policy");
    setIsPolicyAccepted(userAcception === "true");
  }, []);
  function acceptPolicy() {
    setIsPolicyAccepted(true);
    localStorage.setItem("k-trak-policy", "true");
  }

  const ErrorSwal = (status: number, text: string) => {
    MySwal.fire({
      icon: "error",
      text: text,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "ตกลง",
    });
  };

  const handleUserInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      return;
    } else {
      try {
        setLoading(true);
        //NyanAlert(); // Show Nyan Cat Swal on loading stage
        const authUser = await login(credentials);
        loggedIn(authUser); // set global state
        navigate("/");
      } catch (err) {
        const u = err as Res; // by default, TS cast Promise err type as "unknown"
        if (u.response.status === 0) {
          // if req doesn't reach the server, status error = 022
          setLoading(false);
          ErrorSwal(
            u.response.status,
            "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองใหม่อีกครั้ง :("
          );
        } else {
          setLoading(false);
          ErrorSwal(u.response.status, u.response.data);
        }
      }
    }
  };

  return (
    <div className="h-screen relative bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative h-full flex items-center justify-center text-gray-500">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 p-10">
          <div className="rounded-xl bg-white shadow-xl container max-w-xl m-auto">
            <div className="p-2 pt-10 md:px-6 md:pt-16 md:py-4">
              <div className="flex justify-center items-center flex-col">
                <img
                  src={logo}
                  loading="lazy"
                  className="w-20"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-xl text-center font-GoogleSans text-cyan-900 font-bold xl:text-2xl lg:text-2xl">
                  <b className="font-bold">GEO</b>{" "}
                  <span className="font-bold">TRACKER</span>
                </h2>
              </div>

              <form
                onSubmit={handleLoginFormSubmit}
                autoComplete="on"
                className="px-5 pb-7"
              >
                <label className="font-semibold font-Kanit text-sm text-gray-600 pb-1 block">
                  ชื่อผู้ใช้งาน
                </label>
                <input
                  name="username"
                  onChange={handleUserInput}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Username"
                />
                <label className="font-semibold font-Kanit text-sm text-gray-600 pb-1 block">
                  รหัสผ่าน
                </label>
                <input
                  name="password"
                  onChange={handleUserInput}
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="flex justify-center items-center transition duration-200 bg-[#2F847C] hover:bg-[#054B4A] focus:bg-[#054B4A] focus:shadow-sm focus:ring-4 focus:ring-[#2F847C] focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center "
                >
                  <span className="inline-block font-Kanit mr-2">
                    เข้าสู่ระบบ
                  </span>

                  {!loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isPolicyAccepted ? null : (
        <div className="fixed bottom-0 shadow-md w-full backdrop-blur-sm bg-white/30">
          <div className="p-10 flex justify-center items-center flex-col lg:flex-row">
            <article className="flex flex-col">
              <p className="mb-2">
                เว็บไซต์นี้ใช้คุกกี้ เพื่อมอบประสบการณ์การใช้งานที่ดีให้กับท่าน
                และเพื่อพัฒนาคุณภาพการให้บริการเว็บไซต์ที่ตรงต่อความต้องการของท่านมากยิ่งขึ้น.
              </p>
              <p>
                This Website uses cookies to provide you with the best
                experience and to improve the website services in order to
                better serve your requirements.
              </p>
            </article>
            <div className="px-3">
              <button
                onClick={acceptPolicy}
                className="bg-teal-700 mt-3 hover:bg-teal-800 font-Kanit text-white py-2 px-3 rounded-md"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
