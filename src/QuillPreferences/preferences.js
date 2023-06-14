export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],
    ["link", "image"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "checked" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};


export const editorStyle = {
  border: "1px solid #ccc",
  minHeight: "200px",
  padding: "10px",
};

export const toolbarStyle = {
  border: "1px solid #ccc",
  backgroundColor: "#f1f1f1",
  padding: "5px",
};
