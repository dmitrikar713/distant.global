import TextEditor from "./components/TextEditor";

const NewPost = () => {
  return (
    <TextEditor
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};

export default NewPost;
