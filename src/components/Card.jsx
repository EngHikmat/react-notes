/* eslint-disable react/prop-types */
import { FaStickyNote, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Card({ data, style, remove }) {
  const navigate = useNavigate();
  const note_data = data;

  return (
    <div
      className={`shadow-lg  bg-white ${
        style.display === "flex" ? "lg:w-[276px]" : "w-full"
      } w-[100%] rounded-md  box-border
     `}
    >
      <div className="border-b-[1px] px-2 py-1 font-semibold flex justify-between items-center gap-x-2">
        <div className="flex gap-x-2 items-center">
          <FaStickyNote className="text-orange-300" />
          <span className="text-xs">{note_data?.title}</span>
        </div>
        <div
          className="hover:bg-rose-500/30 hover:text-rose-500
         text-slate-300 p-1 rounded-full transition-all duration-3000 cursor-pointer"
          onClick={() => remove(note_data.id)}
        >
          <FaTrashAlt />
        </div>
      </div>
      <div
        className="py-9 px-3 truncate text-xs hover:bg-orange-400/10 cursor-pointer transition-all duration-3000"
        onClick={() => navigate(`/${data.id}`)}
      >
        {note_data?.description.replace(/<\/?[^>]+>/gi, "")}
      </div>
    </div>
  );
}
export default Card;
