'use client';

import { useState } from 'react';

const subjects = [
  {
    name: 'Digital Logical Circuits',
    units: [
      {
        name: 'Unit I: Number Systems',
        topics: [
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
        topics: [
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
      {
        name: 'Unit III: Gate-Level Minimization',
        topics: [
          'The K-Map method',
          'Two variable K-Map',
          'Three variable K-Map',
          'Four variable K-Map',
          'Five variable K-Map',
          'Six variable K-Map',
          'K-Maps with don\'t care conditions (incompletely specified functions)',
          'Tabular method for minimization (Quine McCluskey Method)',
          'Sum of products (SOP)',
          'Product of sums (POS) simplification'
        ]
      },
      {
        name: 'Unit IV: Combinational Logic',
        topics: [
          'Design procedures',
          'Adders',
          'Subtractors',
          'Multiplexers',
          'Demultiplexers',
          'Encoders',
          'Decoders',
          'Priority encoder',
          'Code converters',
          'Seven segment display',
          'Magnitude comparator',
          'Decimal adder (BCD adder)',
          'Binary Multiplier'
        ]
      },
      {
        name: 'Unit V: Sequential Circuits',
        topics: [
          'Flip Flops',
          'Basic latch',
          'R-S flip flop',
          'D flip flop',
          'T flip flop',
          'JK flip flop',
          'Registers',
          'Shift registers',
          'Synchronous and Asynchronous (ripple) counters',
          'BCD counter (synchronous and asynchronous)',
          'Ring counter',
          'Johnson counter',
          'Registers',
          'Shift Registers'
        ]
      }
    ]
  }
];

export default function Home() {
  const [todos, setTodos] = useState<{ [key: string]: { task: string; done: boolean }[] }>({
    'Digital Logical Circuits': [
      { task: 'Positional representation of numbers', done: false },
      { task: 'Decimal, Octal, Hexadecimal number systems', done: false },
      { task: 'General radix "r" system', done: false },
      { task: 'Conversions', done: false },
      { task: 'Complements', done: false },
      { task: 'Binary codes', done: false },
      { task: 'Arithmetic with signed and unsigned numbers (addition, subtraction)', done: false },
      { task: 'Introduction to error detection and error correction', done: false },
      { task: 'Axiomatic definition of Boolean Algebra', done: false },
      { task: 'Basic theorems and Properties of Boolean Algebra', done: false },
      { task: 'Boolean Functions', done: false },
      { task: 'Minterms and Maxterms', done: false },
      { task: 'Canonical and Standard Forms', done: false },
      { task: 'Digital logic gates', done: false },
      { task: 'Synthesis using AND, OR and NOT gates', done: false },
      { task: 'NAND and NOR logic networks', done: false },
      { task: 'The K-Map method', done: false },
      { task: 'Two variable K-Map', done: false },
      { task: 'Three variable K-Map', done: false },
      { task: 'Four variable K-Map', done: false },
      { task: 'Five variable K-Map', done: false },
      { task: 'Six variable K-Map', done: false },
      { task: 'K-Maps with don\'t care conditions (incompletely specified functions)', done: false },
      { task: 'Tabular method for minimization (Quine McCluskey Method)', done: false },
      { task: 'Sum of products (SOP)', done: false },
      { task: 'Product of sums (POS) simplification', done: false },
      { task: 'Design procedures', done: false },
      { task: 'Adders', done: false },
      { task: 'Subtractors', done: false },
      { task: 'Multiplexers', done: false },
      { task: 'Demultiplexers', done: false },
      { task: 'Encoders', done: false },
      { task: 'Decoders', done: false },
      { task: 'Priority encoder', done: false },
      { task: 'Code converters', done: false },
      { task: 'Seven segment display', done: false },
      { task: 'Magnitude comparator', done: false },
      { task: 'Decimal adder (BCD adder)', done: false },
      { task: 'Binary Multiplier', done: false },
      { task: 'Flip Flops', done: false },
      { task: 'Basic latch', done: false },
      { task: 'R-S flip flop', done: false },
      { task: 'D flip flop', done: false },
      { task: 'T flip flop', done: false },
      { task: 'JK flip flop', done: false },
      { task: 'Registers', done: false },
      { task: 'Shift registers', done: false },
      { task: 'Synchronous and Asynchronous (ripple) counters', done: false },
      { task: 'BCD counter (synchronous and asynchronous)', done: false },
      { task: 'Ring counter', done: false },
      { task: 'Johnson counter', done: false },
      { task: 'Shift Registers', done: false }
    ]
  });
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

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
          <h2 className="text-xl font-semiboldmb-4">Subjects</h2>
          <div className="flex flex-col space-y-4">
            {subjects.map(subject => (
              <button
                key={subject.name}
                onClick={() => setSelectedSubject(subject.name)}
                className="button-67"
              >
                {subject.name}
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

