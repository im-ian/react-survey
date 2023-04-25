import { useState } from "react";
import { ISurveyResult } from "./@types/editor";

import Editor from "./Editor";
import Viewer from "./Viewer";
import "./styles/common.css";

const App = () => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, justifyContent: "center" }}>
        <Editor
          submitButtonOptions={{ text: "투표 생성", visible: true }}
          onSubmit={(result) => {
            console.log(result);
            setSurveyContent(result);
          }}
          onChange={setSurveyContent}
        />
      </div>
      <div style={{ flex: 1 }}>
        {surveyContent && (
          <Viewer
            submitButtonOptions={{ text: "결과 제출", visible: true }}
            survey={surveyContent}
            onSubmit={(result) => {
              console.log(result);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
