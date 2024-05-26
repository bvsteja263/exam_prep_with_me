'use client';

import { useState } from 'react';

const subjects = [
  {
    name: 'Unit I: Number Systems',
    tasks: [
      'Positional representation of numbers',
      'Decimal, Octal, Hexadecimal number systems',
      'General radix "r" system',
      'Conversions',
      'Complements',
      'Binary codes',
      'Arithmetic with signed and unsigned numbers (addition, subtraction)',
      'Introduction to error detection and error correction'
    ]
  },
  {
    name: 'Unit II: Boolean Algebra and Logic Circuits',
    tasks: [
      'Axiomatic definition of Boolean Algebra',
      'Basic theorems and Properties of Boolean Algebra',
      'Boolean Functions',
      'Minterms and Maxterms',
      'Canonical and Standard Forms',
      'Digital logic gates',
      'Synthesis using AND, OR and NOT gates',
      'NAND and NOR logic networks'
    ]
  },
  // Include other units similarly...
];

export default function Home() {
  const [todos, setTodos] = useState({});

  // Initialize todos based on subjects
  useState(() => {
    const initialTodos = {};
    subjects.forEach(subject => {
      initialTodos[subject.name] = subject.tasks.map(task => ({ task, done: false }));
    });
    setTodos(initialTodos);
  }, []);

  const toggleDone = (subject, index) => {
    const newTodos = [...todos[subject]];
    newTodos[index].done = !newTodos[index].done;
    setTodos({ ...todos, [subject]: newTodos });
  };

  const toggleUnit = (unitName, isChecked) => {
    const updatedTodos = { ...todos };
    subjects.forEach(subject => {
      if (subject.name.includes(unitName)) {
        updatedTodos[subject.name] = subject.tasks.map(task => ({ task, done: isChecked }));
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Prep With Me</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Units</h2>
          <div className="flex flex-col space-y-4">
            {subjects.map(subject => (
              <div key={subject.name}>
                <input
                  type="checkbox"
                  onChange={(e) => toggleUnit(subject.name, e.target.checked)}
                />
                <label>{subject.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          {subjects.map(subject => (
            <div key={subject.name}>
              <h2 className="text-xl font-semibold mb-4">{subject.name} To-Do List</h2>
              <ul>
                {todos[subject.name].map((todo, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleDone(subject.name, index)}
                      className="mr-2"
                    />
                    <span className={todo.done ? 'line-through' : ''}>{todo.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
