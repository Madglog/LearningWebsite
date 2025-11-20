import {
  BookOpen,
  Cpu,
  Layers,
  Lock,
  HardDrive,
  Network,
  Terminal,
  Zap
} from 'lucide-react';

export const modules = [
  {
    id: 'os-fundamentals',
    title: 'OS Fundamentals',
    icon: BookOpen,
    color: 'blue',
    totalSections: 5,
    description: 'Core concepts and architecture of Operating Systems',
    sections: [
      {
        id: 'intro',
        title: 'What is an Operating System?',
        icon: BookOpen,
        content: `
An Operating System (OS) is the most important software that runs on a computer. It manages the computer's memory, processes, and all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer's language.

### Key Responsibilities

**Resource Allocator:**
- Manages CPU time allocation
- Controls memory space distribution
- Handles I/O device access
- Resolves resource conflicts between competing requests

**Control Program:**
- Controls execution of user programs
- Prevents errors and improper use of the computer
- Provides security and protection
- Manages user access and permissions

### The Layered View

Operating systems can be visualized as layers of abstraction:

1. **Hardware Layer** - Physical components (CPU, RAM, Disk, I/O devices)
2. **Kernel** - Core OS functions (process management, memory management)
3. **System Libraries** - Standard functions and utilities
4. **System Utilities** - Essential programs (shell, compilers, text editors)
5. **Application Programs** - User applications (browsers, games, editors)

Each layer only interacts with the layers immediately above and below it, providing clean abstraction and modularity.
        `
      },
      {
        id: 'goals',
        title: 'Primary Goals of an OS',
        icon: Zap,
        content: `
Operating systems are designed with several critical goals in mind to provide an efficient and user-friendly computing experience.

### 1. Convenience
Making the computer system convenient to use by:
- Hiding hardware complexity from users
- Providing high-level abstractions (files instead of disk sectors)
- Offering a consistent interface across different hardware
- Enabling multitasking and concurrent operations

### 2. Efficiency
Maximizing resource utilization:
- CPU should rarely be idle
- Memory should be used optimally
- I/O devices should be utilized effectively
- Minimizing response time and maximizing throughput

### 3. Robustness & Reliability
Ensuring system stability:
- Graceful error handling
- Recovery from failures
- Protection from malware
- Isolation between processes
- Data integrity and consistency

### 4. Fairness
Ensuring equitable resource distribution:
- Fair CPU time allocation
- Preventing starvation
- Priority-based scheduling
- Quality of Service (QoS) guarantees

### 5. Security
Protecting system and user data:
- Authentication and authorization
- Access control mechanisms
- Encryption and secure communication
- Protection from malicious software
        `
      },
      {
        id: 'architectures',
        title: 'OS Architecture Patterns',
        icon: Layers,
        content: `
The internal structure of an operating system significantly impacts its performance, maintainability, and stability.

### 1. Monolithic Kernel

**Description:** All OS services run in a single large kernel address space.

**Components:**
- Process management
- Memory management
- File systems
- Device drivers
- Network stack

**Advantages:**
- ✅ Fast performance (no context switches between services)
- ✅ Direct function calls within kernel
- ✅ Efficient inter-module communication

**Disadvantages:**
- ❌ Large kernel size
- ❌ Poor fault isolation (driver crash = system crash)
- ❌ Difficult to maintain and debug
- ❌ Security vulnerabilities affect entire system

**Examples:** Traditional Unix, Linux, MS-DOS

### 2. Microkernel

**Description:** Minimal kernel with only essential services; other services run in user space.

**Kernel Services:**
- Inter-Process Communication (IPC)
- Basic scheduling
- Low-level memory management
- Interrupt handling

**User-Space Services:**
- Device drivers
- File systems
- Network protocols
- Higher-level services

**Advantages:**
- ✅ Better security and stability
- ✅ Fault isolation (service crash doesn't crash kernel)
- ✅ Easier to extend and maintain
- ✅ Better modularity

**Disadvantages:**
- ❌ Performance overhead (more context switches)
- ❌ Increased message passing
- ❌ More complex IPC mechanisms

**Examples:** MINIX, QNX, Mach

### 3. Hybrid Kernel

**Description:** Combines monolithic and microkernel approaches.

**Strategy:**
- Critical services in kernel for performance
- Non-critical services in user space for stability
- Balance between speed and reliability

**Advantages:**
- ✅ Better performance than pure microkernel
- ✅ Better stability than pure monolithic
- ✅ Flexibility in design decisions

**Examples:** Windows NT/10/11, macOS, DragonFly BSD

### 4. Modular Kernel

**Description:** Core kernel with dynamically loadable modules.

**Features:**
- Core kernel provides essential services
- Modules can be loaded/unloaded at runtime
- No need to reboot for adding features
- Similar to monolithic but more flexible

**Advantages:**
- ✅ Flexible and extensible
- ✅ Good performance
- ✅ Smaller core kernel
- ✅ Dynamic configuration

**Examples:** Modern Linux (with loadable kernel modules)

### 5. Layered Approach

**Description:** OS divided into hierarchical layers.

**Structure:**
- Layer 0: Hardware
- Layer 1: Memory management
- Layer 2: Process management
- Layer 3: I/O management
- Layer 4: User programs

**Advantages:**
- ✅ Easy to debug (layer by layer)
- ✅ Clear separation of concerns
- ✅ Easier verification

**Disadvantages:**
- ❌ Performance overhead
- ❌ Difficulty in proper layering
- ❌ Layer traversal costs

**Examples:** THE operating system, early versions of Windows NT
        `
      }
    ]
  },
  {
    id: 'system-internals',
    title: 'System Internals',
    icon: Cpu,
    color: 'purple',
    totalSections: 7,
    description: 'Deep dive into processes, threads, memory, and system calls',
    sections: [
      {
        id: 'system-calls',
        title: 'System Calls & Dual Mode',
        icon: Terminal,
        content: `
System calls provide the interface between a process and the operating system. They are the only way for user programs to request OS services.

### Dual Mode Operation

Modern operating systems operate in two distinct modes to protect the system:

**User Mode (Ring 3):**
- Limited access to hardware
- Cannot execute privileged instructions
- Cannot directly access memory of other processes
- Applications run here
- Safer but restricted

**Kernel Mode (Ring 0):**
- Full access to hardware
- Can execute all CPU instructions
- Can access all memory
- OS kernel runs here
- Powerful but dangerous

### System Call Workflow

1. **Application makes a system call** (e.g., \`open("file.txt", O_RDONLY)\`)
2. **Library wrapper is called** (libc function)
3. **TRAP/INT instruction executes** (software interrupt)
4. **Mode switch:** User Mode → Kernel Mode
5. **Context saved:** Registers, Program Counter, Stack Pointer
6. **System call handler executes** (kernel looks up system call table)
7. **Kernel performs the operation** (with full privileges)
8. **Result is prepared** (return value, error codes)
9. **Mode switch:** Kernel Mode → User Mode
10. **Context restored:** Program continues execution
11. **Result returned to application**

### Parameter Passing Methods

**1. Registers:**
- Fastest method
- Parameters stored in CPU registers
- Limited by number of available registers
- Used for simple calls with few parameters

**2. Memory Block/Table:**
- Parameters stored in memory block
- Address of block passed in register
- Unlimited parameter size
- Used by Linux, Solaris

**3. Stack:**
- Parameters pushed onto stack by program
- Popped by kernel
- Unlimited parameter size
- Most flexible
- Slight performance overhead

### Common System Call Categories

**Process Control:**
- \`fork()\` - Create new process
- \`exit()\` - Terminate process
- \`wait()\` - Wait for child process
- \`exec()\` - Execute program

**File Management:**
- \`open()\` - Open file
- \`read()\` - Read from file
- \`write()\` - Write to file
- \`close()\` - Close file

**Device Management:**
- \`ioctl()\` - Device control
- \`read()\` - Read from device
- \`write()\` - Write to device

**Information Maintenance:**
- \`getpid()\` - Get process ID
- \`time()\` - Get system time
- \`sleep()\` - Sleep for time

**Communication:**
- \`pipe()\` - Create pipe
- \`socket()\` - Create socket
- \`send()\` - Send message
- \`receive()\` - Receive message
        `
      },
      {
        id: 'process-concept',
        title: 'Process Concept & Lifecycle',
        icon: Cpu,
        content: `
A process is a program in execution. It's the fundamental unit of work in an operating system.

### Program vs Process

**Program:**
- Passive entity (executable file on disk)
- Static instructions and data
- Can exist indefinitely
- Multiple processes can run same program

**Process:**
- Active entity (program in execution)
- Dynamic with changing state
- Has limited lifetime
- Each has unique Process ID (PID)

### Process Components

**1. Text Section (Code):**
- Compiled machine code
- Read-only to prevent modification
- Can be shared between processes
- Contains program instructions

**2. Data Section:**
- Global variables
- Static variables
- Initialized data segment
- BSS (uninitialized data)

**3. Heap:**
- Dynamically allocated memory
- Grows upward (toward higher addresses)
- malloc(), new allocations
- Manual management required

**4. Stack:**
- Function call frames
- Local variables
- Function parameters
- Return addresses
- Grows downward (toward lower addresses)

**5. Program Counter (PC):**
- Address of next instruction
- Saved/restored on context switch

**6. CPU Registers:**
- Accumulator
- Index registers
- Stack pointer
- General-purpose registers

### Process States

**New:**
- Process being created
- PCB allocated
- Resources being assigned
- Not yet ready to execute

**Ready:**
- Process loaded in memory
- Waiting for CPU allocation
- In ready queue
- Can execute when scheduled

**Running:**
- Instructions being executed
- Has CPU allocated
- One process per core
- Active execution

**Waiting (Blocked):**
- Waiting for I/O completion
- Waiting for event/signal
- Cannot execute even if CPU free
- In waiting queue

**Terminated:**
- Finished execution
- Exit status set
- Resources being deallocated
- PCB will be removed

### Context Switching

When the CPU switches from one process to another:

**Steps:**
1. Save state of current process (in PCB)
2. Update PCB (state, registers, PC)
3. Move PCB to appropriate queue
4. Select new process to run (scheduling)
5. Load state of new process (from PCB)
6. Resume execution of new process

**Cost:**
- Direct: Time to save/restore registers
- Indirect: Cache pollution, TLB flush
- Typically 1-1000 microseconds

**Reasons for Context Switch:**
- Time quantum expires (time-sharing)
- Process blocks on I/O
- Higher priority process arrives
- Interrupt occurs
        `
      },
      {
        id: 'threads',
        title: 'Threads & Multithreading',
        icon: Layers,
        content: `
A thread is a lightweight process. It's the basic unit of CPU utilization, consisting of a thread ID, program counter, register set, and stack.

### Thread vs Process

**Process:**
- Heavyweight
- Own address space
- Own resources
- Expensive creation/destruction
- Expensive context switch

**Thread:**
- Lightweight
- Shared address space
- Shared resources
- Cheap creation/destruction
- Cheap context switch

### What Threads Share

- Code section
- Data section
- Heap
- Open files
- Signals
- Process ID

### What Threads Don't Share

- Thread ID
- Program Counter
- Register set
- Stack
- Local variables

### Benefits of Multithreading

**1. Responsiveness:**
- UI remains responsive while processing
- Can continue execution if part blocks
- Better user experience

**2. Resource Sharing:**
- Threads share memory and resources
- No need for shared memory mechanisms
- Easier communication

**3. Economy:**
- Cheaper than process creation
- Less overhead for context switching
- More efficient resource utilization

**4. Scalability:**
- Can utilize multiple CPU cores
- Parallel execution
- Better performance on multicore systems

### Multithreading Models

**1. Many-to-One:**
- Many user threads → One kernel thread
- Thread management in user space
- Fast thread operations
- But: One blocking call blocks all
- No parallel execution
- Example: Green threads

**2. One-to-One:**
- One user thread → One kernel thread
- True concurrency
- If one blocks, others continue
- But: Creating user thread = kernel thread (expensive)
- Limited by kernel thread limit
- Example: Windows, Linux

**3. Many-to-Many:**
- M user threads → N kernel threads (M ≥ N)
- Best of both worlds
- Flexible and efficient
- But: Complex to implement
- Example: Older Solaris

**4. Two-Level:**
- Many-to-many with bound threads
- Allows both multiplexing and binding
- Very flexible
- Example: IRIX, HP-UX

### Multicore Programming Challenges

**1. Identifying Tasks:**
- Finding areas suitable for parallelization
- Dividing work into concurrent tasks

**2. Balance:**
- Tasks should perform equal work
- Avoid one thread doing all work

**3. Data Splitting:**
- Dividing data among tasks
- Ensuring proper distribution

**4. Data Dependency:**
- Synchronization between tasks
- Managing shared data access

**5. Testing and Debugging:**
- Race conditions
- Deadlocks
- Non-deterministic behavior

### Types of Parallelism

**Data Parallelism:**
- Same operation on different data
- Distribute data across cores
- Each performs same task
- Example: Image processing (each core processes part of image)

**Task Parallelism:**
- Different operations on same/different data
- Distribute tasks across cores
- Each performs different task
- Example: One thread for UI, one for computation, one for I/O
        `
      }
    ]
  }
];
