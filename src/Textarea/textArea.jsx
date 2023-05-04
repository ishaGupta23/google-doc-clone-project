import React, { useState } from "react";
import "./textArea.css";

import ContentEditable from "react-contenteditable";

const Editable = () => {
  const [content, setContent] = useState("");
 
  const onContentChange = (evt) => {
    setContent(evt.currentTarget.innerHTML);
  };
  const divRef = React.useRef();
  return (
    <div className="text-area">
      <ContentEditable
        contentEditable="true"
        placeholder="Write Your Text"
        suppressContentEditableWarning={true}
        onChange={onContentChange}
        onBlur={onContentChange}
        html={content}
        ref={divRef}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />

    </div>
  );
};

export default Editable;
