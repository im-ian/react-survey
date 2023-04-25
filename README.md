# Survey Component

React 설문 모듈입니다.

설문 내용을 생성하는 `Editor`와 생성된 내용을 기반으로 동작하여 내용을 채워주는 `Viewer`가 포함되어 있습니다.

![service_capture](https://user-images.githubusercontent.com/38205068/140688808-e767339e-423e-4318-a5bb-951464572e9a.png)

## Installation (will be not working)

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
