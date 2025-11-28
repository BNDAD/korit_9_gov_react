import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";
import App02_4 from "./ch02/App02_4";
import App02_5 from "./ch02/App02_5";
import Inputs from "./ch02/inputs";
import SearchName from "./ch02/SearchName";
import UseEffect01 from "./ch03/UseEffect01";
import UseEffect02 from "./ch03/UseEffect02";
import UseEffect03 from "./ch03/UseEffect03";

const appObj = {
  ch01: <App01 />,
  ch02: <App02 />,
  ch02_2: <App02_2 />,
  ch02_3: <App02_3 />,
  ch02_4: <App02_4 />,
  ch02_5: <App02_5 />,
  inputs: <Inputs />,
  searchName: <SearchName />,
  useEffect1: <UseEffect01 />,
  useEffect2: <UseEffect02 />,
  useEffect3: <UseEffect03 />,
  counter: <Counter />,
};

createRoot(document.getElementById("root")).render(appObj.useEffect3);
