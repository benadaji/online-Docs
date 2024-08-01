import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
// import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <p className="text-white">Test</p>
        <div className="flex w-fit items-center"></div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
