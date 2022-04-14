import React from "react";
import NewNewsForm from "../../components/News/NewNewsForm";

function NewNewsPage() {
  function addNewsHandler(enteredNewsData) {
    console.log(enteredNewsData);
  }
  return (
    <>
      <NewNewsForm onAddNews={addNewsHandler} />
    </>
  );
}

export default NewNewsPage;
