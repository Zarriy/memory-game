import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const customCtx = createContext();

function CtxProvider(props) {
  const [loading, setLoading] = useState(true);
  const [gameData, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);
  let score = 0;
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    setData((prevData) => randomizer(prevData));

    setBestScore((prev) => (prev < score ? score : prev));

    if (selected.length === 12) {
      setWin(true);
      popUp("success", "Hurrah", "You are a genious...", "Play Again").then(
        (result) => {
          setSelected([]);
          setWin(false);
          setLoading(true);
        }
      );
    }
  }, [selected]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => {
        const randomData = randomizer(data);
        const twelveCharacters = randomData.slice(0, 12);
        setData(twelveCharacters);
        setTimeout(() => setLoading(false), 1500);
      });
  }, [win]);

  function popUp(icon, title, text, confirmButtonText = "Try Again") {
    return MySwal.fire({
      icon,
      title,
      text,
      confirmButtonText,
    });
  }
  const addSelected = (name) => {
    const findName = selected.find((nm) => nm === name);
    if (findName) {
      popUp("error", "Oops", "You can win this...");
      setSelected([]);
    } else {
      setSelected((prev) => [...prev, name]);
    }
  };
  score = selected.length;
  return (
    <customCtx.Provider
      value={{ loading, gameData, addSelected, score, bestScore, win }}
    >
      {props.children}
    </customCtx.Provider>
  );
}

function randomizer(array) {
  const newArray = [...array];
  const length = newArray.length;

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor(
      (newArray.length - start) * Math.random()
    );
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
}

export { customCtx, CtxProvider };
