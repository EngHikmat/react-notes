import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Preferneces from "../../QuillPreferences/preferences";
import { useNavigate } from "react-router-dom";
import { FaSave, FaExclamationCircle } from "react-icons/fa";
import { BsArrow90DegLeft } from "react-icons/bs";

function Create() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState({ isError: false, msg: "" });

  const save = () => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    try {
      if (notes === null || notes.length == 0) {
        notes = [{ id: 1, title: title, description: value }];
      } else if (notes.length >= 1) {
        notes.push({ id: notes.length + 1, title: title, description: value });
        //   console.log(notes);
      } else {
        let arr = [{ id: notes.id + 1, title: title, description: value }];
        arr.push(notes);
        notes = arr;
      }
      localStorage.setItem("notes", JSON.stringify(notes));
      navigate("/");
    } catch (e) {
      setError({
        isError: true,
        msg: "Sorry, too long image, try another one.",
      });
      setTimeout(() => {
        setError({
          isError: false,
          msg: "",
        });
      }, 3000);
      //   console.log("Local Storage is full, Please empty data");
    }
  };

  return (
    <section className="py-9 container mx-auto relative">
      {error.isError && (
        <div
          className="fixed bg-rose-700/60 left-0 bottom-0
         w-[350px]  z-30 p-5 flex items-center gap-x-2 text-white animate-pulse"
        >
          <FaExclamationCircle size={25} />
          <span>{error.msg}</span>
        </div>
      )}

      <div
        className="w-full py-3  drop-shadow-xl flex justify-between 
      items-center flex-col lg:flex-row gap-y-2"
      >
        <div
          className={`bg-white/50 w-full lg:w-fit hover:bg-orange-500/20  p-2 rounded-lg cursor-pointer
            transition-all duration-3000 flex justify-center items-center gap-x-2 `}
          onClick={() => navigate("/")}
        >
          <BsArrow90DegLeft />
          <span>Back</span>
        </div>
        <div
          className={`bg-white/50 hover:bg-orange-500/20 w-full lg:w-fit  p-2 rounded-lg cursor-pointer
            transition-all duration-3000 flex justify-center items-center gap-x-2 ${
              title === "" || value === ""
                ? "pointer-events-none text-slate-400"
                : ""
            }`}
          onClick={() => save()}
        >
          <FaSave />
          <span>Save</span>
        </div>
      </div>
      <input
        type="text"
        className=" bg-orange-200/20 w-full outline-none drop-shadow-xl  p-3 text-lg rounded-tr-xl rounded-tl-xl"
        placeholder="Title...."
        onChange={(e) => setTitle(e.target.value)}
      />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-[100vh]"
        modules={Preferneces.modules}
      />
      <div className="h-[100px]"></div>

      {/* <div className="paper shadow-xl">
        <span
          className="px-4 text-xs font-bold flex  
        flex-col items-center text-slate-500/50"
        >
          <span>{daysOfWeek[date.getDay()]}</span>
          <span>
            {date.getFullYear()}/{date.getDate()}/{date.getMonth() + 1}
          </span>
        </span>

        <div className="pattern">
          <textarea
            dir={properites.dir}
            className={`content bg-transparent w-full outline-none resize-none h-[100vh] caret-orange-500/40 ${
              properites.algin
            } ${properites.isBold && "font-bold"} ${
              properites.isItalic && "italic"
            }  ${properites.isUnderline && "underline"}`}
          ></textarea>
        </div>
      </div> */}
      {/* <textarea className="h-[100vh] bg-white w-full outline-none drop-shadow-xl resize-none p-3"></textarea> */}
    </section>
  );
}
export default Create;
