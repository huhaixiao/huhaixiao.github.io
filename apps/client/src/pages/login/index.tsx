import React from "react";

export const Login = () => {
  return (
    <form
      className="text-white max-w-screen-sm"
      onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const formData = new FormData(evt.target as HTMLFormElement);
        fetch("http://localhost:80", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log({ result });
          })
          .catch((error) => {
            console.log({ error });
          });
      }}
    >
      <div className="grid grid-cols-2">
        <label htmlFor="email">Enter your email: </label>
        <input
          className="text-black bg-slate-400"
          type="text"
          name="email"
          id="email"
        />
      </div>
      <div className="grid grid-cols-2">
        <label htmlFor="password">Enter your password: </label>
        <input
          className="text-black bg-slate-400"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <button>Submit</button>
      </div>
    </form>
  );
};
