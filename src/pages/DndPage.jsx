// src/pages/DndPage.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function DndPage() {
  const [columns, setColumns] = useState({
    todo: {
      name: "To Do",
      items: [
        {
          id: "1",
          content: "First task",
        },
        {
          id: "2",
          content: "Second task",
        },
      ],
    },
    inProgress: {
      name: "In Progress",
      items: [],
    },
    done: {
      name: "Done",
      items: []
    },
    stale: {
      name: "Stale",
      items: []
    }
  });

  const removeTodo = (ident) => {
    var newColumns = {}
    for (var [key, column] of Object.entries(columns)) {
      var items = column.items.filter((element) => element.id != ident)
      newColumns[key] = {
        id: column.id,
        name: column.name,
        items: items
      }
    }
    setColumns(newColumns)
  }

  const onDragEnd = (result, columns, setColumns) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };
  return (
    <div className="">
    <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" style={{
      marginBottom: 10,
    }} href="/">Go BACK!</a>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div class="border border-transparent bg-blue-600"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 20px",
              }}
              key={columnId}
            >
              <h2> {column.name} </h2>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "lightgrey",
                        padding: 4,
                        width: 250,
                        minHeight: 500,
                      }}
                    >
                      {column.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                class="rounded-full shadow-2xl"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  padding: 16,
                                  margin: "0 0 8px 0",
                                  minHeight: "50px",
                                  backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                  color: "white",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {item.content}
                                <button class="rounded-full"
                                  ref={provided.innerRef}
                                  style={{
                                    color: "#FF0000",
                                    padding: "0",
                                    float: "right",
                                  }} onClick={() => removeTodo(item.id)}>[X]</button>
                              </div>
                            );
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}{" "}
      </DragDropContext>
    </div>
    </div>
  );
}
export default DndPage;
