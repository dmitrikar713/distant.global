import React, { FormEvent, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface ITextEditor {
  onSubmit: (data) => void;
}

const TextEditor = ({ onSubmit }: ITextEditor) => {
  const [body, setBody] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBody(data);
        }}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default TextEditor;

// import React, {  useState } from 'react'
// import CKEditor from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// const TextEditor = ({ onSubmit } ) => {
//     const [body, setBody] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         onSubmit({ body })
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <CKEditor
//                 editor={ClassicEditor}
//                 onChange={(event, editor) => {
//                     const data = editor.getData()
//                     setBody(data)
//                 }}
//             />
//             <button type='submit'>Отправить</button>
//         </form>
//     )
// }

// export default TextEditor
