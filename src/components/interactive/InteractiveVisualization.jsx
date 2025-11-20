import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { Tooltip } from '../common/Tooltip';

export const MemoryLayoutVisualization = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: 'stack',
      label: 'Stack',
      color: 'from-red-400 to-red-500',
      borderColor: 'border-red-400',
      textColor: 'text-red-900 dark:text-red-100',
      desc: 'Stores local variables, function parameters, and return addresses. Grows downwards towards lower memory addresses.',
      details: ['Function call frames', 'Local variables', 'Return addresses', 'Function parameters']
    },
    {
      id: 'gap',
      label: '↓ Free Space ↑',
      color: 'from-slate-100 to-slate-200',
      borderColor: 'border-slate-300 border-dashed',
      textColor: 'text-slate-500',
      desc: 'Space available for Stack (growing down) and Heap (growing up) to expand without collision.',
      details: ['Dynamic growth area', 'Prevents collision', 'Memory flexibility']
    },
    {
      id: 'heap',
      label: 'Heap',
      color: 'from-blue-400 to-blue-500',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-900 dark:text-blue-100',
      desc: 'Dynamic memory allocation (e.g., malloc() in C, new in C++). Grows upwards towards higher memory addresses.',
      details: ['malloc()/new allocations', 'Dynamic data structures', 'Grows upward', 'Manual management required']
    },
    {
      id: 'bss',
      label: 'BSS',
      color: 'from-yellow-400 to-yellow-500',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-900 dark:text-yellow-100',
      desc: 'Uninitialized data segment. Contains global and static variables initialized to zero.',
      details: ['Uninitialized globals', 'Static variables', 'Zero-initialized']
    },
    {
      id: 'data',
      label: 'Data',
      color: 'from-green-400 to-green-500',
      borderColor: 'border-green-400',
      textColor: 'text-green-900 dark:text-green-100',
      desc: 'Initialized data segment. Contains global and static variables explicitly initialized by the programmer.',
      details: ['Initialized globals', 'Static variables', 'Constant data']
    },
    {
      id: 'text',
      label: 'Text (Code)',
      color: 'from-purple-400 to-purple-500',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-900 dark:text-purple-100',
      desc: 'Contains the compiled machine code. Usually read-only to prevent accidental modification.',
      details: ['Machine code', 'Read-only', 'Program instructions', 'Executable code']
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="w-full lg:w-2/5 flex flex-col gap-2">
        <div className="text-xs text-center text-slate-500 dark:text-slate-400 uppercase font-bold mb-2 flex items-center justify-center gap-2">
          <span>High Memory (0xFFFFFFFF)</span>
          <Tooltip content="Maximum memory address">
            <Info size={14} className="text-slate-400 cursor-help" />
          </Tooltip>
        </div>

        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredSection(section)}
            onMouseLeave={() => setHoveredSection(null)}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            className={`
              relative h-20 w-full border-2 ${section.borderColor}
              flex items-center justify-center font-bold
              cursor-pointer transition-all duration-200
              rounded-lg overflow-hidden
              ${hoveredSection?.id === section.id ? 'shadow-xl ring-4 ring-blue-300 dark:ring-blue-700' : 'shadow-sm'}
            `}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-20`} />
            <span className={`relative z-10 ${section.textColor} text-sm font-bold px-3 py-1 bg-white/70 dark:bg-slate-800/70 rounded-full`}>
              {section.label}
            </span>
          </motion.div>
        ))}

        <div className="text-xs text-center text-slate-500 dark:text-slate-400 uppercase font-bold mt-2 flex items-center justify-center gap-2">
          <span>Low Memory (0x00000000)</span>
          <Tooltip content="Starting memory address">
            <Info size={14} className="text-slate-400 cursor-help" />
          </Tooltip>
        </div>
      </div>

      <div className="w-full lg:w-3/5">
        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          Process Memory Layout
          <span className="text-sm font-normal text-slate-500">(Interactive)</span>
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Hover over the memory segments to explore their specific purpose and characteristics.
        </p>

        {hoveredSection ? (
          <motion.div
            key={hoveredSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-4 h-4 rounded bg-gradient-to-br ${hoveredSection.color}`} />
              <h5 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                {hoveredSection.label} Segment
              </h5>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              {hoveredSection.desc}
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</p>
              <ul className="space-y-2">
                {hoveredSection.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center h-64 text-slate-400">
            <Info size={48} className="mb-4 opacity-50" />
            <p className="text-center italic">Hover over a memory segment to see details...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProcessStateDiagram = () => {
  const [activeState, setActiveState] = useState('new');

  const states = {
    new: {
      title: 'New',
      desc: 'The process is being created. The OS allocates the initial Process Control Block (PCB) and resources.',
      color: 'bg-blue-600',
      details: ['PCB created', 'Resources allocated', 'Not yet in main memory']
    },
    ready: {
      title: 'Ready',
      desc: 'The process is loaded in main memory and waiting to be assigned to a processor by the scheduler.',
      color: 'bg-yellow-500',
      details: ['In main memory', 'Waiting for CPU', 'In ready queue']
    },
    running: {
      title: 'Running',
      desc: 'Instructions are actively being executed by the CPU. Only one process can be running per core at a time.',
      color: 'bg-green-600',
      details: ['CPU executing instructions', 'One per core', 'Active execution']
    },
    waiting: {
      title: 'Waiting (Blocked)',
      desc: 'The process is waiting for some event (like I/O completion or a signal) to occur. It cannot run even if CPU is free.',
      color: 'bg-red-500',
      details: ['Waiting for I/O', 'Cannot execute', 'Event completion needed']
    },
    terminated: {
      title: 'Terminated',
      desc: 'The process has finished execution. The OS deallocates resources (memory, open files, etc.).',
      color: 'bg-slate-600',
      details: ['Execution complete', 'Resources deallocated', 'PCB removed']
    },
  };

  const transitions = [
    { from: 'new', to: 'ready', label: 'Admitted' },
    { from: 'ready', to: 'running', label: 'Scheduler Dispatch' },
    { from: 'running', to: 'ready', label: 'Interrupt' },
    { from: 'running', to: 'waiting', label: 'I/O or Event Wait' },
    { from: 'waiting', to: 'ready', label: 'I/O or Event Complete' },
    { from: 'running', to: 'terminated', label: 'Exit' }
  ];

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        Process State Transition Diagram
      </h4>

      {/* State Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {Object.entries(states).map(([key, state], index) => (
          <React.Fragment key={key}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveState(key)}
              className={`
                px-6 py-3 rounded-xl border-2 font-bold transition-all shadow-lg
                ${activeState === key
                  ? `${state.color} text-white border-transparent ring-4 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900`
                  : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                }
              `}
            >
              {state.title}
            </motion.button>
            {index < Object.keys(states).length - 1 && (
              <span className="text-slate-400 font-bold hidden md:inline">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Active State Details */}
      <motion.div
        key={activeState}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`px-4 py-1 ${states[activeState].color} text-white rounded-lg font-bold`}>
            {states[activeState].title}
          </div>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
          {states[activeState].desc}
        </p>
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Characteristics:</p>
          <ul className="space-y-2">
            {states[activeState].details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Relevant Transitions */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Possible Transitions:</p>
          <div className="flex flex-wrap gap-2">
            {transitions
              .filter(t => t.from === activeState || t.to === activeState)
              .map((transition, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                >
                  {transition.label}
                </span>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
