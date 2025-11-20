export const quizzes = {
  'os-fundamentals': {
    id: 'os-fundamentals-quiz',
    title: 'OS Fundamentals Quiz',
    questions: [
      {
        question: 'What is the primary role of an Operating System?',
        options: [
          'To provide a user interface only',
          'To manage hardware and software resources',
          'To run application software',
          'To store data permanently'
        ],
        correctAnswer: 1,
        explanation: 'The OS acts as an intermediary between users and hardware, managing all resources and providing services to applications.'
      },
      {
        question: 'Which architecture keeps only essential services in the kernel?',
        options: [
          'Monolithic Kernel',
          'Microkernel',
          'Layered Approach',
          'Hybrid Kernel'
        ],
        correctAnswer: 1,
        explanation: 'Microkernels keep the kernel minimal with only essential services like IPC and scheduling. Other services run in user space for better stability.'
      },
      {
        question: 'What happens when a driver crashes in a Monolithic kernel?',
        options: [
          'Only that driver stops working',
          'The system automatically restarts the driver',
          'The entire system crashes',
          'Other drivers take over the functionality'
        ],
        correctAnswer: 2,
        explanation: 'In a Monolithic kernel, all services run in kernel space. A driver crash can bring down the entire system because there\'s no isolation.'
      },
      {
        question: 'Which of these is NOT a primary goal of an Operating System?',
        options: [
          'Convenience',
          'Efficiency',
          'Hardware Manufacturing',
          'Security'
        ],
        correctAnswer: 2,
        explanation: 'OS goals include convenience, efficiency, security, and fairness. Hardware manufacturing is not a responsibility of the OS.'
      },
      {
        question: 'What advantage does a Modular kernel have over a traditional Monolithic kernel?',
        options: [
          'Faster boot time',
          'Can load/unload modules without rebooting',
          'Uses less memory',
          'Better security'
        ],
        correctAnswer: 1,
        explanation: 'Modular kernels allow dynamic loading and unloading of kernel modules at runtime without requiring a system reboot, providing flexibility.'
      }
    ]
  },
  'system-internals': {
    id: 'system-internals-quiz',
    title: 'System Internals Quiz',
    questions: [
      {
        question: 'What instruction is used to switch from User Mode to Kernel Mode?',
        options: [
          'JUMP',
          'TRAP/INT',
          'CALL',
          'SWITCH'
        ],
        correctAnswer: 1,
        explanation: 'A TRAP (or INT - software interrupt) instruction triggers a system call, causing a mode switch from User Mode to Kernel Mode.'
      },
      {
        question: 'Which memory segment stores dynamically allocated memory?',
        options: [
          'Stack',
          'Heap',
          'Data',
          'Text'
        ],
        correctAnswer: 1,
        explanation: 'The Heap is used for dynamic memory allocation (malloc in C, new in C++) and grows upward toward higher memory addresses.'
      },
      {
        question: 'What is a Zombie process?',
        options: [
          'A process that runs forever',
          'A process that has terminated but parent hasn\'t called wait()',
          'A process that is crashed',
          'A process waiting for I/O'
        ],
        correctAnswer: 1,
        explanation: 'A zombie process has completed execution but still has an entry in the process table because its parent hasn\'t called wait() to read its exit status.'
      },
      {
        question: 'In a Many-to-One threading model, what happens when one thread blocks?',
        options: [
          'Only that thread blocks',
          'The OS schedules another user thread',
          'The entire process blocks',
          'The kernel creates a new thread'
        ],
        correctAnswer: 2,
        explanation: 'In Many-to-One model, all user threads map to a single kernel thread. If any user thread makes a blocking call, the entire process blocks.'
      },
      {
        question: 'What is the main disadvantage of context switching?',
        options: [
          'It saves the process state',
          'It allows multitasking',
          'It has overhead cost and cache pollution',
          'It prevents deadlocks'
        ],
        correctAnswer: 2,
        explanation: 'Context switching has overhead costs including time to save/restore state, cache pollution, and TLB flushes, which can impact performance.'
      },
      {
        question: 'Which process state indicates the process is waiting for I/O completion?',
        options: [
          'Ready',
          'Running',
          'Waiting/Blocked',
          'New'
        ],
        correctAnswer: 2,
        explanation: 'The Waiting (or Blocked) state means the process is waiting for an event like I/O completion and cannot execute even if CPU is available.'
      },
      {
        question: 'What do threads within the same process share?',
        options: [
          'Stack',
          'Program Counter',
          'Heap and Code section',
          'Thread ID'
        ],
        correctAnswer: 2,
        explanation: 'Threads share the heap, code section, data section, and open files. Each thread has its own stack, program counter, and registers.'
      },
      {
        question: 'Which threading model provides true concurrency with kernel support?',
        options: [
          'Many-to-One',
          'One-to-One',
          'User-level only',
          'Green threads'
        ],
        correctAnswer: 1,
        explanation: 'One-to-One model maps each user thread to a kernel thread, providing true concurrency and allowing parallel execution on multiple cores.'
      }
    ]
  }
};
