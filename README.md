# React Survey

2018~2019년에 제작했던 React 설문 모듈입니다. 아카이브 용도로 업로드 되었습니다.

설문 폼을 생성하는 `Editor`와 생성된 폼을 기반으로 응답을 수집하는 `Viewer`가 포함되어 있습니다.

![service_capture](https://user-images.githubusercontent.com/38205068/140688808-e767339e-423e-4318-a5bb-951464572e9a.png)

## Installation

```shell
npm install @im-ian/react-survey

# or

yarn add @im-ian/react-survey

```

## How to use?

```javascript
import { useState } from 'react';
import { Editor, Viewer, EditorType } from '@im-ian/react-survey';

const View = () => {
  const [survey, setSurvey] = useState<EditorType.ISurveyResult>();

  return (
    <>
      <Editor onSubmit={survey => setSurvey(survey)} />
      {survey && (
        <Viewer
          survey={survey}
          onSubmit={result => {
            console.log(result);
          }}
        />
      )}
    </>
  );
};

export default View;
```

```css
/* write on your css file. */
@import url(https://cdn.syncfusion.com/ej2/material.css);
```

## Feature

### Editor

| property            | required | value                                      |
| ------------------- | -------- | ------------------------------------------ |
| submitButtonOptions | N        | { text: string; visible: boolean; }        |
| defaultValue        | N        | {}: EditorType.ISurveyResult               |
| onChange            | N        | (result: EditorType.ISurveyResult) => void |
| onSubmit            | N        | (result: EditorType.ISurveyResult) => void |

### Viewer

| property            | required | value                                      |
| ------------------- | -------- | ------------------------------------------ |
| survey              | Y        | EditorType.ISurveyResult                   |
| submitButtonOptions | N        | { text: string; visible: boolean; }        |
| onSubmit            | N        | (result: EditorType.ISurveyResult) => void |
