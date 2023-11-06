import React from "react";
import SingleQuestion from "./SingleQuestion";

export default function Questions({ questions }) {
  return (
    <section className="container">
      <h2>Questions</h2>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
}
