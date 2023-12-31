import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function DegreeComponent() {
  const images = [
    "https://media.tenor.com/QSBwyqksDxMAAAAd/spongebob-cold-spongebob.gif",
    "https://64.media.tumblr.com/bea43e32e2a0d6fa489ca12218fac4f8/tumblr_pae5bg05lL1tbq54wo1_500.gif",
    "https://media.tenor.com/C6sWJAK3V4sAAAAC/spongebob-squarepants-spongebob.gif",
  ];

  const [status, setStatus] = React.useState<number>(0);
  const [celcius1, setCelcius1] = React.useState<number>(34);
  const [celcius2, setCelcius2] = React.useState<number>(0);
  const [fahrenheit1, setFahrenheit1] = React.useState<number>(0);
  const [fahrenheit2, setFahrenheit2] = React.useState<number>(32);

  function celciusToFahrenheit() {
    return setFahrenheit1((celcius1 * 9) / 5 + 32);
  }

  function fahrenheitToCelcius() {
    return setCelcius2(((fahrenheit2 - 32) * 5) / 9);
  }

  function celcCondition() {
    if (celcius1 < 20) {
      setStatus(0);
    } else if (celcius1 >= 20 && celcius1 <= 38) {
      setStatus(1);
    } else if (celcius1 > 38) {
      setStatus(2);
    }
  }

  React.useEffect(() => {
    celciusToFahrenheit();
  }, [celcius1]);

  React.useEffect(() => {
    fahrenheitToCelcius();
  }, [fahrenheit2]);

  React.useEffect(() => {
    celcCondition();
  }, [celcius1, celcius2, fahrenheit1, fahrenheit2]);

  return (
    <React.Fragment>
      <header className="bg-gray-700 z-[9999] top-0 fixed w-full h-auto py-2 px-20">
        <Link to="/">
          <h1 className="font-medium">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </h1>
        </Link>
      </header>
      <div className="w-full h-screen bg-slate-900 p-20 flex justify-center items-center">
        <div className="w-full h-full bg-slate-800 p-10 rounded-2xl drop-shadow-lg flex">
          <div className="w-full h-full flex-1 flex flex-col">
            <div className="w-full h-full flex-1 flex  text-white">
              <div className="w-full h-full flex-1 flex flex-col justify-evenly ">
                <h1 className="text-3xl">Celcius to Fahrenheit</h1>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"></span>
                    <span className="label-text-alt">C°</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Celcius"
                    className="input input-bordered w-full max-w-xs"
                    value={celcius1}
                    onChange={(e) => setCelcius1(parseFloat(e.target.value))}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"></span>
                    <span className="label-text-alt">F°</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Fahrenheit"
                    className="input input-bordered w-full max-w-xs"
                    value={fahrenheit1}
                    disabled
                  />
                </div>
              </div>
              <div className="w-full h-full flex-1 flex justify-center items-center p-10 text-6xl text-white font-medium">
                <h1 className="truncate w-80 text-center">{fahrenheit1} F°</h1>
              </div>
            </div>
            <div className="w-full h-full flex-1 flex text-white">
              <div className="w-full h-full flex-1 flex flex-col justify-evenly ">
                <h1 className="text-3xl">Fahrenheit to Celcius</h1>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"></span>
                    <span className="label-text-alt">C°</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Celcius"
                    className="input input-bordered w-full max-w-xs"
                    value={celcius2}
                    disabled
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"></span>
                    <span className="label-text-alt">F°</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Fahrenheit"
                    className="input input-bordered w-full max-w-xs"
                    value={fahrenheit2}
                    onChange={(e) => setFahrenheit2(parseFloat(e.target.value))}
                  />
                </div>
              </div>
              <div className="w-full h-full flex-1 flex justify-center items-center p-10 text-6xl text-white font-medium">
                <h1 className="truncate w-80 text-center">{celcius2} C°</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex-1 flex">
            <img
              src={images[status]}
              alt="meme"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <section id="todo" className="w-full h-[60vh] bg-slate-800 p-20">
        <h1 className="text-center text-white text-4xl font-bold">
          What should you do!
        </h1>
        <div className="overflow-x-auto w-1/2 mx-auto mt-10">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Topic</th>
                <th>Explanation</th>
                <th>Is Done</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Fetch API</td>
                <td>
                  Know how to getting data from an API and render it on
                  client-side
                </td>
                <td className="flex justify-center">
                  <input type="checkbox" className="checkbox" />
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Function</td>
                <td>
                  Know how to create a function that runs a commands we need to
                  execute, specifically to get a data
                </td>
                <td className="flex justify-center">
                  <input type="checkbox" className="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="w-full h-[40vh] bg-slate-900 p-10 flex flex-col">
        <h1 className="text-center text-4xl text-white font-semibold">
          Submit your task here!
        </h1>
        <form className="w-full flex justify-center gap-10 my-auto">
          <div className="form-control w-full">
            <label className="label">Github Repository Link</label>
            <input
              type="text"
              placeholder="https://github.com/xxxxx/meme-generator"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">Vercel Link</label>
            <input
              type="text"
              placeholder="https://xxxxx.vercel.app/"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-neutral mt-auto w-60">
              Submit
            </button>
          </div>
        </form>
      </section>
      <footer className="w-full p-1 m-1 flex justify-center items-center z-[9999] bottom-0 fixed text-slate-950">
        <Link to="https://github.com/adhxabre">
          <h1 className="w-auto h-auto px-3 py-1 rounded-2xl bg-white border-2 border-white ease-out duration-200 hover:scale-110 hover:text-white hover:bg-transparent">
            Made by <strong className="text-slate-400">Abel Dustin</strong> with
            💖
          </h1>
        </Link>
      </footer>
    </React.Fragment>
  );
}
