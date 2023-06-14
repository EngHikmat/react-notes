import { FaPlus, FaThLarge, FaThList } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [style, setStyle] = useState({ display: "flex" });
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("notes"))?.length > 0) {
      setData(
        JSON.parse(localStorage.getItem("notes")).sort(function (a, b) {
          return a.id - b.id;
        })
      );
    }
  }, []);

  const remove = (id) => {
    let notes = data;
    notes = data.filter((el) => el.id !== id);
    setData(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <section className="py-9 container mx-auto ">
      <div className="border-b-[1px] border-slate-500/30 mb-8 py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-x-3 items-center justify-center">
            <div
              className={`${
                style.display === "flex" && data.length > 0
                  ? "bg-orange-300/50"
                  : "bg-orange-300/10"
              } p-3 rounded-xl
             hover:bg-orange-300/70 cursor-pointer transition-all duration-3000 ${
               data.length === 0 ? "pointer-events-none text-slate-400" : ""
             }`}
              onClick={() => setStyle({ ...style, display: "flex" })}
            >
              <FaThLarge />
            </div>
            <div
              className={`${
                style.display === "list" && data.length > 0
                  ? "bg-orange-300/50"
                  : "bg-orange-300/10"
              } p-3 rounded-xl 
            hover:bg-orange-300/70 cursor-pointer transition-all duration-3000 ${
              data.length === 0 ? "pointer-events-none text-slate-400" : ""
            }`}
              onClick={() => setStyle({ ...style, display: "list" })}
            >
              <FaThList />
            </div>
          </div>
          <div
            className="p-3 rounded-xl text-sm flex 
          items-center gap-x-1 cursor-pointer hover:bg-orange-300/50 bg-orange-300/10  transition-all duration-3000"
            onClick={() => navigate("/add")}
          >
            <FaPlus size={15} />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-wrap  ${
          style.display === "flex" ? "lg:flex-row" : "flex-col"
        } flex-col gap-5`}
      >
        {/* Loader */}
        {/* <div className="">
        <div
          className="w-[70px] h-[70px] rounded-full animate-spin
       border-8  border-orange-300 border-r-transparent"
        ></div>
      </div> */}
        {data.length === 0 && (
          <div className="flex justify-center flex-col items-center h-[75vh] w-full text-orange-500/50 gap-y-2">
            <div className="font-semibold">
              There is no notes inserted yet, you can add yours by click here ..
              .
            </div>
            <div
              className="p-3 rounded-xl text-sm flex 
          items-center gap-x-1 cursor-pointer hover:bg-orange-300/50 bg-orange-300/10  transition-all duration-3000 font-bold drop-shadow-md"
              onClick={() => navigate("/add")}
            >
              <FaPlus size={15} />
              <span>Add</span>
            </div>
          </div>
        )}
        {data?.map((item, index) => {
          return (
            <Fragment key={index}>
              <Card data={item} style={style} remove={remove} />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
export default Home;
