import React, { useState } from "react";

export default function SearchBar(props) {
  const [movi, setMovi] = useState("");
  const [query, setQuery] = useState("");
  const ChangeHandler = (e) => {
    setMovi(e.target.value);
    setMovi("");
  };
  const SubmitHandler = () => {
    setQuery(movi);
  };
  props.QueryHandler(query);
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" value={movi} onChange={ChangeHandler} />
      </form>
    </div>
  );
}
