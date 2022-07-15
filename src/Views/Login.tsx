import React, { useState, useContext } from "react";
import logo from "../Image/logo.png";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../storeContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NyanAlert } from "../utils/NyanSwal";

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

  const ErrorSwal = (status: number, text: string) => {
    MySwal.fire({
      icon: "error",
      text: text,
      confirmButtonColor: "#3085d6",
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
        NyanAlert(); // Show Nyan Cat Swal on loading stage
        const authUser = await login(credentials);
        loggedIn(authUser); // set global state
        navigate("/");
      } catch (err) {
        const u = err as Res; // by default, TS cast Promise err type as "unknown"
        if (u.response.status === 0) {
          // if req doesn't reach the server, status error = 0
          ErrorSwal(
            u.response.status,
            "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ ตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้ง :("
          );
        } else {
          ErrorSwal(u.response.status, u.response.data);
        }
      }
    }
  };

  return (
    <div className="h-screen relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="flex justify-center items-center flex-col">
                <img
                  src={logo}
                  loading="lazy"
                  className="w-20"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-xl text-center text-cyan-900 font-bold xl:text-2xl lg:text-2xl">
                  GEO Tracker
                </h2>
              </div>

              <form
                onSubmit={handleLoginFormSubmit}
                autoComplete="on"
                className="px-5 pb-7"
              >
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  ชื่อผู้ใช้งาน
                </label>
                <input
                  name="username"
                  onChange={handleUserInput}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Username"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
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
                  className="transition duration-200 bg-[#2F847C] hover:bg-[#054B4A] focus:bg-[#054B4A] focus:shadow-sm focus:ring-4 focus:ring-[#2F847C] focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">เข้าสู่ระบบ</span>
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
                </button>
              </form>

              <div className="space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  เว็บไซส์ของเรามีการเก็บ Cookies ซึ่งช่วยให้เราจดจำคุณได้
                  ในการเข้าสู่ะบบถือว่าคุณยอมรับใน{" "}
                  <a href="#" className="underline">
                    นโยบาย
                  </a>{" "}
                  และ{" "}
                  <a href="#" className="underline">
                    ความเป็นส่วนตัว
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
