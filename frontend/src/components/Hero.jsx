import { useNavigate } from "react-router-dom";
import petergriffin from "../assets/petergriffin.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-evenly">
      <h1 className="font-bold text-5xl">PETERGRIFFITH74 HD&apos;s File Transfer App</h1>
      <img className="h-2/5" src={petergriffin} alt="petergriffin" />
      <div className="w-60 flex flex-row justify-evenly">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => {navigate("/send")}}
        >
          Send
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => {navigate("/receive")}}
        >
          Get
        </button>
      </div>
    </div>
  );
}
