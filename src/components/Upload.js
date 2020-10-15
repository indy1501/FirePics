import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedFileType = ["image/jpeg", "image/png", "image/jpg"];

  const changeHandler = e => {
    let selectedFile = e.target.files[0];

    //check if user has chosen a file to upload and matches the allowed upload types
    if (selectedFile && allowedFileType.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
      setError("Please select an image file (jpeg or png)");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
      </div>
    </form>
  );
};

export default Upload;
