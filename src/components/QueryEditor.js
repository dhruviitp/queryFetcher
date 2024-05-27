import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

function QueryEditor({ setValue, value }) {
  return (
    <div className="p-2 bg-gray-200">
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        width="100%"
        fontSize={14}
        minLines={5}
        maxLines={5}
        placeholder="Enter your query..."
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default QueryEditor;
