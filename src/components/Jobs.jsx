import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJobs } from "../Features/AdminSide/Actions";

export const Jobs = () => {
  const [text, setText] = useState("");
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter Job title"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("http://localhost:3001/jobs", {
            Method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: text }),
          })
            .then((d) => d.json())
            .then((res) => {
              dispatch(addJobs(res));
            })
            .catch((err) => {
              //
            });
        }}
      >
        add job
      </button>
      {jobs.map((e) => (
        <div>{e.title}</div>
      ))}
    </div>
  );
};
