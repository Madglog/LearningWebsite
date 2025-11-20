export const flashcards = {
  'os-fundamentals': {
    deckTitle: 'OS Fundamentals Flashcards',
    cards: [
      {
        question: 'What is an Operating System?',
        answer: 'Software that manages computer hardware and software resources and provides services for computer programs. It acts as an intermediary between users and hardware.',
        hint: 'Think about what sits between hardware and applications',
        example: 'Windows, Linux, macOS are examples of operating systems'
      },
      {
        question: 'What is a Monolithic Kernel?',
        answer: 'An OS architecture where all services (process management, memory management, drivers, file systems) run in a single kernel address space with direct function calls.',
        hint: 'Everything runs together in one big space',
        example: 'Linux and traditional Unix use monolithic kernels'
      },
      {
        question: 'What is a Microkernel?',
        answer: 'An OS architecture that keeps only essential services (IPC, scheduling, basic memory management) in the kernel, while other services run in user space.',
        hint: 'Minimal kernel, maximum stability',
        example: 'MINIX and QNX are microkernel-based systems'
      },
      {
        question: 'What are the 4 main goals of an OS?',
        answer: '1. Convenience (user-friendly), 2. Efficiency (resource optimization), 3. Robustness (error handling and reliability), 4. Fairness (equitable resource distribution)',
        hint: 'Think CERF',
        example: 'Time-sharing systems demonstrate fairness by giving each user equal CPU time'
      },
      {
        question: 'What is the difference between Monolithic and Microkernel?',
        answer: 'Monolithic: All services in kernel (fast but risky). Microkernel: Only essential services in kernel (slower but safer and more stable).',
        hint: 'Speed vs Safety trade-off',
        example: 'If a driver crashes in Monolithic, system crashes. In Microkernel, just that service restarts.'
      },
      {
        question: 'What is a Hybrid Kernel?',
        answer: 'Combines Monolithic and Microkernel approaches. Critical services run in kernel for speed, while non-critical services run in user space for stability.',
        hint: 'Best of both worlds',
        example: 'Windows and macOS use hybrid kernels'
      },
      {
        question: 'What is a Modular Kernel?',
        answer: 'A kernel with a core that can dynamically load and unload modules (like drivers) at runtime without rebooting the system.',
        hint: 'Think plug and play',
        example: 'Modern Linux with loadable kernel modules (LKMs)'
      }
    ]
  },
  'system-internals': {
    deckTitle: 'System Internals Flashcards',
    cards: [
      {
        question: 'What is User Mode?',
        answer: 'A restricted CPU execution mode where programs have limited access to hardware and cannot execute privileged instructions. Applications run in this mode for safety.',
        hint: 'Ring 3, restricted access',
        example: 'Your web browser and text editor run in User Mode'
      },
      {
        question: 'What is Kernel Mode?',
        answer: 'A privileged CPU execution mode where the OS kernel has full access to hardware and can execute all CPU instructions. Required for low-level operations.',
        hint: 'Ring 0, full power',
        example: 'Device drivers and system calls execute in Kernel Mode'
      },
      {
        question: 'What is a System Call?',
        answer: 'An interface that allows user programs to request services from the OS kernel. It triggers a mode switch from User Mode to Kernel Mode.',
        hint: 'The bridge between user programs and kernel',
        example: 'open(), read(), write(), fork() are system calls'
      },
      {
        question: 'What is the Stack memory segment?',
        answer: 'Memory region storing local variables, function parameters, return addresses, and function call frames. Grows downward toward lower addresses.',
        hint: 'Function calls and local vars',
        example: 'When you call a function, its local variables go on the stack'
      },
      {
        question: 'What is the Heap memory segment?',
        answer: 'Memory region for dynamic allocation (malloc/new). Grows upward toward higher addresses. Programmer must manually manage this memory.',
        hint: 'malloc and new',
        example: 'int *arr = malloc(100 * sizeof(int)); allocates on heap'
      },
      {
        question: 'What are the 5 Process States?',
        answer: 'New (being created), Ready (waiting for CPU), Running (executing), Waiting/Blocked (waiting for event), Terminated (finished execution)',
        hint: 'Think of a process lifecycle',
        example: 'Process moves from Ready → Running when scheduler selects it'
      },
      {
        question: 'What is a Zombie Process?',
        answer: 'A process that has completed execution (called exit()) but still has an entry in the process table because parent hasn\'t called wait().',
        hint: 'Dead but not gone',
        example: 'Child exits but parent never calls wait() - creates zombie'
      },
      {
        question: 'What is an Orphan Process?',
        answer: 'A process whose parent has terminated before it did. The init/systemd process (PID 1) adopts it and will eventually clean it up.',
        hint: 'Parent died first',
        example: 'If parent crashes, OS reassigns children to init process'
      },
      {
        question: 'What is Context Switching?',
        answer: 'The process of saving the state of a currently running process and loading the state of the next process to run on the CPU.',
        hint: 'Switching between processes',
        example: 'OS saves Process A\'s registers/PC, loads Process B\'s state'
      },
      {
        question: 'What is a Thread?',
        answer: 'A lightweight process - the basic unit of CPU utilization. Has its own PC, registers, and stack, but shares code, data, and files with other threads in the same process.',
        hint: 'Lightweight, shares resources',
        example: 'A web browser may use one thread for UI, another for downloads'
      },
      {
        question: 'What is the PCB (Process Control Block)?',
        answer: 'A data structure maintained by OS for each process containing process state, PID, program counter, registers, memory limits, open files, and scheduling info.',
        hint: 'The brain of a process',
        example: 'When context switching, OS saves/restores the PCB'
      },
      {
        question: 'What is Many-to-One threading model?',
        answer: 'Many user-level threads mapped to one kernel thread. Fast thread operations but one blocking call blocks all threads. No true parallelism.',
        hint: 'All user threads → 1 kernel thread',
        example: 'Green threads in early Java used this model'
      },
      {
        question: 'What is One-to-One threading model?',
        answer: 'Each user thread mapped to one kernel thread. Provides true concurrency but creating user threads is expensive as it creates kernel threads.',
        hint: '1 user thread → 1 kernel thread',
        example: 'Modern Linux and Windows use this model'
      },
      {
        question: 'What is Data Parallelism?',
        answer: 'Distributing subsets of the same data across multiple cores and performing the same operation on each subset simultaneously.',
        hint: 'Same operation, different data',
        example: 'Processing each pixel of an image on different cores'
      },
      {
        question: 'What is Task Parallelism?',
        answer: 'Distributing different tasks (threads) across multiple cores, where each task may perform different operations.',
        hint: 'Different operations, possibly different data',
        example: 'One thread handles UI, another handles network, another handles computation'
      }
    ]
  }
};
