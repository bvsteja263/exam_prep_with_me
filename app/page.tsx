'use client';

import { useState, useEffect } from 'react';

const subjects = [
  'Math',
  'Science',
  'History',
  'Digital Logical Circuits'
];

const todoData = {
  'Math': [
    { task: 'Algebra', done: false }
  ],
  'Science': [
    { task: 'Biology', done: false }
  ],
  'History': [
    { task: 'World War II', done: false }
  ],
  'Digital Logical Circuits': [
    { task: 'Number Systems', done: false },
    { task: 'Boolean Algebra and Logic Circuits', done: false },
    { task: 'Gate-Level Minimization', done: false },
    { task: 'Combinational Logic', done: false },
    { task: 'Sequential Circuits', done: false }
  ]
};

export default function Home() {
  const [todos, setTodos] = useState<{ [key: string]: { task: string; done: boolean }[] }>({});

  useEffect(() => {
    // Initialize todos
    setTodos(todoData);
  }, []);

  const toggleDone = (subject: string, index: number) => {
    const newTodos = [...todos[subject]];
    newTodos[index].done = !newTodos[index].done;
    setTodos({ ...todos, [subject]: newTodos });
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Prep With Me</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Subjects</h2>
          <div className="flex flex-col space-y-4">
            {subjects.map(subject => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className="button-67"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
        {selectedSubject && (
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">{selectedSubject} To-Do List</h2>
            <ul>
              {todos[selectedSubject].map((todo, index) => (
                <li key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleDone(selectedSubject, index)}
                    className="mr-2"
                  />
                  <span className={todo.done ? 'line-through' : ''}>{todo.task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
