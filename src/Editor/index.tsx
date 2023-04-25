import { useCallback, useState, useEffect } from "react";
import {
  DropResult,
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { TiPlus } from "react-icons/ti";
import update from "immutability-helper";
import { v4 as uniqid } from "uuid";

import { Blocks, IBlocks } from "../@types/block";
import { ISurveyContent, ISurveyEditor, ISurveyResult } from "../@types/editor";

import {
  RoundDashedSection,
  Row,
  SurveyContainer,
} from "../components/Section";
import { Input } from "../components/Inputs";
import { Button } from "../components/Buttons";
import { Text } from "../components/Texts";
import { BlockPresenter } from "./Blocks";
import { ThemeProvider } from "styled-components";
import { themeRef } from "../helpers/theme";
import { blockList } from "../constants/blocks";

const Editor = ({
  submitButtonOptions,
  defaultValue,
  onChange,
  onSubmit,
  useHead = true,
}: ISurveyEditor) => {
  const [surveyTitle, setSurveyTitle] = useState<string>(
    defaultValue?.title || ""
  );
  const [surveyDescription, setSurveyDescription] = useState<string>(
    defaultValue?.description || ""
  );
  const [surveyContent, setSurveyContent] = useState<ISurveyContent>(
    defaultValue?.content || []
  );

  const extractSurveyResult = useCallback(
    (): ISurveyResult => ({
      title: surveyTitle,
      description: surveyDescription,
      content: surveyContent.filter(({ type }) => type !== Blocks.BLANK),
    }),
    [surveyTitle, surveyDescription, surveyContent]
  );

  useEffect(() => {
    if (onChange) {
      onChange(extractSurveyResult());
    }
  }, [onChange, extractSurveyResult]);

  const addBlock = useCallback(() => {
    const order = surveyContent.length + 1;

    setSurveyContent(
      update(surveyContent, {
        $push: [
          {
            id: uniqid(),
            type: Blocks.BLANK,
            order,
            required: false,
          },
        ],
      })
    );
  }, [surveyContent]);

  const onUpdateBlock = (index: number, data: IBlocks) => {
    setSurveyContent(
      update(surveyContent, {
        [index]: {
          $set: data,
        },
      })
    );
  };

  const onCopyBlock = (index: number, data: IBlocks) => {
    setSurveyContent(
      update(surveyContent, {
        $splice: [[index, 0, data]],
      })
    );
  };

  const onRemoveBlock = (index: number) => {
    setSurveyContent(
      update(surveyContent, {
        $splice: [[index, 1]],
      })
    );
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    reorderBlocks(result.source.index, result.destination.index);
  };

  const reorderBlocks = (index: number, nextIndex: number) => {
    const reorderSurveyContent = Array.from(surveyContent);
    const [removed] = reorderSurveyContent.splice(index, 1);
    reorderSurveyContent.splice(nextIndex, 0, removed);

    setSurveyContent(reorderSurveyContent);
  };

  return (
    <ThemeProvider theme={{ ...themeRef.current }}>
      <SurveyContainer>
        {useHead && (
          <Row>
            <Input
              placeholder={"설문 제목"}
              value={surveyTitle}
              onChange={({ target: { value } }) => setSurveyTitle(value)}
            />
            <Input
              placeholder={"설문 설명"}
              value={surveyDescription}
              onChange={({ target: { value } }) => setSurveyDescription(value)}
            />
          </Row>
        )}

        <Row>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {surveyContent.map((block, i) => (
                    <Draggable key={i} draggableId={String(i)} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <BlockPresenter
                            list={blockList}
                            key={i}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            block={block}
                            onUpdateBlock={(data) => onUpdateBlock(i, data)}
                            onCopyBlock={(data) => onCopyBlock(i, data)}
                            onRemoveBlock={() => onRemoveBlock(i)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Row>
        <Row>
          <RoundDashedSection
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={addBlock}
          >
            <TiPlus />
            <Text>새로운 항목 추가</Text>
          </RoundDashedSection>
        </Row>
        {submitButtonOptions?.visible && (
          <Row>
            <Button onClick={() => onSubmit && onSubmit(extractSurveyResult())}>
              {submitButtonOptions?.text || "전송"}
            </Button>
          </Row>
        )}
      </SurveyContainer>
    </ThemeProvider>
  );
};

export default Editor;
