import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Preferneces from "../../QuillPreferences/preferences";
import { useNavigate } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { BsArrow90DegLeft } from "react-icons/bs";
import { useParams } from "react-router-dom";
function Note() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  var notes = JSON.parse(localStorage.getItem("notes"));
  useEffect(() => {
    let note = notes.filter((el) => el.id.toString() === id)[0];
    setValue(note.description);
    setTitle(note.title);
  }, []);

  const save = () => {
    let note = { id: Number(id), title: title, description: value };
    notes = notes.filter((el) => el.id !== Number(id));
    // console.log(notes);
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  return (
    <section className="py-9 container mx-auto relative">
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
        value={title}
      />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-[100vh]"
        modules={Preferneces.modules}
      />
      <div className="h-[100px]"></div>
    </section>
  );
}
export default Note;
