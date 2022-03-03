import React from "react";
import Root from ".";

function Base() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(prev => !prev)}>toggle</button>
      <hr />
      {open && <Root />}
    </>
  );
}

export default Base;
