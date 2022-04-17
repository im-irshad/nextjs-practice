import React from "react";
import NewNewsForm from "../../components/News/NewNewsForm";

function NewNewsPage() {
  async function addNewsHandler(enteredNewsData) {
    const response = await fetch("/api/new-news", {
      method: "POST",
      body: JSON.stringify(enteredNewsData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <>
      <NewNewsForm onAddNews={addNewsHandler} />
    </>
  );
}

export default NewNewsPage;
