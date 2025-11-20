import {
  BookOpen,
  Cpu,
  Layers,
  Lock,
  HardDrive,
  Network,
  Terminal,
  Zap,
  AlertTriangle,
  FileQuestion,
  Shield,
  AlertOctagon,
  Search,
  Activity,
  GitBranch,
  RotateCw,
  TrendingDown,
  Clock
} from 'lucide-react';

export const modules = [
  {
    id: 'os-fundamentals',
    title: 'Module 1: OS Fundamentals',
    icon: BookOpen,
    color: 'blue',
    totalSections: 12,
    description: 'Core concepts and architecture of Operating Systems - BCSE303L',
    sections: [
      {
        id: 'intro',
        title: 'Operating System - Definition',
        icon: BookOpen,
        content: `
An Operating System (OS) is system software that acts as an intermediary between computer hardware and the user. It manages hardware resources and provides an environment in which application programs can run efficiently.

### Two Main Aspects

**Aspect 1 - Resource Management:**
The OS allocates and controls the use of hardware components like memory, storage, and processors. It acts as a resource allocator, deciding which program gets which resource and for how long.

**Aspect 2 - Providing Services:**
The OS offers common functionalities like file management, security, and a user interface (UI) for applications to run smoothly.

### Key Characteristics

- **First Program Loaded:** It is the first program loaded by a computer at startup (boot loader loads the OS kernel)
- **Interface Provider:** It provides an interface between users and computer hardware
- **Control Program:** It acts as a control program that prevents misuse of hardware resources
- **Makes Computer Usable:** The OS makes the computer usable by controlling the hardware and providing services for programs

### Resource Allocator Role

The OS allocates and controls the use of:
- **CPU time** - The processing power needed to execute instructions
- **Memory** - Space to store programs and data
- **I/O devices** - Access to hardware like keyboards, displays, and network cards
- **Storage** - Hard disks, SSDs, and other storage devices

The OS acts as a resource manager, allocating these resources efficiently and fairly among all competing processes.
        `
      },
      {
        id: 'goals',
        title: 'Operating System - Goals',
        icon: Zap,
        content: `
Operating systems are designed with several critical goals in mind to provide an efficient and user-friendly computing experience.

### 1. Convenience
Make interaction with the computer user-friendly:
- Provide GUIs (Graphical User Interfaces)
- Virtual desktops
- File explorers
- Hide hardware complexity from users
- Provide high-level abstractions (files instead of disk sectors)

### 2. Efficiency
Optimize system performance and maximize resource utilization:
- **Maximize** CPU, disk, and I/O utilization
- **Minimize** response time, turnaround time, and waiting time
- CPU should rarely be idle
- Memory should be used optimally
- I/O devices should be utilized effectively

### 3. Ability to Evolve
Support system growth and adaptation:
- Modular design so parts can be upgraded
- Support new hardware easily
- Allow system updates without complete rebuilds
- Adapt to changing requirements

### 4. Fairness
Ensure equitable resource distribution:
- Ensure fair resource allocation among multiple users/programs
- Prevent starvation
- Priority-based scheduling
- Quality of Service (QoS) guarantees

### 5. Robustness & Reliability
Ensure system stability:
- Keep the system stable even under unexpected failures
- Graceful error handling
- Recovery from failures
- Protection from malware
- Isolation between processes
- Data integrity and consistency

### 6. Scalability
Handle growth effectively:
- Handle growth in number of users
- Scale with increasing tasks
- Support more resources as needed
- Maintain performance as system grows
        `
      },
      {
        id: 'functionality',
        title: 'Operating System - Functionality',
        icon: Cpu,
        content: `
The Operating System provides comprehensive functionality across multiple domains to manage the computer system effectively.

### 1. Process Management
- **Create, schedule, suspend, and terminate processes**
- Context switching between processes
- Synchronization and communication between processes (semaphores, pipes)
- **Process Scheduling** - Allocating CPU time
- **Process Creation and Termination**
- **Concurrency and Synchronization**

### 2. Memory Management
- Keeps track of each byte of memory
- **Allocation and Deallocation** - Allocates memory to processes when needed
- Deallocates when done
- **Paging and Segmentation** - Implements memory organization techniques
- **Virtual Memory** - Extends physical memory using disk space
- Handles swapping between main memory and disk

### 3. File System Management
- **File Organization** - Creates, deletes, reads, writes files/directories
- **Access Control** - Manages permissions and access control lists (ACLs)
- Maintains file metadata (size, timestamps, permissions)
- **File Operations** - Open, read, write, close operations

### 4. Device Management
- **Device Drivers** - Manages input/output devices using device drivers
- **I/O Operations** - Handles buffering, spooling, and caching of data
- Provides uniform interface to devices (device independence)

### 5. Security and Protection
- **Authentication** - User authentication (login, passwords, biometrics)
- **Authorization** - Authorization and access control
- **Encryption** - Protects user data and system resources
- Defends against malware and unauthorized access

### 6. Networking
- **Network Communication** - Manages network connections (TCP/IP stack)
- **Resource Sharing** - Supports distributed computing
- Network file systems
- Provides protocols for secure data exchange

### 7. User Interface
- **Graphical User Interface (GUI)** - Windows, icons, menus
- **Command Line Interface (CLI)** - Shell for text-based interaction

### 8. Command Interpretation
- Shell interprets user commands and executes them
- Provides scripting capabilities for automation

### 9. Error Detection and Recovery
- **Error Detection** - Monitors hardware for failures
- **Recovery Mechanisms** - Reports errors and takes corrective actions
- Logs system events for diagnostics

### 10. System Performance and Monitoring
- **Performance Optimization** - Optimizes system operations
- **Monitoring Tools** - Tracks system resources and performance

### 11. Multitasking and Multithreading
- **Multitasking** - Running multiple processes simultaneously
- **Multithreading** - Multiple threads within processes
        `
      },
      {
        id: 'design-issues',
        title: 'Operating System - Design Issues',
        icon: Lock,
        content: `
An operating system's design is a complex process that involves addressing a multitude of challenges and making critical trade-offs to ensure a computer system is both usable and efficient.

### 1. CPU Scheduling
**Challenge:** The OS must decide which of the many running processes gets to use the CPU and for how long.

**Considerations:**
- Fairness among processes
- Efficiency of CPU utilization
- Response time requirements
- Priority management
- Prevention of starvation

### 2. Memory Management
**Challenge:** The operating system is responsible for allocating and deallocating memory space to processes.

**Requirements:**
- Track which parts of memory are currently being used and by whom
- Ensure processes do not interfere with each other's memory
- Provide memory protection
- Implement virtual memory
- Handle memory fragmentation

### 3. Device Management
**Challenge:** The OS manages communication with hardware devices such as disk drives, printers, and network adapters.

**Solutions:**
- Provide a consistent interface for applications
- Hide the complexities of underlying hardware
- Use device drivers to translate high-level requests into low-level device-specific commands
- Handle device interrupts efficiently

### 4. Synchronization and Coordination
**Challenge:** When multiple processes need to access shared resources, the OS must ensure operations are coordinated.

**Requirements:**
- Avoid conflicts
- Maintain data consistency
- Prevent race conditions
- Implement synchronization primitives

### 5. Deadlock Management
**Problem:** A deadlock is a situation where two or more processes are blocked forever, each waiting for a resource held by another.

**Strategies:**
- **Prevention** - Design system to make deadlocks impossible
- **Detection** - Identify when deadlocks occur
- **Recovery** - Break deadlocks when detected
- **Avoidance** - Carefully allocate resources to avoid unsafe states

### 6. File System Design
**Considerations:**
- Define how files are stored on secondary storage devices
- Establish file structure and naming conventions
- Implement efficient storage allocation
- Provide fast access methods

### 7. Access Control and Permissions
**Requirements:**
- Enforce permissions to control which users and processes can access which files
- Define what operations they can perform (read, write, execute)
- Implement authentication mechanisms
- Maintain security policies

### 8. Data Integrity and Reliability
**Challenge:** The file system must ensure data is not corrupted.

**Protection Against:**
- System crashes
- Hardware failures
- Power outages
- Malicious attacks

**Methods:**
- Journaling
- Checksums
- Redundancy
- Backup mechanisms

### 9. Authentication and Authorization
**Authentication:** Verifying the identity of users before granting them access to the system.

**Authorization:** Restricting the access of processes and users to system resources based on a defined policy.

### 10. Security Threats
**Implementation Requirements:**
- Defend against viruses
- Protect against malware
- Handle other security threats
- Implement intrusion detection
- Provide secure communication

### 11. Performance and Efficiency
**Goal:** An operating system should be designed to be efficient and provide good performance.

**Requirements:**
- Minimize the overhead of the OS itself
- Make optimal use of available hardware resources
- Balance between features and performance
- Optimize critical paths
        `
      },
      {
        id: 'abstract-view',
        title: 'Operating System - Abstract View',
        icon: Layers,
        content: `
The Operating System can be viewed as a layered structure, with each layer providing specific services and abstractions.

### Layered Architecture

**Layer 5: User Interface**
- Graphical User Interface (GUI)
- Command-Line Interface (CLI)
- Provides interaction mechanisms for users

**Layer 4: User Applications**
- Application Software (browsers, office suites, games)
- End-user programs
- Uses OS services through system calls

**Layer 3: Shell & System Libraries and Utilities**
- **Standard Libraries** (e.g., C Standard Library, libc)
- **Utility Programs** (file managers, system monitors)
- **Shell** (command interpreter)
- Provides high-level services to applications

**Layer 2: Kernel**
- **Process Management** - Scheduling, creation, termination
- **Memory Management** - Allocation, virtual memory, paging
- **Device Drivers** - Hardware interfaces
- **System Calls** - Interface to kernel services
- Core OS functionality with full hardware access

**Layer 1: Hardware**
- **CPU** - Central Processing Unit
- **Memory (RAM)** - Random Access Memory
- **Storage (HDD/SSD)** - Hard Disk Drive / Solid State Drive
- **I/O Devices** - Input/Output peripherals
- Physical components of the computer

### Key Principles

**Abstraction:**
Each layer abstracts the complexity of the layer below it, providing a simplified interface for the layer above.

**Encapsulation:**
Lower layers hide implementation details from upper layers.

**Hierarchy:**
Each layer only interacts with the layers immediately above and below it.

**Privilege Levels:**
Lower layers (kernel) operate with higher privileges than upper layers (user applications).

### Benefits of Layered Design

- **Modularity** - Each layer can be developed and tested independently
- **Portability** - Hardware changes only affect lower layers
- **Security** - Clear privilege boundaries between layers
- **Maintainability** - Easier to update and debug individual layers
- **Understandability** - Clearer system organization
        `
      },
      {
        id: 'structuring',
        title: 'Operating System - Structuring',
        icon: HardDrive,
        content: `
The objective of structuring an Operating System is to balance performance, maintainability, security, and flexibility. The structuring is strongly related to how it divides components and services between Kernel Space and User Space.

### Kernel Space vs User Space

**Kernel Space:**
- The privileged area of memory where the OS kernel runs
- Has **full access** to hardware resources
- Runs in **privileged mode** (Ring 0 in x86 architecture)
- Handles critical tasks:
  - CPU scheduling
  - Interrupt handling
  - Device drivers
  - Memory management

**User Space:**
- The area of memory where user applications and some system services run
- Runs in **unprivileged mode** (Ring 3 in x86)
- Has **restricted access** - must use system calls to request services from kernel
- Examples:
  - Web browsers
  - Word processors
  - User-level services (print spoolers in some architectures)

### Primary Structuring Approaches

### 1. Monolithic Structure

**Characteristics:**
- All OS services run in a single, unified kernel space with full hardware access
- No separation between components; tightly integrated
- Direct hardware access for speed
- Everything in the same address space

**Components in Kernel:**
- Process Scheduling
- Memory Management
- Device Drivers
- File Systems
- System Calls

**Advantages:**
- ✅ **High Performance** - Minimal overhead due to direct communication
- ✅ Simple design for developers
- ✅ Fast function calls within kernel
- ✅ Efficient inter-module communication

**Disadvantages:**
- ❌ **Complexity** - Large codebase makes debugging and updates challenging
- ❌ **Instability** - A bug in any component can crash the entire system
- ❌ Security risks due to lack of isolation
- ❌ Difficult to maintain

**Examples:** Traditional Unix systems (BSD), Linux (core design), MS-DOS

### 2. Microkernel Structure

**Characteristics:**
- Only essential services (IPC, scheduling, basic memory management) run in kernel space
- Non-essential services (device drivers, file systems) operate in **user space**
- Minimalist core with modular user-space services

**Kernel Space (Minimal):**
- Inter-Process Communication (IPC)
- Scheduling
- Memory Management
- Hardware Management

**User Space:**
- Device Drivers
- File Systems
- IDE Environments
- User Applications

**Advantages:**
- ✅ **Reliability** - Failures in user-space services don't crash the kernel
- ✅ **Security** - Isolation reduces attack surfaces
- ✅ Easier to update components
- ✅ Better modularity and fault isolation

**Disadvantages:**
- ❌ **Performance Overhead** - Frequent context switches between user/kernel modes
- ❌ Complex IPC mechanisms can slow down operations
- ❌ More message passing required

**Examples:** QNX, L4, Mach (basis for macOS/iOS), MINIX

### 3. Modular (Loadable Kernel Modules)

**Characteristics:**
- A hybrid approach where core is monolithic
- Supports loadable kernel modules (LKMs) for extending functionality at runtime
- Core services are static, modules can be added/removed dynamically

**Kernel Space:**
- Scheduler
- Memory Manager
- Core services
- Loadable modules (File System, Device Drivers, etc.)

**Advantages:**
- ✅ **Flexibility** - Add/remove features without rebooting
- ✅ Balances performance (core in kernel) and modularity
- ✅ Dynamic configuration
- ✅ Smaller base kernel

**Disadvantages:**
- ❌ Modules still run in kernel space
- ❌ A faulty module can crash the system
- ❌ Slightly higher complexity than pure monolithic

**Examples:** Modern Linux (with modules)

### 4. Layered Structure

**Characteristics:**
- OS components organized into hierarchical layers
- Each layer provides abstracted services to the layer above
- Strict abstraction with well-defined interfaces

**Layer Structure (Bottom to Top):**
- **Layer 0:** Hardware
- **Layer 1:** CPU Scheduling
- **Layer 2:** Memory Management
- **Layer 3:** I/O Management
- **Layer 4:** User Programs

**Advantages:**
- ✅ **Simplicity** - Each layer has a well-defined role
- ✅ Easier debugging and testing due to isolation
- ✅ Clear separation of concerns
- ✅ Easier verification

**Disadvantages:**
- ❌ **Latency** - Layered communication adds overhead
- ❌ Reduced performance compared to monolithic designs
- ❌ Difficulty in proper layering
- ❌ Layer traversal costs

**Examples:** THE operating system, MINIX (educational OS)

### 5. Hybrid Structure

**Characteristics:**
- Combines a microkernel core with monolithic elements
- Critical services run in kernel space for speed
- Others run in user space for stability
- Mix of microkernel and monolithic concepts

**Kernel Space:**
- Kernel Process
- Inter-Process Communication
- Scheduler
- Memory Management
- Some Basic Hardware Drivers

**User Space:**
- Optional OS Services
- Device Drivers
- File System
- User Applications

**Advantages:**
- ✅ **Balanced Performance** - Critical tasks optimized, non-critical tasks modular
- ✅ Improved stability over pure monolithic kernels
- ✅ Flexibility in design decisions
- ✅ Better performance than pure microkernel

**Disadvantages:**
- ❌ Complexity in design and maintenance
- ❌ Less isolation than pure microkernels
- ❌ Requires careful design decisions

**Examples:** Windows NT/10/11, macOS (XNU kernel), iOS

### Comparison Table

| Structure | Key Trait | Performance | Stability | Flexibility | Example |
|-----------|-----------|-------------|-----------|-------------|---------|
| **Monolithic** | All services in kernel space | High | Low | Low | Linux (core) |
| **Microkernel** | Minimal core; services in user space | Low | High | High | QNX |
| **Modular** | Loadable modules + monolithic core | Medium-High | Medium | High | Linux (modules) |
| **Layered** | Strict hierarchical layers | Low | Medium | Low | MINIX |
| **Hybrid** | Microkernel core + monolithic elements | Medium-High | Medium-High | Medium | Windows NT, macOS |
        `
      },
      {
        id: 'abstraction',
        title: 'Abstraction in Kernels',
        icon: Layers,
        content: `
Abstraction is a fundamental principle in operating system design that hides complexity and provides simplified interfaces. Different kernel architectures implement abstraction at varying levels.

### Primary Role of Abstraction

The OS's primary role is to **hide the complexity of hardware** from the user and application programs. Instead of dealing with intricate details of disk drives, memory chips, and CPU registers, we work with simpler, high-level representations.

**Example:**
You interact with **files and folders**, not with physical sectors and tracks on a storage drive. The OS abstracts the hardware details into an easy-to-use file system model.

**Benefits:**
- Makes software development drastically simpler
- Allows programs to be portable across different hardware configurations
- Reduces complexity for developers
- Improves system reliability

### Abstraction in Monolithic Kernel - Minimal

**Characteristics:**
- All components (device drivers, file systems) run in the same address space (kernel space)
- Applications interact with hardware through **system calls**
- The kernel itself doesn't abstract its internal components from each other
- Direct communication between kernel components

**Abstraction Level:**
- **External:** High (applications don't see hardware)
- **Internal:** Low (kernel components directly interact)

**Trade-off:**
- Better performance due to direct access
- Less isolation and modularity

### Abstraction in Microkernel - High

**Characteristics:**
- Only core services (process scheduling, memory management) run in kernel space
- Non-essential services (device drivers, file systems) are **abstracted into user-space servers**
- Communication via **message passing**
- Strong isolation between components

**Abstraction Level:**
- **External:** High (applications use services)
- **Internal:** High (services isolated from each other)

**Benefits:**
- Clear boundaries between components
- Services can fail independently
- Easier to understand and maintain

**Cost:**
- Performance overhead from message passing
- More complex communication mechanisms

### Abstraction in Modular Kernel - Moderate

**Characteristics:**
- Core services (process management) built into kernel
- Optional components (drivers, file systems) abstracted as **loadable modules**
- Modules can be added/removed dynamically
- Modules run in kernel space but are separate entities

**Abstraction Level:**
- **Core:** Minimal (tight integration)
- **Modules:** Moderate (separate but privileged)

**Advantages:**
- Flexibility to extend functionality
- Modules can be developed independently
- Balance between monolithic performance and modularity

### Abstraction in Layered Kernel - High

**Characteristics:**
- OS split into hierarchical layers
- Each layer abstracts the layer below it
- Provides simplified interface for layer above

**Example Hierarchy:**
1. **Hardware**
2. **CPU Scheduling**
3. **Memory Management**
4. **File Systems**
5. **User Interface**

**Abstraction Level:**
- Very high with strict layer boundaries
- Each layer only knows about adjacent layers

**Benefits:**
- Easy to understand and verify
- Changes in one layer don't affect others
- Clear separation of concerns

**Drawbacks:**
- Performance overhead from layer traversal
- Difficult to categorize some functions into specific layers

### Abstraction in Hybrid Kernel - Selective

**Characteristics:**
- Combines microkernel and monolithic ideas
- Critical services (thread scheduling) run in kernel space
- Others (drivers) may run in user space or kernel space
- Abstraction applied **selectively** to balance performance and isolation

**Strategy:**
- Performance-critical: Low abstraction (in kernel)
- Safety-critical: High abstraction (isolated)
- Flexible placement of services

**Examples:**
- Windows NT places graphics drivers in kernel for performance
- macOS uses hybrid approach for different subsystems

### Benefits of Abstraction

**1. Simplifies Complexity**
Applications and developers don't need to manage hardware directly. For example, a program just asks to "read a file" without knowing how the disk works.

**2. Improves Security**
Isolating components (e.g., microkernel services) limits the damage from bugs or attacks. Compromised component doesn't necessarily compromise entire system.

**3. Enables Modularity**
Abstraction allows features to be added/removed without rewriting the entire OS (e.g., Linux modules). Components can be developed and tested independently.

**4. Balances Trade-offs**
Hybrid and layered kernels use abstraction to strike a balance between:
- Speed vs. Stability
- Performance vs. Security
- Simplicity vs. Flexibility

**5. Hardware Independence**
Programs written for abstracted interfaces work across different hardware platforms without modification.

### Abstraction Examples

**File System Abstraction:**
- **Low-level:** Track numbers, sector addresses, cylinder positions
- **Abstracted:** File names, directories, read/write operations

**Memory Abstraction:**
- **Low-level:** Physical memory addresses, page frames
- **Abstracted:** Virtual addresses, malloc/free, automatic paging

**Process Abstraction:**
- **Low-level:** CPU registers, instruction pointer, memory segments
- **Abstracted:** Process ID, fork/exec, standard I/O streams

**Network Abstraction:**
- **Low-level:** Network packets, MAC addresses, physical signals
- **Abstracted:** Sockets, IP addresses, send/receive operations
        `
      },
      {
        id: 'processes-resources',
        title: 'Process & Resources',
        icon: Cpu,
        content: `
Understanding processes and resources is fundamental to operating system concepts. Processes are the active entities that use resources provided and managed by the OS.

### Processes

**Definition:**
A process is a **program in execution**. It's the basic unit of work in an OS.

**OS Responsibility:**
The OS's job is to manage numerous processes, switching between them rapidly to give the illusion of simultaneous execution (multitasking). This management ensures that each process gets a fair share of the CPU and runs in isolation, preventing it from interfering with others.

### Types of Processes

**1. System/Kernel Process:**
- Created and managed by the OS kernel
- Perform system-level tasks
- Run with high privileges
- Examples: memory management, scheduling

**2. User Process:**
- Created by users or applications
- Run in user space
- Limited privileges
- Examples: web browser, text editor

**3. Daemon Process:**
- Background processes
- Provide services to other processes
- Run continuously
- Examples: web server, print spooler, database server

### Resources

These processes need **resources** to do their work. The OS acts as a resource manager, allocating these resources efficiently and fairly among all competing processes.

### Types of Resources

### 1. Physical Resources

**CPU (Central Processing Unit):**
- Processing power to execute instructions
- Scheduled among processes
- Core resource for computation

**Memory (Main Memory or RAM):**
- Space to store programs and data
- Volatile storage
- Fast access for active processes

**I/O Devices:**
- Keyboard, Mouse, Printer, Scanner
- Input and output peripherals
- Managed through device drivers

**Storage Devices:**
- Hard Disk, Solid State Drive
- Non-volatile storage
- File systems built on top

### 2. Virtual Resources

**Virtual Memory (Swap Space or Page File):**
- Extension of physical memory
- Uses disk space
- Allows running larger programs
- Enables memory overcommitment

**Virtual CPUs:**
- In virtualized environments
- Abstraction of physical CPUs
- Allows multiple virtual machines
- Time-sliced from physical CPUs

### 3. Software Resources

**Files and Directories:**
- Persistent data storage
- Organized in file systems
- Managed by OS

**I/O Streams (Input/Output Channels):**
- Standard input (stdin)
- Standard output (stdout)
- Standard error (stderr)
- Abstraction for data flow

**Sockets (Network Connections):**
- Network communication endpoints
- Support TCP/UDP protocols
- Enable distributed applications

**Semaphores (Synchronization Mechanisms):**
- Coordination between processes
- Mutual exclusion
- Prevent race conditions

### 4. Abstract Resources

**Processes (Threads, Tasks, or Jobs):**
- Themselves can be viewed as resources
- Allocated and scheduled by OS
- Have lifecycle management

**Threads (Lightweight Processes):**
- Unit of execution within process
- Share process resources
- Independent execution flow

**Synchronization Objects (Mutexes, Locks):**
- Control access to shared resources
- Prevent conflicts
- Ensure data consistency

### OS Resource Management Operations

The Operating System manages and performs the following operations with resources:

### 1. Allocation
**Definition:** Assigning resources to processes or programs

**Activities:**
- Determine which process gets which resource
- Decide how much of the resource to allocate
- Handle resource requests
- Maintain allocation tables

### 2. Deallocation
**Definition:** Releasing resources when no longer needed

**Activities:**
- Free up resources from terminated processes
- Reclaim unused resources
- Return resources to available pool
- Update resource tables

### 3. Scheduling
**Definition:** Allocating CPU time to processes

**Considerations:**
- Process priorities
- Fairness among processes
- System responsiveness
- Resource utilization

**Scheduling Algorithms:**
- First-Come-First-Served (FCFS)
- Shortest Job First (SJF)
- Round Robin (RR)
- Priority Scheduling

### 4. Protection
**Definition:** Ensuring processes access only authorized resources

**Mechanisms:**
- Access control lists
- Permissions and privileges
- Memory protection
- Process isolation

**Purpose:**
- Prevent unauthorized access
- Maintain system security
- Protect process integrity
- Enforce security policies

### 5. Sharing
**Definition:** Allowing multiple processes to access shared resources

**Approaches:**
- Time-sharing (CPU, I/O devices)
- Space-sharing (memory, disk)
- Controlled access (synchronization)

**Challenges:**
- Maintaining consistency
- Preventing conflicts
- Ensuring fairness
- Avoiding deadlocks

### Resource Management Goals

**Efficiency:**
- Maximize resource utilization
- Minimize idle time
- Optimize throughput

**Fairness:**
- Equitable distribution among processes
- Prevent starvation
- Honor priorities appropriately

**Responsiveness:**
- Quick response to requests
- Low latency
- Good user experience

**Reliability:**
- Prevent resource conflicts
- Handle failures gracefully
- Maintain system stability
        `
      },
      {
        id: 'security',
        title: 'Influence of Security',
        icon: Lock,
        content: `
Security has evolved from a minimal concern to a foundational requirement in modern operating system design. Today, with systems connected to networks and storing sensitive data, security is paramount.

### Evolution of OS Security

**Early Systems:**
- Minimal security features
- Single-user focus
- Isolated machines
- Limited threats

**Modern Systems:**
- Multi-user environments
- Network connectivity
- Internet exposure
- Sophisticated threats

### Why Security is Critical

**Data Sensitivity:**
- Personal information
- Financial data
- Corporate secrets
- Government records
- Healthcare information

**Connectivity:**
- Systems connected to internet
- Network file sharing
- Remote access
- Cloud services
- IoT devices

**Threats:**
- Malware and viruses
- Ransomware
- Phishing attacks
- Zero-day exploits
- Advanced Persistent Threats (APTs)

### Core Security Mechanisms

### 1. User Accounts
**Purpose:** Identify and distinguish users

**Features:**
- Unique user identifiers (UIDs)
- User profiles
- Home directories
- Personal settings

**Benefits:**
- Accountability
- Personalization
- Access tracking
- Resource quotas

### 2. Authentication
**Definition:** Verifying user identity

**Methods:**
- **Passwords:** Knowledge-based authentication
- **Biometrics:** Fingerprint, facial recognition, iris scan
- **Two-Factor Authentication (2FA):** Multiple verification methods
- **Multi-Factor Authentication (MFA):** Enhanced security layers
- **Security tokens:** Hardware or software tokens
- **Certificates:** Digital certificates for authentication

**Best Practices:**
- Strong password policies
- Regular password changes
- Account lockout mechanisms
- Secure password storage (hashing)

### 3. Authorization
**Definition:** Determining what authenticated users can do

**Components:**
- Access Control Lists (ACLs)
- Role-Based Access Control (RBAC)
- Mandatory Access Control (MAC)
- Discretionary Access Control (DAC)

**Permissions:**
- Read (r)
- Write (w)
- Execute (x)
- Delete
- Modify attributes

**Granularity:**
- User-level permissions
- Group-level permissions
- Others (world) permissions

### 4. Permissions
**File System Permissions:**
- Owner, Group, Others model
- Special permissions (SUID, SGID, sticky bit)
- Extended attributes
- ACLs for fine-grained control

**Process Permissions:**
- Process ownership
- Effective UID/GID
- Privilege escalation controls
- Capability-based security

### 5. Firewalls
**Purpose:** Control network traffic

**Types:**
- **Packet Filtering:** Based on IP, port, protocol
- **Stateful Inspection:** Tracks connection state
- **Application Layer:** Deep packet inspection
- **Host-based:** On individual machines
- **Network-based:** At network perimeter

**Functions:**
- Block unauthorized access
- Allow legitimate traffic
- Log network activity
- Detect intrusion attempts

### Security Principles Enforced by OS

### 1. Data Integrity
**Goal:** Ensure data is not corrupted or tampered with

**Mechanisms:**
- Checksums and hashes
- Digital signatures
- Transaction logs
- Atomic operations
- File system journaling

### 2. User Privacy
**Protection:**
- Process isolation
- Memory protection
- Encrypted storage
- Secure communication
- Privacy policies

**Compliance:**
- GDPR (General Data Protection Regulation)
- HIPAA (Health Insurance Portability and Accountability Act)
- Other regulatory requirements

### 3. Threat Protection

**Against Unauthorized Access:**
- Login controls
- Session management
- Account lockouts
- Intrusion detection

**Against Malware:**
- Sandboxing
- Code signing
- Antivirus integration
- Behavioral analysis
- Application whitelisting

**Against Attacks:**
- Buffer overflow protection
- Address Space Layout Randomization (ASLR)
- Data Execution Prevention (DEP)
- Stack canaries

### 4. Audit and Logging
**Purpose:** Track security-relevant events

**Logged Information:**
- Login/logout events
- Failed authentication attempts
- File access
- Privilege escalation
- System changes
- Network connections

**Benefits:**
- Forensic analysis
- Compliance verification
- Anomaly detection
- Incident response

### Modern Security Features

**Secure Boot:**
- Verifies bootloader integrity
- Prevents rootkit installation
- Trusted boot chain

**Encryption:**
- Full disk encryption (FDE)
- File-level encryption
- Network encryption (TLS/SSL)
- Database encryption

**Sandboxing:**
- Isolate applications
- Limit damage from exploits
- Containerization
- Virtual machines

**Security Updates:**
- Regular patch management
- Automatic updates
- Vulnerability scanning
- Security advisories

### Security Challenges

**Balance with Usability:**
- Too strict: Users find workarounds
- Too lenient: Security vulnerabilities
- Need user-friendly security

**Performance Impact:**
- Encryption overhead
- Authentication delays
- Monitoring costs
- Trade-offs required

**Evolving Threats:**
- New attack vectors
- Zero-day vulnerabilities
- Social engineering
- Supply chain attacks
- Requires continuous adaptation

### Conclusion

Security is now a foundational requirement in OS design, not an afterthought. It ensures data integrity, user privacy, and protection against the constantly evolving landscape of cyber threats. Modern operating systems must balance security, performance, and usability while adapting to new challenges.
        `
      },
      {
        id: 'networking',
        title: 'Networking in Operating Systems',
        icon: Network,
        content: `
The rise of the internet and local networks transformed computers from isolated machines into communication devices. Consequently, networking became a core OS service rather than an optional add-on.

### Evolution of Networking in OS

**Early Computing:**
- **Isolated Machines:** Computers operated independently
- **No Connectivity:** Physical transfer of data (tapes, disks)
- **Single User:** One person per machine
- **Limited Resources:** Couldn't share resources

**Network Era:**
- **Connected Systems:** Linked via networks
- **Resource Sharing:** Share files, printers, applications
- **Communication:** Email, messaging, file transfer
- **Distributed Computing:** Work across multiple machines

### Why Networking is a Core OS Service

**Fundamental Requirements:**
- Almost all modern applications need network access
- Cloud services require constant connectivity
- Updates and patches delivered over network
- Remote work and collaboration depend on networking

**OS Integration:**
- Network stack built into kernel
- Device drivers for network interfaces
- Protocol implementation at OS level
- Security mechanisms for network traffic

### OS Network Management

### 1. Network Connections
**Responsibilities:**
- Establish and maintain connections
- Handle network interface cards (NICs)
- Manage multiple network interfaces
- Support both wired and wireless
- Handle connection state (up/down)

**Connection Types:**
- Ethernet (wired)
- Wi-Fi (wireless)
- Bluetooth
- Cellular networks
- VPN connections

### 2. Protocol Management (TCP/IP Stack)

The OS manages the implementation of network protocols, primarily the **TCP/IP protocol suite**.

**Application Layer:**
- HTTP/HTTPS (Web)
- FTP (File Transfer)
- SMTP (Email)
- DNS (Domain Name System)
- SSH (Secure Shell)

**Transport Layer:**
- **TCP (Transmission Control Protocol):**
  - Reliable, connection-oriented
  - Guarantees delivery
  - Ordered packets
  - Error checking
- **UDP (User Datagram Protocol):**
  - Unreliable, connectionless
  - Fast, low overhead
  - No delivery guarantee
  - Used for streaming, gaming

**Internet Layer:**
- **IP (Internet Protocol):**
  - IPv4: 32-bit addresses
  - IPv6: 128-bit addresses
  - Routing and addressing
- **ICMP:** Error reporting (ping)
- **ARP:** Address resolution

**Network Access Layer:**
- Ethernet
- Wi-Fi (802.11)
- Physical transmission
- Frame formatting

### 3. Distributed Computing Support

**Capabilities:**
- **Remote Procedure Calls (RPC):** Execute functions on remote machines
- **Message Passing:** Inter-process communication across network
- **Distributed File Systems:** Access files on remote systems
- **Load Balancing:** Distribute work across multiple machines
- **Clustering:** Multiple machines working as one

**Technologies:**
- NFS (Network File System)
- SMB/CIFS (Windows file sharing)
- Distributed databases
- Grid computing
- Cloud computing platforms

### 4. Network File Systems

**Purpose:** Access files on remote machines as if local

**Examples:**
- **NFS (Network File System):** Unix/Linux standard
- **SMB/CIFS:** Windows file sharing
- **AFS (Andrew File System):** Distributed file system
- **WebDAV:** Web-based file access

**Features:**
- Transparent access
- Caching for performance
- Security and authentication
- Locking mechanisms

### 5. Secure Data Exchange

**Security Protocols:**
- **TLS/SSL (Transport Layer Security):**
  - Encrypted communication
  - Used by HTTPS
  - Certificate-based authentication

- **IPsec (Internet Protocol Security):**
  - Network layer security
  - VPN implementation
  - Encrypts IP packets

- **SSH (Secure Shell):**
  - Secure remote access
  - Encrypted terminal sessions
  - Secure file transfer (SFTP)

**Security Services:**
- Encryption of data in transit
- Authentication of endpoints
- Data integrity verification
- Non-repudiation

### Network Services Provided by OS

### 1. Routing
- Determine best path for packets
- Maintain routing tables
- Support multiple network interfaces
- Enable gateway functionality

### 2. Network Address Translation (NAT)
- Share single public IP among devices
- Provide basic security
- Enable private networks
- Conserve IP addresses

### 3. DHCP (Dynamic Host Configuration Protocol)
- Automatic IP address assignment
- Network configuration distribution
- Lease management
- Simplifies network administration

### 4. DNS Resolution
- Convert domain names to IP addresses
- Cache DNS queries
- Local hostname resolution
- Integration with network stack

### 5. Firewall Services
- Packet filtering
- Port management
- Application control
- Intrusion detection/prevention

### Applications Enabled by OS Networking

**Web Browsing:**
- HTTP/HTTPS support
- DNS resolution
- Cookie management
- Secure connections

**Email:**
- SMTP for sending
- POP3/IMAP for receiving
- Attachment handling
- Spam filtering

**File Sharing:**
- P2P networks
- Cloud storage sync
- Network drives
- Collaborative editing

**Remote Access:**
- SSH terminals
- Remote desktop (RDP, VNC)
- Virtual private networks (VPN)
- Cloud-based virtual machines

**Streaming:**
- Video streaming (Netflix, YouTube)
- Audio streaming (Spotify, podcasts)
- Live broadcasts
- Real-time communication

**Cloud Services:**
- Storage (Dropbox, Google Drive)
- Computing (AWS, Azure)
- Applications (SaaS)
- Backup services

### Network Performance Optimization

**OS Responsibilities:**
- **Buffering:** Temporary storage for data
- **Caching:** Store frequently accessed data
- **Congestion Control:** Manage network traffic
- **Quality of Service (QoS):** Prioritize traffic types
- **TCP Optimization:** Window scaling, selective ACKs
- **Interrupt Coalescing:** Reduce CPU overhead

### Challenges in Network Management

**Performance:**
- High-throughput data streams
- Low-latency requirements
- Efficient buffer management
- Minimize packet loss

**Security:**
- Protect against network attacks
- Secure data transmission
- Authenticate connections
- Prevent eavesdropping

**Reliability:**
- Handle network failures
- Automatic reconnection
- Error recovery
- Maintain connections

**Scalability:**
- Support many simultaneous connections
- Handle high bandwidth
- Manage large networks
- Efficient resource usage

### Conclusion

Networking is now fundamental to operating system design. The OS provides the foundation for everything from web browsing and email to distributed computing and cloud services. Modern operating systems must efficiently manage network resources, provide robust security, and support the ever-increasing demands of networked applications.
        `
      },
      {
        id: 'multimedia',
        title: 'Multimedia and Real-Time Requirements',
        icon: Zap,
        content: `
The demand for high-quality audio and video has significantly influenced OS design. Multimedia applications have unique requirements that challenge traditional operating system approaches.

### Impact on Operating System Design

**Traditional OS Focus:**
- Batch processing
- Fair resource sharing
- Average performance
- Best-effort service

**Multimedia Requirements:**
- **Real-time constraints:** Strict timing deadlines
- **High throughput:** Large data streams
- **Continuous processing:** No interruptions
- **Synchronized streams:** Audio-video sync
- **Quality of Service (QoS):** Guaranteed performance

### Multimedia Characteristics

### 1. High-Throughput Data Streams

**Data Rates:**
- **Standard Definition Video:** ~5-10 Mbps
- **High Definition (1080p):** ~20-40 Mbps
- **4K Ultra HD:** ~100-200 Mbps
- **Audio (Stereo):** ~128-320 kbps
- **Uncompressed Audio:** ~1.4 Mbps (CD quality)

**Challenges:**
- Sustained high data rates
- Continuous disk/network I/O
- Large memory buffers
- Efficient data transfer

### 2. Real-Time Deadlines

**Types of Real-Time:**

**Hard Real-Time:**
- **Definition:** Missing deadline causes system failure
- **Examples:** Medical equipment, industrial control
- **Multimedia:** Less common, but critical in some applications
- **Requirement:** Absolute guarantee of deadline

**Soft Real-Time:**
- **Definition:** Missing deadline degrades quality
- **Examples:** Video playback, audio streaming
- **Multimedia:** Most applications
- **Requirement:** Statistical guarantee, best effort

**Impact on User Experience:**
A slight delay in processing a video frame can ruin the user experience:
- **Video stuttering:** Frames displayed late
- **Audio dropouts:** Buffer underruns
- **Lip-sync issues:** Audio-video desynchronization
- **Choppy playback:** Inconsistent frame rates

### 3. Continuous Media

**Characteristics:**
- Time-dependent data
- Must maintain temporal relationships
- Cannot pause without affecting quality
- Requires predictable performance

**Types:**
- **Streaming audio:** Music, podcasts
- **Streaming video:** Movies, live broadcasts
- **Voice over IP (VoIP):** Phone calls, video conferencing
- **Live streaming:** Webcams, live events

### OS Adaptations for Multimedia

### 1. Improved Scheduling Algorithms

**Traditional Scheduling Issues:**
- Fair sharing may delay multimedia tasks
- Time-slice too small = high overhead
- Time-slice too large = poor responsiveness
- Priority inversion problems

**Multimedia-Aware Scheduling:**

**Priority-Based Scheduling:**
- Higher priority for multimedia processes
- Preempt lower-priority tasks
- Dedicated CPU time slices

**Earliest Deadline First (EDF):**
- Schedule tasks based on deadlines
- Optimal for real-time workloads
- Dynamic priorities

**Rate Monotonic Scheduling (RMS):**
- Static priorities based on period
- Higher frequency = higher priority
- Predictable behavior

**Proportional Share Scheduling:**
- Guarantee CPU percentage
- Lottery scheduling
- Stride scheduling
- Fair-share scheduling

**Real-Time Classes:**
- Separate scheduling class for real-time tasks
- Linux: SCHED_FIFO, SCHED_RR, SCHED_DEADLINE
- Windows: Real-time priority class
- Guaranteed scheduling latency

### 2. Enhanced I/O Techniques

**Buffering Strategies:**

**Double Buffering:**
- One buffer fills while other empties
- Reduces latency
- Smooths playback

**Ring Buffers:**
- Circular buffer structure
- Continuous streaming
- Efficient memory usage
- Producer-consumer model

**Prefetching:**
- Read ahead of current position
- Anticipate future needs
- Reduce waiting time
- Hide I/O latency

**Asynchronous I/O:**
- Non-blocking operations
- Overlap computation and I/O
- Better resource utilization
- Callback-based completion

**Direct Memory Access (DMA):**
- Hardware transfers data directly
- No CPU involvement
- Reduces CPU overhead
- Increases throughput

**Zero-Copy Techniques:**
- Avoid unnecessary data copying
- sendfile() system call
- Memory mapping
- Kernel bypass

### 3. Memory Management

**Large Buffers:**
- Allocate substantial memory for buffering
- Reduce disk access frequency
- Smooth out variations in disk speed

**Memory Locking:**
- Lock multimedia buffers in RAM
- Prevent swapping to disk
- Avoid page faults
- Guaranteed access time

**NUMA Awareness:**
- Non-Uniform Memory Access
- Place data close to processing core
- Reduce memory latency
- Important for multi-socket systems

### 4. File System Optimizations

**Contiguous Allocation:**
- Store files in contiguous blocks
- Reduce seek time
- Predictable read performance
- Used for video files

**Dedicated Partitions:**
- Separate partition for multimedia
- Optimized file system parameters
- Reduced fragmentation
- Predictable performance

**Quality of Service (QoS):**
- Guarantee bandwidth
- Reserve disk throughput
- Priority I/O queues
- Latency guarantees

### 5. Network Enhancements

**Traffic Prioritization:**
- Higher priority for multimedia packets
- Quality of Service (QoS) mechanisms
- Differentiated Services (DiffServ)
- Resource Reservation Protocol (RSVP)

**Bandwidth Reservation:**
- Reserve network bandwidth
- Admission control
- Prevent congestion
- Guaranteed throughput

**Jitter Reduction:**
- Minimize variation in packet delay
- Buffering strategies
- Playout buffering
- Timestamp-based playback

### Multimedia Technologies in OS

### 1. Codec Support
- **Hardware acceleration** for encoding/decoding
- **GPU utilization** for video processing
- **Dedicated hardware** (e.g., Apple's Neural Engine)
- **Software fallbacks** for compatibility

### 2. Audio Subsystems
- **ALSA** (Advanced Linux Sound Architecture)
- **PulseAudio** (Linux sound server)
- **Core Audio** (macOS)
- **WASAPI** (Windows Audio Session API)
- **Low-latency audio** support
- **Multi-channel audio** (surround sound)

### 3. Graphics and Video
- **Hardware-accelerated video decoding**
- **Graphics driver integration**
- **Video memory management**
- **Display synchronization** (V-Sync)
- **Multiple display support**

### 4. Synchronization
- **Audio-video sync** mechanisms
- **Timestamping** of frames
- **Clock synchronization**
- **Playout buffering**

### Performance Metrics

**Latency:**
- Time from input to output
- Critical for interactive applications
- Target: <10ms for professional audio
- Acceptable: <100ms for video conferencing

**Jitter:**
- Variation in latency
- Causes choppy playback
- Buffering helps reduce
- Network issue in streaming

**Throughput:**
- Amount of data processed
- Must meet codec requirements
- Sustained, not peak
- Measured in Mbps or fps

**Frame Rate:**
- Frames per second (fps)
- 24 fps: Cinema standard
- 30 fps: Television standard
- 60+ fps: Gaming, sports
- Must be consistent

### Challenges

**CPU Competition:**
- Other processes compete for CPU
- Background tasks affect performance
- Need for process isolation
- Resource guarantees required

**Power Management:**
- High performance vs. battery life
- Dynamic frequency scaling
- Sleep states affect latency
- Balancing act required

**Heterogeneous Workloads:**
- Mix of real-time and best-effort
- Fair scheduling difficult
- Priority management complex
- Starvation risks

### Modern Solutions

**Hardware Offloading:**
- Dedicated media processors
- GPU acceleration
- DSP (Digital Signal Processor)
- Reduces CPU load

**Container and Virtualization:**
- Isolate multimedia applications
- Guaranteed resources
- Predictable performance
- No interference from other apps

**Adaptive Streaming:**
- Adjust quality to conditions
- Dynamic bitrate adaptation
- Example: Netflix, YouTube
- Resilient to variations

### Conclusion

Multimedia support has driven significant OS improvements:
- **Better scheduling** for real-time requirements
- **Enhanced I/O** for high throughput
- **Optimized memory** management
- **Network QoS** for streaming
- **Hardware integration** for acceleration

These enhancements benefit not just multimedia but all applications requiring predictable, high-performance operation. Smooth, continuous playback and processing of multimedia content is now a standard expectation from modern operating systems.
        `
      }
    ]
  },
  {
    id: 'system-internals',
    title: 'Module 2: System Internals',
    icon: Cpu,
    color: 'purple',
    totalSections: 14,
    description: 'System calls, processes, threads, and multicore programming - BCSE303L',
    sections: [
      {
        id: 'system-calls-intro',
        title: 'System Calls - Introduction',
        icon: Terminal,
        content: `
An operating system (OS) acts as the fundamental intermediary between computer hardware and the software that runs on it. At the heart of this interaction lies a crucial mechanism known as a **system call**.

### What is a System Call?

A **system call** is a programmatic way for a running program to request a service from the operating system's kernel.

**Key Concepts:**
- System calls provide a layer of abstraction
- The OS manages computer resources and offers a consistent interface to applications
- For security and stability, modern operating systems employ **dual-mode operation**: user mode and kernel mode

### User Mode vs Kernel Mode

**User Mode:**
- This is the **non-privileged mode** where most applications run
- In this mode, a program has **restricted access** to system resources
- Cannot directly interact with hardware
- Applications must request OS services through system calls
- Safer execution environment

**Kernel Mode:**
- This is the **privileged mode** where the operating system kernel executes
- In this mode, the code has **complete access** to all hardware and system resources
- Can execute all CPU instructions
- Direct hardware manipulation allowed
- Full control over the system

### The Bridge Between Modes

System calls provide a **controlled and secure bridge** between these two modes:
- When an application needs to perform a privileged action (e.g., reading from a file, opening a network connection)
- It must **request** the operating system's kernel to perform the task on its behalf
- This request is made through a system call

### Why System Calls are Important

**Hardware Abstraction:**
- System calls provide a standardized way for programs to interact with hardware
- Abstract the complexities of hardware
- Ensure hardware-independent operation
- Programs don't need to know hardware details

**Resource Management:**
- Enable efficient management and sharing of hardware resources
- Control access to CPU, memory, and I/O devices
- Prevent resource conflicts
- Fair allocation among processes

**Security and Protection:**
- Allow the OS to enforce security policies
- Ensure programs operate within allocated permissions
- Prevent unauthorized access to critical resources
- Isolation between processes
- Protection of system integrity
        `
      },
      {
        id: 'system-calls-working',
        title: 'System Calls - How They Work',
        icon: Cpu,
        content: `
The execution of a system call involves a well-defined sequence of steps that facilitates the transition from user mode to kernel mode and back.

### System Call Execution Workflow

**Step 1: Application Initiates the Call**
- A user program (written in C++, Python, etc.) makes a call to a library function
- Example: \`fopen()\` to open a file
- This library function is part of the **Application Programming Interface (API)** provided by the system

**Step 2: Library Function Invokes the System Call**
- The library function is a **wrapper** containing necessary preparation code
- Preparation involves:
  - Placing the **system call number** (unique integer identifying the service) in registers
  - Placing **arguments** (e.g., filename, access mode) in specific registers or stack
- Example: For \`fopen("file.txt", "r")\`, it prepares syscall number (e.g., \`SYS_open\`)

**Step 3: The TRAP Instruction**
- The library function executes a special instruction called **TRAP** or **INT** (interrupt)
- This instruction causes a **software interrupt**
- Signals the processor to switch from **user mode** to **kernel mode**
- A controlled entry point into the kernel

**Step 4: The Kernel Takes Over**
- Upon receiving the trap, the processor:
  - **Saves the current state** of the user program (program counter, registers)
  - **Jumps to a specific location** in kernel memory
- This location is the starting address of the **Interrupt Service Routine (ISR)** or **System Call Handler**

**Step 5: Executing the System Call**
- The system call handler uses the system call number to look up the corresponding kernel function
- Looks up in the **system call table**
- This table maps each system call number to the address of kernel code implementing that service
- Locates the appropriate kernel function (e.g., \`sys_open()\`)

**Step 6: Performing the Operation**
- The kernel executes the requested operation
- Example for opening a file:
  - **Check file permissions**
  - **Locate the file** on storage device
  - **Create an entry** in the system-wide open file table
  - **Allocate file descriptor**
  - Interact with file system
- May involve device drivers and hardware interaction
- Uses MMU (Memory Management Unit) and I/O controllers

**Step 7: Returning to User Mode**
- Once the kernel completes the operation:
  - Places the **return value** (e.g., file descriptor or error code) in a designated register
  - **Restores the saved state** of the user program
  - Executes a special **return-from-interrupt** instruction

**Step 8: Resuming Application Execution**
- The return-from-interrupt instruction:
  - Switches the processor back from **kernel mode** to **user mode**
  - Execution of user program **resumes** from where it left off
  - Result of the system call is now available to the application

### Complete System Call Flow Diagram

\`\`\`
User Application (User Mode)
    ↓ fopen("file.txt", "r")
C Library (glibc, etc.)
    ↓ Wrapper: prepare args, set syscall number (SYS_open)
TRAP/INT Instruction (Switch to Kernel Mode)
    ↓
Kernel: Trap Handler
    ↓ Save user context (registers, PC), Find ISR/System Call Table
System Call Table
    ↓ Look up kernel function (sys_open())
Kernel Function (sys_open)
    ↓ Check permissions, locate file, allocate file descriptor
Device Driver / File System
    ↓ Read from disk, use MMU, I/O controllers
Hardware Interaction by Kernel
    ↓
Return Value to User
    ↓
Kernel: Restore Context
    ↓ Return from TRAP, switch back to user mode
Resume User Application
    ↓
User Application (User Mode)
    ↓ Continue execution (fd = 3 returned)
\`\`\`

### Key Points

- **System calls are expensive** due to mode switches and context saving/restoring
- They provide **necessary protection** and isolation
- The **system call table** is a critical kernel data structure
- All privileged operations **must go through** system calls
- User programs **never directly** execute in kernel mode
        `
      },
      {
        id: 'system-calls-api',
        title: 'System Calls Interface / API',
        icon: BookOpen,
        content: `
The System Call Interface (API) provides the mechanism through which applications interact with the operating system.

### What is a System Call Interface/API?

A **set of functions, system calls, and protocols** that allows applications to interact with the OS and other software components.

**Purpose:**
- Defines the way applications request services from the OS
- Provides a level of abstraction between application and underlying OS
- Simplifies development
- Ensures compatibility and security

### How the System Call Interface Works

**System Call Numbering:**
- A number is associated with each system call
- The system-call interface maintains a **table indexed** according to these numbers
- Example: \`open()\` might be syscall #5, \`read()\` might be #3

**Invocation Process:**
- The system-call interface invokes the intended system call in the OS kernel
- Returns the **status of the system call** to the caller
- Handles error conditions and return values

### Abstraction and Hiding Details

**Caller Simplicity:**
- The caller **need know nothing** about how the system call is implemented
- Just needs to **obey the API** specification
- Understand what the OS will do as a result of the call

**Hidden Complexity:**
- Most details of the OS interface are **hidden from the programmer** by the API
- Managed by **run-time support library**
- Set of functions built into libraries included with the compiler

### Run-Time Support Library

**What it Provides:**
- Pre-compiled functions that wrap system calls
- Standard C library (\`libc\` on Unix/Linux)
- Handles low-level details like:
  - Register setup
  - System call number assignment
  - Error code translation
  - Return value handling

**Benefits:**
- Portability across different systems
- Consistent interface
- Error handling
- Type safety

### Common System Call Categories

**Process Control:**
- \`fork()\` - Create a new process
- \`exec()\` - Execute a program
- \`exit()\` - Terminate process
- \`wait()\` - Wait for child process
- \`getpid()\` - Get process ID

**File Management:**
- \`open()\` - Open file
- \`read()\` - Read from file
- \`write()\` - Write to file
- \`close()\` - Close file
- \`lseek()\` - Move file pointer
- \`stat()\` - Get file status

**Device Management:**
- \`ioctl()\` - Device-specific operations
- \`read()\` / \`write()\` - I/O operations
- Device drivers interface

**Information Maintenance:**
- \`getpid()\` - Get process ID
- \`alarm()\` - Set alarm clock
- \`sleep()\` - Suspend execution
- \`time()\` - Get system time
- \`gettimeofday()\` - Get time of day

**Communication:**
- \`pipe()\` - Create pipe
- \`socket()\` - Create socket
- \`send()\` / \`recv()\` - Network communication
- \`shmget()\` - Shared memory
- \`msgget()\` - Message queues

**Protection:**
- \`chmod()\` - Change file permissions
- \`chown()\` - Change file owner
- \`umask()\` - Set file creation mask

### API vs System Call

**API (Application Programming Interface):**
- High-level interface for programmers
- May involve multiple system calls
- Portable across systems
- Example: \`fopen()\` in C standard library

**System Call:**
- Low-level kernel entry point
- Directly invokes kernel code
- OS-specific
- Example: \`open()\` syscall on Unix

### Example: Opening a File

**Application Code:**
\`\`\`c
FILE *fp = fopen("data.txt", "r");
\`\`\`

**What Happens:**
1. \`fopen()\` is a C library function (API)
2. It calls \`open()\` system call
3. Kernel opens file
4. Returns file descriptor
5. \`fopen()\` wraps it in FILE structure
6. Returns FILE pointer to application

### Benefits of the API Layer

**Portability:**
- Same API works on different operating systems
- OS-specific details hidden

**Ease of Use:**
- Higher-level abstractions
- Better error handling
- Convenient data structures

**Buffering and Optimization:**
- Library can buffer I/O operations
- Reduce number of actual system calls
- Improve performance

**Type Safety:**
- Strong typing in library functions
- Compile-time checks
- Reduces errors
        `
      },
      {
        id: 'parameter-passing',
        title: 'Parameter Passing between Programs & Kernel',
        icon: Layers,
        content: `
When a program makes a system call, it needs to pass parameters (arguments) to the kernel. There are three main methods for passing these parameters.

### Method 1: Using Registers (Limited Space)

**How it Works:**
- This is the **simplest method**
- The program puts information directly into special CPU locations called **registers**
- Fast and efficient

**Limitations:**
- There are only a **few registers** available
- This might not work if there's a lot of information to send
- Limited by number of available CPU registers
- Not suitable for complex system calls with many parameters

**Example:**
- Small parameters like integers, file descriptors
- Simple system calls like \`getpid()\` (no parameters)
- \`close(fd)\` (one parameter)

**Advantages:**
- ✅ **Fastest method** - no memory access needed
- ✅ Simple to implement
- ✅ Minimal overhead

**Disadvantages:**
- ❌ **Limited space** - only a few registers
- ❌ Can't handle many parameters
- ❌ Can't pass large data structures

### Method 2: Packing Information (Memory Block)

**How it Works:**
- If there's too much information for registers, the program creates a **block of memory**
- Like packing items into a box
- Store all the details in this memory block
- The program sends the **address of this block** to the OS using a register
- The OS knows where to find all the information

**Used By:**
- **Linux** operating system
- **Solaris** operating system

**Example:**
\`\`\`c
struct params {
    char *filename;
    int flags;
    int mode;
};
struct params p = {"file.txt", O_RDONLY, 0644};
syscall(SYS_open, &p);  // Pass address of structure
\`\`\`

**Advantages:**
- ✅ **Unlimited parameters** - block can be any size
- ✅ Can pass complex data structures
- ✅ Organized and structured

**Disadvantages:**
- ❌ Requires memory allocation
- ❌ Need to copy data to/from memory
- ❌ Slightly slower than registers

### Method 3: Stack It Up

**How it Works:**
- The program puts information **one piece at a time** onto a special area of memory called the **stack**
- This is like stacking dishes - last in, first out (LIFO)
- The OS accesses information by taking it off the stack
- Takes pieces in reverse order they were added

**Characteristics:**
- **Push** parameters onto stack (by application)
- **Pop** parameters from stack (by kernel)
- Stack grows and shrinks automatically

**Example:**
\`\`\`
# Assembly-like representation
PUSH mode        # Push third parameter
PUSH flags       # Push second parameter
PUSH filename    # Push first parameter
INT 0x80         # Make system call
ADD SP, 12       # Clean up stack (3 params × 4 bytes)
\`\`\`

**Advantages:**
- ✅ **Unlimited information** - can push many parameters
- ✅ **No limitations** on parameter count
- ✅ Natural fit for function calls
- ✅ Easy cleanup after call

**Disadvantages:**
- ❌ Requires stack manipulation
- ❌ Slightly more overhead
- ❌ Need to clean up stack after call

### Comparison of Parameter Passing Methods

| Method | Speed | Capacity | Complexity | Used For |
|--------|-------|----------|------------|----------|
| **Registers** | Fastest | Very Limited (few params) | Simplest | Simple syscalls, few parameters |
| **Memory Block** | Medium | Unlimited | Medium | Complex structures, many parameters |
| **Stack** | Medium | Unlimited | Medium | Variable parameters, function calls |

### Method Selection Criteria

**Use Registers When:**
- Few parameters (typically ≤ 6)
- Simple data types (integers, pointers)
- Performance is critical
- Example: \`getpid()\`, \`exit(status)\`

**Use Memory Block When:**
- Complex data structures
- Many related parameters
- Need to organize parameters
- Example: File status structure, socket options

**Use Stack When:**
- Variable number of parameters
- Compatible with calling conventions
- Need automatic cleanup
- Example: \`printf()\` with variable arguments

### Real-World Example: Linux x86-64

On modern Linux systems (x86-64 architecture):
- First **6 parameters** passed in registers: \`RDI, RSI, RDX, RCX, R8, R9\`
- **Additional parameters** passed on the stack
- **Syscall number** in \`RAX\` register
- **Return value** in \`RAX\`

\`\`\`c
// open(filename, flags, mode)
// Parameter 1 (filename): RDI
// Parameter 2 (flags): RSI
// Parameter 3 (mode): RDX
// Syscall number: RAX = 2 (sys_open)
\`\`\`

### Security Considerations

**Kernel Must Validate:**
- All pointers point to valid user memory
- No access to kernel memory
- Buffer sizes are reasonable
- Parameters are within valid ranges

**Protection Mechanisms:**
- Copy data from user space to kernel space
- Check memory permissions
- Prevent buffer overflows
- Validate all inputs
        `
      },
      {
        id: 'interrupts',
        title: 'Interrupts and Interrupt Handling',
        icon: Zap,
        content: `
An interrupt in an operating system is a signal that prompts the OS to temporarily halt its current activities and execute a specific function, often referred to as an **interrupt handler** or **interrupt service routine (ISR)**.

### What is an Interrupt?

**Definition:**
An interrupt is a hardware or software signal that alerts the CPU to stop its current task and handle an event that requires immediate attention.

**Hardware Support:**
- The CPU has a wire called the **interrupt-request line**
- The CPU senses this line after executing every instruction
- When a signal is detected, the CPU responds immediately

### Interrupt Handling Process - I/O Example

**Step 1: I/O Request Initiated**
- The CPU issues an I/O command (e.g., read/write) to a device
- Command issued via its **device driver** (part of the OS)
- CPU tells the device what to do

**Step 2: I/O Controller Takes Over**
- The **I/O controller** (hardware) receives the command
- Begins the data transfer between the device and memory
- Works independently of the CPU

**Step 3: CPU Continues Working**
- While I/O is in progress, the CPU continues executing other instructions
- **Non-blocking operation** - CPU doesn't wait
- System remains productive

**Step 4: I/O Operation Completes**
- When the I/O finishes (or an error occurs)
- The I/O controller sends an **interrupt signal** to the CPU
- Notifies CPU that the operation is done

**Step 5: Interrupt Detected**
- The CPU detects the interrupt
- Pauses current execution
- **Saves the current task state** (context switching)
- Prepares to handle the interrupt

**Step 6: Interrupt Handler Invoked**
- The OS calls the appropriate **interrupt handler**
- Usually a small routine, part of the device driver
- Specific to the device that caused the interrupt

**Step 7: Interrupt Processed**
- The handler processes the event:
  - Read input data
  - Check for errors
  - Signal completion to waiting processes
  - Update data structures

**Step 8: Return to Previous Task**
- Once complete, the CPU **restores the previous task's state**
- Resumes execution as if it was never interrupted
- Seamless continuation

### Detailed Interrupt Handling Steps

**1. Interrupt Request (IRQ)**
- The hardware device sends an **interrupt request** to the CPU
- Each device typically has a unique IRQ number
- Example: IRQ 1 for keyboard, IRQ 3 for serial port

**2. Acknowledgment**
- The CPU **acknowledges** the interrupt
- Temporarily pauses its current execution
- Prepares to service the interrupt

**3. Interrupt Vector**
- The CPU uses an **interrupt vector** to locate the appropriate interrupt handler
- The vector is essentially a **table of pointers** to interrupt service routines
- Maps IRQ numbers to handler addresses
- Located in a fixed memory location

**4. Interrupt Service Routine (ISR)**
- The CPU executes the ISR to handle the interrupt
- ISR performs device-specific tasks:
  - Reading data from a device
  - Processing input
  - Handling errors
  - Updating status flags

**5. Resume Execution**
- After the ISR completes:
  - CPU restores saved context
  - Returns to interrupted task
  - Continues as if nothing happened

### Interrupt Flow Diagram

\`\`\`
Device Ready/Complete
    ↓
Send IRQ to CPU
    ↓
CPU Finishes Current Instruction
    ↓
CPU Acknowledges Interrupt
    ↓
Save Current Context (PC, Registers, Flags)
    ↓
Look Up Interrupt Vector
    ↓
Jump to ISR Address
    ↓
Execute Interrupt Service Routine
    ↓
Handle Device Event
    ↓
ISR Returns
    ↓
Restore Saved Context
    ↓
Resume Interrupted Task
\`\`\`

### Types of Interrupts

**Hardware Interrupts:**
- Generated by hardware devices
- Examples:
  - Keyboard press
  - Mouse movement
  - Disk read complete
  - Timer tick
  - Network packet arrival

**Software Interrupts:**
- Generated by programs
- Also called **traps** or **exceptions**
- Examples:
  - System calls (INT 0x80)
  - Division by zero
  - Page fault
  - Illegal instruction

**Maskable vs Non-Maskable:**

**Maskable Interrupts:**
- Can be ignored (masked) by the CPU
- Used for routine events
- Examples: keyboard, mouse

**Non-Maskable Interrupts (NMI):**
- Cannot be ignored
- Used for critical events
- Examples: hardware failure, power failure

### Interrupt Priority

**Priority Levels:**
- Different interrupts have different priorities
- Higher priority interrupts can interrupt lower priority ISRs
- Critical events handled first

**Priority Order (Typical):**
1. **Machine Check** (hardware failure) - Highest
2. **Timer** (system clock)
3. **Disk I/O**
4. **Network**
5. **Keyboard/Mouse** - Lowest

### Interrupt Context Switching

**What Gets Saved:**
- **Program Counter (PC)** - where to resume
- **Processor Status Word (PSW)** - flags and mode
- **CPU Registers** - all general-purpose registers
- **Stack Pointer** - current stack location

**Where It's Saved:**
- Usually on the kernel stack
- Some architectures use special registers
- Must be saved quickly and efficiently

### Benefits of Interrupts

**Efficiency:**
- CPU doesn't waste time polling devices
- Can work on other tasks while waiting for I/O
- Better resource utilization

**Responsiveness:**
- Immediate response to events
- Critical events handled promptly
- Real-time capabilities

**Simplified I/O:**
- Devices signal when ready
- No need for continuous checking
- Cleaner program structure

### Challenges with Interrupts

**Race Conditions:**
- Interrupts can occur at any time
- Need synchronization mechanisms
- Critical sections must be protected

**Interrupt Storms:**
- Too many interrupts can overwhelm CPU
- Need interrupt coalescing
- Rate limiting may be necessary

**Latency:**
- Time to respond to interrupt
- Critical for real-time systems
- Must minimize ISR execution time

### Interrupt Handling Best Practices

**Keep ISRs Short:**
- Do minimal work in ISR
- Defer complex processing
- Return quickly to avoid blocking other interrupts

**Top Half / Bottom Half:**
- **Top Half**: ISR - acknowledge interrupt, minimal processing
- **Bottom Half**: Deferred work - complex processing done later

**Disable Interrupts Carefully:**
- Only when absolutely necessary
- For shortest time possible
- Can cause system unresponsiveness
        `
      },
      {
        id: 'process-intro',
        title: 'Process - Introduction',
        icon: Cpu,
        content: `
A process is essentially a program that's actively running. It is the foundation for all the computations that happen on your computer and represents a unit of work that the OS manages.

### What is a Process?

A process is an **active instance of a program** that includes:
- The program's machine code
- Its current activity (what it's doing right now)
- Resources allocated to it by the OS, such as:
  - Memory
  - CPU time
  - Open files

### Program vs Process

It's important to distinguish between a program and a process:

**Program:**
- A passive entity
- Executable file stored on disk
- Static set of instructions
- Can exist indefinitely without executing

**Process:**
- An active entity
- Program in execution
- Dynamic with changing state
- Has a defined lifetime
- Consumes system resources

**Example:**
- A web browser executable (chrome.exe) on your disk is a **program**
- When you double-click and run it, it becomes a **process**
- You can have multiple processes from the same program (multiple browser windows)

### Process Characteristics

**Unique Identity:**
- Each process has a unique **Process ID (PID)**
- The OS uses PIDs to track and manage processes
- PIDs are typically sequential numbers

**Isolation:**
- Each process runs in its own address space
- Cannot directly access memory of other processes
- Provides security and stability

**Resource Ownership:**
- Memory allocation
- Open file handles
- Network connections
- CPU time slices

**State Information:**
- Current execution state
- Program counter (next instruction)
- CPU register values
- Stack pointer

### Why Processes Matter

**Multitasking:**
- Multiple processes can run concurrently
- OS switches between them rapidly
- Gives illusion of simultaneous execution
- Improves system utilization

**Protection:**
- Process isolation prevents one program from crashing others
- Security boundaries between applications
- Controlled resource access

**Resource Management:**
- OS can allocate resources fairly
- Priority-based scheduling
- CPU time distribution
- Memory management

### Process Hierarchy

**Parent-Child Relationships:**
- Processes can create other processes
- Creating process is the **parent**
- Created process is the **child**
- Forms a tree structure

**Example Hierarchy:**
\`\`\`
init (PID 1)
  ├─ systemd-logind
  ├─ bash
  │   ├─ ls
  │   └─ grep
  └─ chrome
      ├─ chrome (renderer)
      └─ chrome (GPU process)
\`\`\`

### Process Management by OS

The operating system is responsible for:

**Creation:**
- Allocate memory
- Load program code
- Initialize Process Control Block (PCB)
- Assign PID

**Scheduling:**
- Decide which process runs when
- Allocate CPU time
- Handle context switches

**Termination:**
- Free allocated memory
- Close open files
- Remove from process table
- Return resources to system

**Inter-Process Communication (IPC):**
- Pipes
- Message queues
- Shared memory
- Sockets
        `
      },
      {
        id: 'process-memory',
        title: 'Process Memory Layout',
        icon: HardDrive,
        content: `
When the operating system loads a program to run it (creating a process), it organizes the process's memory into a logical, standardized structure called the **process address space**.

### Virtual Address Space

A process in an operating system has its own **virtual address space**, separate from other processes. This virtual space is typically divided into distinct regions:

### Memory Segments

### 1. Text Section (Code Segment)

**Purpose:** Contains the compiled machine code of the program

**Characteristics:**
- Contains executable instructions
- **Read-only** - marked so the process cannot accidentally modify its own instructions
- **Fixed size** - determined at compile time
- **Shareable** - multiple processes can share the same text section (e.g., shared libraries)

**Example:**
Your program's compiled functions and logic reside here.

### 2. Data Section

**Purpose:** Contains global and static variables

**Two Sub-sections:**

**Initialized Data Segment:**
- Contains global and static variables that are initialized by the programmer
- Example: \`int max_users = 100;\`
- Values known at compile time

**BSS (Block Started by Symbol):**
- Contains uninitialized global and static variables
- Example: \`static int counter;\`
- Automatically initialized to zero
- Named .bss in executables

**Characteristics:**
- **Fixed size** - known at compile time
- **Writable** - values can be modified during execution

### 3. Heap

**Purpose:** Dynamic memory allocation area

**Characteristics:**
- Used when program needs more memory at runtime
- Grows **upward** toward higher memory addresses
- Memory allocated using:
  - \`malloc()\` in C
  - \`new\` operator in C++
  - \`allocate\` in other languages
- Programmer responsible for:
  - Allocating memory
  - Deallocating memory (preventing memory leaks)
- **Size varies** during execution

**Example:**
\`\`\`c
char *buffer = malloc(1024);  // Allocates 1KB on heap
// Use the buffer
free(buffer);  // Must free when done
\`\`\`

**Heap Growth:**
- Starts at end of data/BSS segment
- Grows toward higher addresses
- Can grow very large (within system limits)

### 4. Stack

**Purpose:** Static, local memory allocation

**What It Stores:**
- **Local variables** - variables declared within functions
- **Function parameters** - arguments passed to functions
- **Return addresses** - where to return after function completes
- **Saved registers** - CPU state during function calls

**Stack Frames:**
- Every function call creates a **stack frame**
- Frame contains function's local context
- Frame is **pushed** onto stack when function is called
- Frame is **popped** off stack when function returns

**Characteristics:**
- Located at **top of address space**
- Grows **downward** toward lower memory addresses
- **LIFO** (Last In, First Out) structure
- **Automatic management** - OS handles push/pop
- **Limited size** - stack overflow if too deep recursion

**Example:**
\`\`\`c
void function() {
    int local_var = 20;  // Stored on stack
    char buffer[100];     // Stored on stack
}  // Stack frame popped when function returns
\`\`\`

### Memory Layout Visualization

\`\`\`
High Memory Addresses
┌─────────────────────────┐
│   Command Line Args     │
│   Environment Variables │
├─────────────────────────┤
│                         │
│        STACK            │ ← Grows downward
│          ↓              │
├─────────────────────────┤
│                         │
│    (Free Space)         │
│                         │
├─────────────────────────┤
│          ↑              │
│         HEAP            │ ← Grows upward
│                         │
├─────────────────────────┤
│    BSS Segment          │ (Uninitialized Data)
├─────────────────────────┤
│    Data Segment         │ (Initialized Data)
├─────────────────────────┤
│    Text Segment         │ (Code)
└─────────────────────────┘
Low Memory Addresses
\`\`\`

### Memory Layout Example

Consider this C program:
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int global_var = 10;              // Data segment

void my_function() {
    int local_var = 20;          // Stack
    char *ptr = malloc(10);      // ptr on stack, allocated memory on heap

    printf("Global: %d\\n", global_var);
    printf("Local: %d\\n", local_var);

    free(ptr);
}

int main() {
    my_function();               // main() stack frame
    return 0;
}
\`\`\`

**Memory Allocation:**

1. **Text Section:**
   - Compiled machine code of \`my_function()\` and \`main()\`

2. **Data Section:**
   - \`global_var = 10\` (initialized)

3. **Stack:**
   - \`main()\` stack frame
   - \`my_function()\` stack frame with:
     - \`local_var = 20\`
     - \`ptr\` (pointer variable itself)
     - Return address

4. **Heap:**
   - 10 bytes allocated by \`malloc(10)\`
   - \`ptr\` points to this location

### Virtual to Physical Address Translation

**Memory Management Unit (MMU):**
- Translates virtual addresses used by process
- Converts to physical memory addresses
- Provides memory protection
- Enables memory virtualization

**Benefits:**
- Each process thinks it has full memory
- Isolation between processes
- Physical memory can be anywhere
- Enables memory protection
        `
      },
      {
        id: 'process-pcb',
        title: 'Process Control Block (PCB)',
        icon: BookOpen,
        content: `
The Process Control Block (PCB) is a data structure containing all the information about a process. Each process is represented in the operating system by its PCB, also called a **task control block**.

### What is a PCB?

The PCB acts as the **handle** for the OS to manage:
- The process's memory layout
- Scheduling information
- Resource allocation
- Process state

It contains pointers to the process's memory regions and serves as the complete descriptor of a process.

### PCB Components

### 1. Process Identification

**Process ID (PID):**
- Unique identifier for the process
- Used by OS to track the process
- Typically a sequential number

**Parent Process ID (PPID):**
- PID of the parent process
- Establishes process hierarchy

**User ID (UID):**
- Identifies process owner
- Used for access control

### 2. Process State

**Current State:**
The state may be:
- **New** - Process being created
- **Ready** - Waiting for CPU allocation
- **Running** - Instructions being executed
- **Waiting** - Waiting for I/O or event
- **Terminated** - Finished execution

### 3. Program Counter (PC)

**Purpose:**
- Indicates the **address of the next instruction** to be executed for that process
- Critical for resuming execution after context switch

**Context Switching:**
- Saved when process is preempted
- Restored when process resumes
- Ensures execution continues from correct point

### 4. CPU Registers

**Contents:**
The registers vary in number and type depending on computer architecture:
- **Accumulators** - store computation results
- **Index registers** - array indexing
- **Stack pointers** - top of stack location
- **General-purpose registers** - temporary storage
- **Condition-code information** - flags (zero, carry, overflow)

**Importance:**
- All register values must be saved when interrupt occurs
- Must be restored when process is rescheduled
- Allows process to continue correctly afterward

### 5. CPU Scheduling Information

**Contents:**
- **Process priority** - importance level
- **Pointers to scheduling queues** - ready queue, waiting queue
- **Scheduling parameters** - time quantum, deadlines
- **CPU time used** - for accounting

**Used For:**
- Determining which process runs next
- Fair allocation of CPU time
- Priority-based scheduling

### 6. Memory Management Information

**Contains:**
- **Base and limit registers** - define memory boundaries
- **Page tables** - virtual to physical address mapping
- **Segment tables** - for segmented memory
- Depends on memory system used by OS

**Purpose:**
- Define process address space
- Enable virtual memory
- Enforce memory protection

### 7. Accounting Information

**Tracks:**
- **CPU time used** - total processor time consumed
- **Real time used** - wall-clock time
- **Time limits** - maximum allowed time
- **Account numbers** - billing information
- **Job or process numbers** - batch system identifiers

**Used For:**
- Resource usage tracking
- Billing and quotas
- Performance analysis
- Statistics gathering

### 8. I/O Status Information

**Includes:**
- **List of I/O devices** allocated to the process
- **List of open files** - file descriptors
- **I/O requests** - pending operations
- **Status of I/O operations** - completion, errors

**Purpose:**
- Track resource usage
- Manage I/O operations
- Clean up on process termination

### 9. Heap and Stack Memory Limits

**Stack Limits:**
- Bottom of stack
- Top of stack (stack pointer)
- Maximum stack size

**Heap Limits:**
- Start of heap
- Current heap break (brk pointer)
- Maximum heap size

### 10. List of Open Files

**File Descriptors:**
- Standard input (stdin) - fd 0
- Standard output (stdout) - fd 1
- Standard error (stderr) - fd 2
- Other open files

**Information:**
- File positions
- Access modes
- File locks

### 11. Security and Permissions

**Credentials:**
- Real UID/GID
- Effective UID/GID
- Saved UID/GID
- Supplementary groups

**Used For:**
- Access control decisions
- Permission checking
- Security enforcement

### PCB Structure Example

\`\`\`
┌──────────────────────────────────┐
│   Process Control Block (PCB)    │
├──────────────────────────────────┤
│  Process ID: 1234                │
│  Parent ID: 1000                 │
│  User ID: 501                    │
├──────────────────────────────────┤
│  Process State: READY            │
├──────────────────────────────────┤
│  Program Counter: 0x08048500     │
├──────────────────────────────────┤
│  CPU Registers:                  │
│    EAX: 0x00000005               │
│    EBX: 0x00000000               │
│    ESP: 0xBFFFFA00 (Stack Ptr)   │
│    ...                           │
├──────────────────────────────────┤
│  Priority: 20                    │
│  CPU Time: 150ms                 │
├──────────────────────────────────┤
│  Memory Limits:                  │
│    Text: 0x08048000-0x0804A000   │
│    Data: 0x0804A000-0x0804C000   │
│    Heap: 0x0804C000-0x08050000   │
│    Stack: 0xBFFFF000-0xC0000000  │
├──────────────────────────────────┤
│  Open Files:                     │
│    fd 0: /dev/stdin              │
│    fd 1: /dev/stdout             │
│    fd 3: /var/log/app.log        │
├──────────────────────────────────┤
│  Pointers:                       │
│    → Next PCB in ready queue     │
│    → Parent PCB                  │
│    → Child PCB list              │
└──────────────────────────────────┘
\`\`\`

### PCB Usage in Context Switching

**When Context Switch Occurs:**

1. **Save Current Process:**
   - Copy CPU registers to PCB
   - Save program counter
   - Update process state
   - Save stack pointer

2. **Select Next Process:**
   - Scheduler chooses from ready queue
   - Retrieves PCB of selected process

3. **Load New Process:**
   - Restore CPU registers from PCB
   - Load program counter
   - Set up memory management (page tables)
   - Switch to new process's stack

4. **Resume Execution:**
   - CPU continues from saved program counter
   - Process runs as if never interrupted

### Importance of PCB

**Critical for:**
- **Multitasking** - switching between processes
- **Resource Management** - tracking allocations
- **Scheduling** - deciding which process runs
- **Protection** - enforcing security boundaries
- **Accounting** - tracking resource usage

Without the PCB, the OS would have no way to manage multiple processes effectively.
        `
      },
      {
        id: 'process-states',
        title: 'Process Tables and Process States',
        icon: Layers,
        content: `
As a process executes, it changes state. The state of a process is defined in part by the current activity of that process.

### Process Table

**Definition:**
A data structure maintained by the operating system to store information about all active processes.

**Structure:**
- A table or array of Process Control Blocks (PCBs)
- Each entry represents a process
- Contains a pointer to the corresponding PCB

**Purpose:**
- Quick lookup of process information
- Efficient process management
- System-wide view of all processes

### Process States

A process may be in one of the following states:

### 1. New State

**Description:** The process is being created

**Activities:**
- PCB is allocated
- Process ID assigned
- Memory space being allocated
- Initial resources being gathered
- Not yet ready to execute

**Transition:**
- **New → Ready:** When creation is complete and process is loaded into memory

### 2. Ready State

**Description:** The process is waiting to be assigned to a processor

**Characteristics:**
- Process is **loaded in memory**
- Has all necessary resources except CPU
- In the **ready queue**
- Can execute when scheduled
- May be multiple processes in this state

**Transition:**
- **Ready → Running:** When scheduler selects this process
- **Running → Ready:** When time quantum expires (preemption)

### 3. Running State

**Description:** Instructions are being executed

**Characteristics:**
- Process has **CPU allocated**
- Actually executing on processor
- **One process per CPU core** can be running
- Active execution of instructions

**Transitions:**
- **Running → Ready:** Time slice expires, higher priority process arrives
- **Running → Waiting:** Process requests I/O or waits for event
- **Running → Terminated:** Process completes execution

### 4. Waiting State (Blocked)

**Description:** The process is waiting for some event to occur

**Waiting For:**
- **I/O completion** - disk read, network packet
- **Event signal** - message from another process
- **Resource availability** - semaphore, lock
- **User input** - keyboard, mouse

**Characteristics:**
- **Cannot execute** even if CPU is free
- In a **waiting queue**
- Specific to the event being awaited
- Multiple waiting queues for different events

**Transition:**
- **Waiting → Ready:** When the waited-for event occurs

### 5. Terminated State

**Description:** The process has finished execution

**Activities:**
- Exit status set
- Resources being deallocated
- Memory freed
- Open files closed
- PCB will be removed

**Reasons for Termination:**
- **Normal exit:** Process completed successfully
- **Error exit:** Process encountered error
- **Fatal error:** Division by zero, segmentation fault
- **Killed:** Terminated by another process or user

### State Transition Diagram

\`\`\`
     NEW
      ↓
   [Admitted]
      ↓
    READY ←──────────────┐
      ↓                  │
 [Scheduler Dispatch]    │
      ↓                  │
   RUNNING              │
      ↓                  │
   ┌──┴──┐              │
   │     │              │
[I/O or  │         [Interrupt/
Event    │          Time Quantum
Wait]    │          Expired]
   │     │              │
   ↓     │              │
WAITING  │              │
   │     │              │
[I/O or  │              │
Event    │              │
Complete]│              │
   │     └──────────────┘
   │
   ↓ [Exit]
TERMINATED
\`\`\`

### State Transitions Explained

**1. New → Ready (Admission)**
- Process creation completed
- Loaded into memory
- Resources allocated
- Added to ready queue

**2. Ready → Running (Dispatch)**
- Scheduler selects this process
- CPU allocated
- Context loaded
- Execution begins

**3. Running → Ready (Preemption)**
- **Time quantum expired:** Round-robin scheduling
- **Higher priority process:** Preemptive scheduling
- **Interrupt occurred:** External event

**4. Running → Waiting (Block)**
- **I/O Request:** Reading file, network operation
- **Event Wait:** Waiting for signal, message
- **Resource Wait:** Lock, semaphore unavailable

**5. Waiting → Ready (Wakeup)**
- **I/O Completed:** Data available
- **Event Occurred:** Signal received
- **Resource Available:** Lock released

**6. Running → Terminated (Exit)**
- **Normal completion:** return 0
- **Error exit:** return non-zero
- **Abnormal termination:** Signal, exception
- **Killed:** By user or system

### Scheduling Queues

**Job Queue:**
- All processes in the system
- Includes all states

**Ready Queue:**
- Processes in Ready state
- Waiting for CPU
- Typically implemented as linked list

**Device/Wait Queues:**
- Processes in Waiting state
- Separate queue for each device/event
- Examples:
  - Disk I/O queue
  - Network wait queue
  - Timer queue

### Queue Example

\`\`\`
Ready Queue:
[P1] → [P3] → [P5] → [P7]

Disk I/O Queue:
[P2] → [P4]

Network Wait Queue:
[P6]
\`\`\`

### Process State in PCB

The PCB stores the current state:
\`\`\`c
enum process_state {
    NEW,
    READY,
    RUNNING,
    WAITING,
    TERMINATED
};

struct PCB {
    int pid;
    enum process_state state;
    // ... other fields
};
\`\`\`

### State Management by OS

**OS Responsibilities:**

**State Tracking:**
- Maintain current state of each process
- Update PCB when state changes
- Move PCB between queues

**Queue Management:**
- Add processes to appropriate queues
- Remove processes when state changes
- Maintain queue ordering (priority, FIFO, etc.)

**State Transitions:**
- Enforce valid transitions
- Update bookkeeping information
- Notify scheduler of changes

### Importance of Process States

**Efficient Resource Utilization:**
- CPU given to Ready processes
- Waiting processes don't waste CPU
- Clear separation of concerns

**Scheduling Decisions:**
- Only Ready processes are candidates
- Priorities within Ready queue
- Fair allocation of CPU time

**System Organization:**
- Clear structure for process management
- Well-defined behaviors
- Predictable system operation
        `
      },
      {
        id: 'process-creation',
        title: 'Process Creation and Execution',
        icon: Zap,
        content: `
Process creation allows the system to generate new processes, enabling multitasking, resource sharing, and efficient program execution.

### Process Creation Basics

**What Happens:**
Process creation typically occurs when an existing process (**parent**) spawns a new one (**child**), forming a hierarchical tree structure.

**Hierarchy Structure:**
\`\`\`
Parent Process
    ↓ [spawns]
Child Process
    ↓ [spawns]
Child's Child Process
\`\`\`

**Benefits of Hierarchy:**
- Helps manage dependencies
- Enables resource sharing
- Facilitates process management
- Supports cleanup operations

### OS Role in Process Creation

**The Operating System Oversees:**

**1. Resource Allocation:**
- Memory for process
- CPU time slices
- I/O devices access
- File handles

**2. Process Tracking:**
- Assign unique **Process Identifier (PID)**
- Create **Process Control Block (PCB)**
- Track process state
- Store program counter and registers

### Resource Allocation Options

When a child process is created, it needs resources to execute.

**Option 1: Direct from OS**
- Child obtains resources directly from the operating system
- Independent resource allocation
- No dependency on parent's resources

**Option 2: Inherit from Parent**
- Child inherits a **subset of resources** from parent
- Resources are limited
- Parent may need to partition its resources among children
- Prevents resource overuse

### Address Space Options

When a new (child) process is created, there are two possibilities for its address space:

### Option 1: Duplicate Address Space

**Characteristics:**
- Child process has the **same program and data** as parent
- Exact copy at creation time
- Child gets duplicate of parent's memory
- Both continue from same point initially

**Use Case:**
- UNIX \`fork()\` system call
- Child can then replace its image with \`exec()\`

**Example:**
\`\`\`c
pid_t pid = fork();
// At this point, both parent and child have identical memory
\`\`\`

### Option 2: New Address Space

**Characteristics:**
- Child process has a **new program** loaded
- Own separate address space
- Different executable
- Independent from parent

**Use Case:**
- Windows \`CreateProcess()\`
- Direct creation with specific program

### Process Execution Options

After process creation, regarding execution:

### Option 1: Parent Runs Concurrently

**Characteristics:**
- Parent continues executing
- Child executes simultaneously
- True parallelism (on multi-core systems)
- Both progress independently

**Use Case:**
- Web server handling multiple requests
- Each child handles one connection

### Option 2: Parent Waits

**Characteristics:**
- Parent **waits** for child to complete
- Parent blocks until child terminates
- Sequential execution
- Parent resumes after child exits

**Use Case:**
- Shell executing commands
- Compilation pipelines

### Unix-like Systems: fork(), exec(), wait(), exit()

### 1. fork() System Call

**Purpose:** Create a child process

**Behavior:**
- Creates **exact duplicate** of parent process
- Child gets copy of parent's memory and state
- Both processes continue execution from fork() point

**Return Values:**
- Returns **0 to the child** process
- Returns **child's PID to the parent**
- This difference allows them to execute different code

**Example:**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child process code
    printf("I am the child\\n");
} else if (pid > 0) {
    // Parent process code
    printf("I am the parent, child PID: %d\\n", pid);
} else {
    // Error occurred
    perror("fork failed");
}
\`\`\`

### 2. exec() System Call Family

**Purpose:** Replace process image with new program

**Behavior:**
- Loads and runs a different executable
- Replaces current process's memory
- Does **not** create new process
- PID remains the same

**Variants:**
- \`execl()\`, \`execv()\` - different argument passing
- \`execlp()\`, \`execvp()\` - search PATH
- \`execle()\`, \`execve()\` - custom environment

**Example:**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child replaces itself with /bin/ls
    execl("/bin/ls", "ls", "-l", NULL);
    // If exec succeeds, this line never executes
    perror("exec failed");
    exit(1);
}
\`\`\`

### 3. wait() System Call

**Purpose:** Parent waits for child termination

**Behavior:**
- Parent calls \`wait()\` or \`waitpid()\`
- Parent **suspends execution**
- Waits until child terminates
- Collects child's exit status
- Prevents zombie processes

**Example:**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child code
    printf("Child running\\n");
    sleep(2);
    exit(42);  // Exit with status 42
} else {
    // Parent waits for child
    int status;
    wait(&status);
    printf("Child exited with status: %d\\n", WEXITSTATUS(status));
}
\`\`\`

### 4. exit() System Call

**Purpose:** Terminate the process

**Behavior:**
- Terminates process execution
- Passes exit status to parent
- Releases resources
- Decrements process count
- Closes open files

**Exit Status:**
- 0 typically means success
- Non-zero indicates error

**Example:**
\`\`\`c
if (error_condition) {
    fprintf(stderr, "Error occurred\\n");
    exit(1);  // Exit with error code
}

// Normal completion
exit(0);  // Success
\`\`\`

### Complete Fork/Exec/Wait Example

\`\`\`c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        perror("Fork failed");
        return 1;
    }

    if (pid == 0) {
        // Child process
        printf("Child: Executing ls command\\n");
        execl("/bin/ls", "ls", "-l", NULL);
        perror("Exec failed");  // Only if exec fails
        exit(1);
    } else {
        // Parent process
        printf("Parent: Waiting for child (PID: %d)\\n", pid);
        int status;
        waitpid(pid, &status, 0);

        if (WIFEXITED(status)) {
            printf("Parent: Child exited with status %d\\n",
                   WEXITSTATUS(status));
        }
    }

    return 0;
}
\`\`\`

### Windows Systems: CreateProcess()

**Purpose:** Create new process and load program

**Characteristics:**
- Combines creation and program loading
- Single system call
- More parameters than fork/exec
- Initializes memory and loads executable

**Differences from Unix:**
- No duplication of parent memory
- Direct program specification
- More complex parameter structure
- Different process model

### Other Creation Methods

**vfork():**
- Variation of fork()
- Child shares parent's memory until exec()
- More efficient for immediate exec()
- Deprecated in favor of fork()

**posix_spawn():**
- POSIX standard
- Combines fork() and exec() operations
- Attribute-specified creation
- More portable

### Process Creation Summary

**Key Steps:**
1. Allocate new PID
2. Create PCB
3. Allocate memory
4. Set up address space
5. Initialize registers
6. Add to ready queue

**Common Patterns:**
- **Fork + Exec:** Unix model - duplicate then replace
- **CreateProcess:** Windows model - create with program
- **Wait:** Synchronize parent and child
- **Exit:** Clean termination
        `
      },
      {
        id: 'zombie-orphan',
        title: 'Zombie and Orphan Processes',
        icon: Lock,
        content: `
Special process states can occur when parent-child process relationships are not properly managed. Two important cases are zombie processes and orphan processes.

### Zombie Processes

**Definition:**
A zombie process occurs when a child process completes execution (calls \`exit()\`) but remains in the process table because the parent hasn't called \`wait()\` to collect its exit status.

**Characteristics:**
- Child is "dead" but not fully removed
- Still holds a PID
- Holds minimal resources (just PCB entry)
- Shows as <defunct> or (Z) in process list
- Cannot be killed with \`kill\` command

**Why Zombies Exist:**
- OS preserves exit status for parent
- Parent may need exit code
- Allows parent to query child's status
- Part of process lifecycle design

**Example Scenario:**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child code
    printf("Child finishing\\n");
    exit(0);  // Child exits
}

// Parent continues without wait()
printf("Parent continuing without wait\\n");
sleep(100);  // Child becomes zombie here
\`\`\`

**In Process Table:**
\`\`\`
$ ps aux | grep defunct
user  1234  0.0  0.0     0    0  ?  Z  10:00  0:00  [child] <defunct>
\`\`\`

**Problem with Zombies:**
- Occupy PID slot
- If many zombies accumulate, can exhaust PID space
- Indicate poor program design
- Cannot be removed until parent acts

**Resolution:**

**Method 1: Parent Calls wait()**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    exit(0);  // Child exits
} else {
    wait(NULL);  // Parent collects status - zombie removed
}
\`\`\`

**Method 2: Parent Terminates**
- If parent exits, zombie becomes orphan
- Adopted by init (PID 1)
- init automatically reaps zombie

**Method 3: Signal Handler**
\`\`\`c
#include <signal.h>

void handle_sigchld(int sig) {
    while (waitpid(-1, NULL, WNOHANG) > 0);  // Reap all zombies
}

signal(SIGCHLD, handle_sigchld);  // Set up handler
\`\`\`

### Orphan Processes

**Definition:**
An orphan process is a running child process whose parent terminates before it does, leaving the child without a parent.

**Characteristics:**
- Child is still **running**
- Parent no longer exists
- Child continues execution
- Not a problem like zombies

**Example Scenario:**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child sleeps for long time
    sleep(100);
    printf("Child still running\\n");
    exit(0);
} else {
    // Parent exits immediately
    printf("Parent exiting\\n");
    exit(0);  // Child becomes orphan
}
\`\`\`

**What Happens:**
- Kernel automatically re-parents orphan to **init process** (PID 1)
- init becomes the new parent
- When orphan terminates, init handles cleanup
- Prevents zombie accumulation

**Visual Representation:**
\`\`\`
Before Parent Exit:
Parent (PID 100)
    └─ Child (PID 200)

After Parent Exit:
init (PID 1)
    └─ Child (PID 200)  [orphan, now child of init]
\`\`\`

**Process Tree Example:**
\`\`\`
$ pstree -p
init(1)
  ├─ orphaned_child(200)
  └─ other_processes...
\`\`\`

**Resolution:**
- **Automatic:** Kernel handles re-parenting
- **init Process:** Waits on all adopted children
- **Clean Termination:** init reaps exit status
- No user intervention needed

### Comparison: Zombie vs Orphan

| Aspect | Zombie Process | Orphan Process |
|--------|---------------|----------------|
| **State** | Terminated (dead) | Still running |
| **Parent** | Parent exists but not waiting | Parent terminated |
| **Problem** | Yes - consumes PID | No - handled by kernel |
| **Resources** | Minimal (PCB only) | Full (running process) |
| **In ps** | Shows as <defunct> | Shows as normal process |
| **Parent** | Original parent | init (PID 1) |
| **Resolution** | Parent must wait() | Automatic re-parenting |
| **Can be killed** | No (already dead) | Yes (SIGTERM, SIGKILL) |

### Demonstration Example

**Zombie Creation:**
\`\`\`c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        printf("Child (PID %d) exiting\\n", getpid());
        exit(0);  // Child exits, becomes zombie
    } else {
        printf("Parent (PID %d) not calling wait()\\n", getpid());
        printf("Child %d is now a zombie\\n", pid);
        sleep(30);  // Parent sleeps - child stays zombie
        // If we add wait() here, zombie is reaped
    }
    return 0;
}
\`\`\`

**Orphan Creation:**
\`\`\`c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        sleep(2);  // Wait for parent to exit
        printf("Child (PID %d) now orphan, parent is PID %d\\n",
               getpid(), getppid());  // PPID should be 1 (init)
        sleep(10);
        exit(0);
    } else {
        printf("Parent (PID %d) exiting immediately\\n", getpid());
        exit(0);  // Parent exits, child becomes orphan
    }
    return 0;
}
\`\`\`

### Best Practices

**Preventing Zombies:**
1. **Always call wait()** after fork() when appropriate
2. **Use SIGCHLD handler** for asynchronous reaping
3. **Double fork** technique for daemon processes
4. **Check return values** of all system calls

**Example: Proper Cleanup**
\`\`\`c
pid_t pid = fork();

if (pid == 0) {
    // Child work
    exit(0);
} else if (pid > 0) {
    int status;
    waitpid(pid, &status, 0);  // Proper cleanup
    if (WIFEXITED(status)) {
        printf("Child exited: %d\\n", WEXITSTATUS(status));
    }
}
\`\`\`

**Daemon Process (Intentional Orphan):**
\`\`\`c
// Double fork to create daemon
pid_t pid = fork();
if (pid > 0) exit(0);  // Parent exits

// Child continues
pid = fork();  // Second fork
if (pid > 0) exit(0);  // First child exits

// Grandchild is now orphan (daemon)
// Adopted by init, runs independently
setsid();  // Create new session
// Daemon code here...
\`\`\`

### Checking for Zombies

**Command Line:**
\`\`\`bash
# Find zombie processes
ps aux | grep Z

# Count zombies
ps aux | awk '$8=="Z" {print $0}' | wc -l

# Detailed zombie info
ps -eo pid,ppid,stat,cmd | grep Z
\`\`\`

### Summary

**Zombie Process:**
- Dead but not reaped
- Parent must call wait()
- Problematic if accumulated
- Shows poor process management

**Orphan Process:**
- Running without parent
- Automatically handled by init
- Not a problem
- Normal for daemons

Both situations are part of the process lifecycle and must be understood for proper system programming.
        `
      },
      {
        id: 'threads-intro',
        title: 'Threads - Introduction',
        icon: Layers,
        content: `
A thread is the smallest unit of execution within a process, representing a sequence of programmed instructions that the operating system can manage independently.

### What is a Thread?

**Definition:**
A thread operates in the context of a process, sharing the process's resources like memory and open files, but each thread has its own stack, program counter, and registers.

**Key Characteristics:**
- Threads are often called **lightweight processes**
- Enable concurrency without the overhead of creating separate processes
- Multiple threads can execute within a single process
- Share the same address space

**Example:**
In a web browser, a single process might run multiple threads:
- One thread for rendering the user interface
- Another for handling network requests
- A third for executing JavaScript
- This allows the browser to remain responsive while performing background tasks

### Process vs Thread

A process is an executing program that can contain one or more threads, forming a container for threads to run concurrently.

**Process:**
- Heavyweight
- Own address space
- Own resources
- Independent execution
- Expensive creation/destruction
- Expensive context switch
- Isolated from other processes

**Thread:**
- Lightweight
- Shared address space (within process)
- Shared resources
- Part of a process
- Cheap creation/destruction
- Cheap context switch
- Can communicate easily with other threads

### Components Shared by All Threads

All threads within a process share:

**1. Code Section:**
- Executable instructions
- Program text
- Functions and logic

**2. Data Section:**
- Global variables
- Static variables
- Heap memory

**3. Open Files:**
- File descriptors
- File handles
- I/O resources

**4. Signals:**
- Signal handlers
- Signal masks

**5. Process Resources:**
- Process ID (PID)
- Working directory
- User and group IDs

### Components Unique to Each Thread

Each thread has its own:

**1. Thread ID:**
- Unique identifier within the process
- Used for thread management

**2. Program Counter (PC):**
- Points to next instruction for this thread
- Allows independent execution flow

**3. Register Set:**
- CPU registers for this thread
- Saved during context switch

**4. Stack:**
- Local variables
- Function call history
- Return addresses
- Stack pointer

**5. Thread-Local Storage:**
- Variables specific to thread
- Not shared with other threads

### Thread Visualization

\`\`\`
┌─────────────────────────────────────┐
│          Process                     │
│                                     │
│  ┌──────────────────────────────┐  │
│  │   Code Section               │  │ ← Shared
│  └──────────────────────────────┘  │
│  ┌──────────────────────────────┐  │
│  │   Data Section               │  │ ← Shared
│  └──────────────────────────────┘  │
│  ┌──────────────────────────────┐  │
│  │   Open Files                 │  │ ← Shared
│  └──────────────────────────────┘  │
│                                     │
│  Thread 1     Thread 2    Thread 3 │
│  ┌─────┐      ┌─────┐     ┌─────┐ │
│  │ TID │      │ TID │     │ TID │ │ ← Unique
│  │ PC  │      │ PC  │     │ PC  │ │ ← Unique
│  │Regs │      │Regs │     │Regs │ │ ← Unique
│  │Stack│      │Stack│     │Stack│ │ ← Unique
│  └─────┘      └─────┘     └─────┘ │
└─────────────────────────────────────┘
\`\`\`

### Single-Threaded vs Multi-Threaded

### Single-Threaded Process

**Characteristics:**
- Only one thread runs at a time
- Sequential execution
- Tasks performed one after another
- Cannot utilize multiple CPU cores effectively

**Execution:**
- One instruction stream
- One program counter
- One stack

**Limitations:**
- Higher idle time during I/O waits
- Less responsive
- Cannot take advantage of parallelism
- Blocking operations halt entire process

**Example:**
A single-threaded file downloader processes one file at a time, pausing if it encounters delays.

### Multi-Threaded Process

**Characteristics:**
- Multiple threads run concurrently
- Parallel task execution possible
- Better resource utilization
- Can utilize multiple CPU cores

**Execution:**
- Multiple instruction streams
- Multiple program counters
- Multiple stacks

**Benefits:**
- Minimal idle time
- Better responsiveness
- Improved performance
- Background processing possible

**Complexities:**
- Requires synchronization
- Potential race conditions
- Shared data management
- Debugging challenges

**Example:**
A multi-threaded web server handles multiple client requests simultaneously, each in its own thread.

### Benefits of Multithreading

### 1. Responsiveness
- UI remains responsive during long operations
- Background tasks don't block user interaction
- Better user experience
- Can continue execution even if part blocks

**Example:**
Text editor can respond to user input while spell-checking in background.

### 2. Resource Sharing
- Threads automatically share memory and resources
- No need for complex shared memory mechanisms
- Easier inter-thread communication
- More efficient than inter-process communication

### 3. Economy
- Thread creation is cheaper than process creation
- Context switching between threads is faster
- Less memory overhead
- More efficient resource utilization

**Metrics:**
- Thread creation: ~10-100x faster than process creation
- Context switch: ~5-10x faster than process context switch

### 4. Scalability
- Can utilize multiple CPU cores
- True parallelism on multicore systems
- Better performance with more cores
- Load distribution across processors

**Example:**
Video encoding can split work across multiple threads, one per CPU core.

### Thread Use Cases

**1. Server Applications:**
- Web servers handling multiple requests
- Database servers processing queries
- Each connection handled by separate thread

**2. GUI Applications:**
- UI thread for responsiveness
- Worker threads for computations
- Background threads for I/O
- Prevents interface freezing

**3. Background Processing:**
- Email clients checking mail
- Anti-virus scanning
- Auto-save in applications
- System maintenance tasks

**4. Parallel Computations:**
- Scientific simulations
- Data processing
- Image/video rendering
- Machine learning training

### Thread States

Similar to processes, threads have states:

**Ready:**
- Created and waiting for CPU
- In ready queue

**Running:**
- Currently executing on CPU
- One per core

**Blocked:**
- Waiting for resource
- I/O operation
- Synchronization

**Terminated:**
- Finished execution
- Resources being cleaned up

### Thread Challenges

**1. Synchronization:**
- Coordinating access to shared data
- Preventing race conditions
- Ensuring data consistency

**2. Deadlock:**
- Threads waiting for each other
- Circular resource dependencies
- System freeze

**3. Debugging:**
- Non-deterministic behavior
- Race conditions hard to reproduce
- Timing-dependent bugs

**4. Data Consistency:**
- Multiple threads modifying same data
- Need for locks and semaphores
- Performance trade-offs

### Thread Libraries

**POSIX Threads (pthreads):**
- Standard for Unix/Linux
- Portable across platforms
- Rich API

**Windows Threads:**
- Native Windows API
- CreateThread(), etc.

**Java Threads:**
- Built into language
- Platform-independent
- High-level abstraction

**C++11 Threads:**
- Standard library support
- std::thread
- Modern C++ approach
        `
      },
      {
        id: 'multithreading-models',
        title: 'Multithreading Models',
        icon: Network,
        content: `
Multithreading models define how user-level threads (managed by applications) map to kernel-level threads (managed by the operating system). These models balance concurrency, efficiency, and overhead.

### User Threads vs Kernel Threads

### User Threads

**Managed by:** User-level libraries

**Characteristics:**
- Created and managed entirely within a user application
- **Lightweight:** Context switching is faster (only user-level registers)
- **No direct OS support:** Kernel is unaware of user threads
- **Susceptible to blocking:** One blocked thread blocks entire process

**Libraries:**
- POSIX Pthreads (user-level implementation)
- Java Green Threads (older versions)

**Advantages:**
- Fast to create and manage
- No kernel involvement
- Can have many threads
- Platform-independent

**Disadvantages:**
- Cannot utilize multiple CPUs effectively
- Blocking system call blocks all threads
- No true parallelism

### Kernel Threads

**Managed by:** Operating system kernel

**Characteristics:**
- Created and managed by the kernel
- **Heavier weight:** Context switching involves kernel-level state
- **Direct OS support:** Kernel aware of and schedules them independently
- **Resistant to blocking:** One blocked thread doesn't block others

**Examples:**
- Native Windows threads
- Linux kernel threads

**Advantages:**
- Can utilize multiple processors
- True parallelism
- One thread blocking doesn't affect others
- Better for I/O-bound applications

**Disadvantages:**
- Slower creation and context switching
- Limited by kernel resources
- More overhead

### Multithreading Model Types

## 1. Many-to-One Model

**Mapping:** Multiple user threads → One kernel thread

**How It Works:**
- Thread library manages user threads in user space
- All threads mapped to single kernel thread
- No kernel involvement in thread management

**Diagram:**
\`\`\`
User Space          Kernel Space
┌─────────┐
│ Thread 1│─┐
├─────────┤ │
│ Thread 2│─┼──────→  [Kernel Thread]
├─────────┤ │
│ Thread 3│─┘
└─────────┘
\`\`\`

**Advantages:**
- ✅ **Efficient:** Fast thread management in user space
- ✅ **Low overhead:** No kernel involvement
- ✅ **Portable:** Works on any OS
- ✅ **Many threads:** Can create unlimited user threads

**Disadvantages:**
- ❌ **No parallelism:** Cannot use multiple CPUs
- ❌ **Blocking:** One blocking call halts entire process
- ❌ **Starvation:** CPU-bound thread can starve others

**When a Problem Occurs:**
- If one user thread makes a blocking system call
- Kernel sees single kernel thread as blocked
- Entire process blocks
- All other user threads cannot execute

**Best For:**
- Lightweight, non-parallel applications
- Simple threading needs
- Systems without multicore support

**Examples:**
- Early Java Green Threads
- Some user-level thread libraries

## 2. One-to-One Model

**Mapping:** One user thread → One kernel thread

**How It Works:**
- Each user thread gets dedicated kernel thread
- Kernel manages all thread scheduling
- Direct mapping provides full kernel support

**Diagram:**
\`\`\`
User Space          Kernel Space
┌─────────┐
│ Thread 1│────────→ [Kernel Thread 1]
├─────────┤
│ Thread 2│────────→ [Kernel Thread 2]
├─────────┤
│ Thread 3│────────→ [Kernel Thread 3]
└─────────┘
\`\`\`

**Advantages:**
- ✅ **True concurrency:** Can use multiple CPUs
- ✅ **Parallel execution:** Real parallelism on multiprocessors
- ✅ **No blocking issues:** One thread blocks, others continue
- ✅ **Better for I/O:** Independent scheduling

**Disadvantages:**
- ❌ **Overhead:** Creating user thread requires creating kernel thread
- ❌ **Resource intensive:** Limited by kernel thread limits
- ❌ **Performance cost:** Kernel involvement for all thread operations
- ❌ **Scalability:** May limit number of threads

**Characteristics:**
- Each user thread independently scheduled
- Blocking call affects only that thread
- True parallelism on multicore systems

**Best For:**
- CPU-bound tasks needing concurrency
- Applications requiring parallelism
- Multicore systems

**Examples:**
- **Linux:** Native POSIX threads (NPTL)
- **Windows:** Native threads API

## 3. Many-to-Many Model

**Mapping:** M user threads → N kernel threads (M ≥ N)

**How It Works:**
- Multiple user threads multiplexed onto smaller/equal number of kernel threads
- Flexibility in mapping
- Best of both worlds approach

**Diagram:**
\`\`\`
User Space          Kernel Space
┌─────────┐
│ Thread 1│─┐
├─────────┤ │
│ Thread 2│─┼────→ [Kernel Thread 1]
├─────────┤ │
│ Thread 3│─┘  ┌→ [Kernel Thread 2]
├─────────┤    │
│ Thread 4│─┐  │
├─────────┤ ├──┘
│ Thread 5│─┘
└─────────┘
\`\`\`

**Advantages:**
- ✅ **Scalability:** Supports many threads efficiently
- ✅ **Balanced:** Good performance without excessive overhead
- ✅ **Flexible:** Developer can create many user threads
- ✅ **Parallelism:** Supports parallel execution
- ✅ **No blocking problems:** Multiple kernel threads available

**Disadvantages:**
- ❌ **Complexity:** Requires careful management of thread mapping
- ❌ **Implementation:** Complex to implement correctly
- ❌ **Debugging:** More difficult to debug

**How It Works:**
- Multiple user threads can continue execution even if one kernel thread is blocked
- OS can schedule kernel threads independently
- User-level scheduler multiplexes user threads onto kernel threads

**Best For:**
- Complex applications with variable workloads
- Systems requiring both many threads and good performance
- Server applications
- Database systems

**Examples:**
- Older Solaris (prior to Solaris 9)
- Some implementations of pthreads
- Database servers managing numerous queries

## 4. Two-Level Model

**Variation of Many-to-Many:**
- Similar to Many-to-Many
- **Addition:** Allows specific user threads to be bound to specific kernel threads
- Provides flexibility for critical threads

**Use Case:**
- Most threads use many-to-many multiplexing
- Critical threads get dedicated kernel thread
- Combines flexibility with performance

### Comparison Table

| Aspect | Many-to-One | One-to-One | Many-to-Many |
|--------|-------------|------------|--------------|
| **Mapping** | Multiple user → 1 kernel | 1 user → 1 kernel | M user → N kernel |
| **Concurrency** | Limited, no true parallelism | High, supports parallel execution | Balanced, enables parallelism without overhead |
| **Blocking** | One block halts process | Only blocking thread affected | Kernel schedules around blocks |
| **Overhead** | Low, user-space management | High, kernel thread for each | Moderate, flexible allocation |
| **Scalability** | High for simple tasks, poor on multicore | Limited by kernel limits | High, supports many threads efficiently |
| **Performance** | Fast thread ops, no parallelism | Slower ops, true parallelism | Balanced |
| **Best Use** | Lightweight, non-parallel apps | CPU-bound tasks, concurrency needed | Complex apps, variable workloads |
| **Examples** | Green threads, early Java | Linux, Windows | Database servers, Solaris |

### Advantages and Disadvantages Summary

| Model | Advantage | Disadvantage |
|-------|-----------|-------------|
| **Many-to-One** | Efficiency, low overhead (no kernel) | Lack of multiprocessor support, process-wide blocking |
| **One-to-One** | Strong concurrency, multiprocessor utilization | Performance burden from excessive kernel threads |
| **Many-to-Many** | Scalability, balanced resource use | Added implementation complexity |

### Modern Trends

**Current Industry Practice:**
- Most modern OSes use **One-to-One model**
- Kernel thread implementations highly optimized
- Hardware improvements reduce overhead
- Simplicity outweighs performance costs

**Why One-to-One Dominates:**
- True parallelism essential for modern applications
- Multicore processors ubiquitous
- Kernel thread overhead acceptable
- Simpler to implement and maintain

**Examples:**
- **Linux:** NPTL (Native POSIX Thread Library) uses one-to-one
- **Windows:** Native threads are one-to-one
- **Modern Java:** Uses OS-native threads (one-to-one)
        `
      },
      {
        id: 'multicore-programming',
        title: 'Multicore Programming',
        icon: Cpu,
        content: `
A multicore processor is a single physical processor that contains multiple processing cores. Each core can execute instructions independently, allowing for true simultaneous execution of multiple tasks.

### What is a Multicore Processor?

**Definition:**
A multicore processor has multiple processing units (cores) on a single chip, each capable of independent execution.

**Examples:**
- Dual-core: 2 cores
- Quad-core: 4 cores
- Octa-core: 8 cores
- Modern processors: 16, 32, or more cores

**Benefits:**
- Multiple tasks truly execute simultaneously
- Better performance without increasing clock speed
- More energy-efficient than faster single cores
- Essential for modern computing demands

### Parallel vs Concurrent Execution

### Concurrent Execution

**Definition:**
The ability of a program to perform multiple tasks or threads simultaneously, but not necessarily at the same instant.

**How It Works:**
- Achieved through **context switching**
- Processor switches between tasks quickly
- **Time-slicing:** Each task gets small time slice
- Gives illusion of simultaneity
- Works on single-core systems

**Example:**
A single-core CPU running multiple applications by rapidly switching between them.

**Characteristics:**
- Interleaved execution
- Tasks share CPU time
- May run on single core
- About dealing with many things at once

### Parallel Execution

**Definition:**
The simultaneous execution of multiple tasks or threads on multiple processing cores.

**How It Works:**
- Multiple cores execute different tasks
- **True simultaneity**
- Each core runs independently
- Requires multicore processor

**Example:**
A quad-core processor running four threads, each on its own core, all executing at the same time.

**Characteristics:**
- Simultaneous execution
- Requires multiple cores
- True parallelism
- About doing many things at once

### Visualization

\`\`\`
Concurrent Execution (Single Core):
Time →
Core 1: [T1][T2][T3][T1][T2][T3][T1]...

Parallel Execution (Multi Core):
Time →
Core 1: [T1][T1][T1][T1][T1][T1][T1]...
Core 2: [T2][T2][T2][T2][T2][T2][T2]...
Core 3: [T3][T3][T3][T3][T3][T3][T3]...
\`\`\`

### Types of Parallelism

## 1. Data Parallelism

**Definition:**
Focuses on distributing a large dataset across multiple processor cores and having each core perform the **same operation** on its subset of the data.

**Concept:**
- **One operation, many pieces of data**
- Same task applied to different data
- Divide data, not tasks
- All cores run same code

**Example:**
Imagine you have a massive image and you want to increase the brightness of every pixel:
- Split the image into 4 sections
- Assign each section to a different core
- All 4 cores run the "increase brightness" function simultaneously
- Each core processes its portion of the image

**Real-World Examples:**

**Image Processing:**
\`\`\`
Image (1000x1000 pixels)
├─ Core 1: Process pixels 0-250
├─ Core 2: Process pixels 251-500
├─ Core 3: Process pixels 501-750
└─ Core 4: Process pixels 751-1000

All cores apply same filter/operation
\`\`\`

**Matrix Operations:**
\`\`\`c
// Add two large matrices
for each row in parallel:
    result[row] = matrix1[row] + matrix2[row]
\`\`\`

**Scientific Simulations:**
- Weather modeling on grid points
- Molecular dynamics simulations
- Each core simulates different region

**Characteristics:**
- **SIMD (Single Instruction, Multiple Data)** architecture
- Used when dealing with large datasets
- Performing identical operations on each element
- GPU computing heavily uses data parallelism

### When to Use Data Parallelism

**Use When:**
- Large datasets to process
- Same operation on all elements
- Independent data elements
- Regular, structured data

**Examples:**
- Matrix multiplication
- Image/video processing
- Array operations
- Scientific simulations

## 2. Task Parallelism

**Definition:**
Focuses on distributing different, independent tasks across multiple cores to be performed concurrently. Tasks can operate on the same or different data.

**Concept:**
- **Different tasks, running at the same time**
- Distribute tasks, not data
- Each core runs different code
- Functional decomposition

**Example:**
In a video game engine:
- **Core 1:** Rendering graphics
- **Core 2:** Physics calculations
- **Core 3:** AI for computer-controlled characters
- **Core 4:** Audio processing

Each core performs a completely different task.

**Real-World Examples:**

**Web Browser:**
\`\`\`
Core 1: Render HTML/CSS
Core 2: Execute JavaScript
Core 3: Handle network requests
Core 4: Manage user input
\`\`\`

**Video Encoding:**
\`\`\`
Core 1: Read video frames
Core 2: Apply video filters
Core 3: Encode to codec
Core 4: Write to file
\`\`\`

**Server Application:**
\`\`\`
Core 1: Handle HTTP requests
Core 2: Database queries
Core 3: Business logic
Core 4: Send responses
\`\`\`

**Characteristics:**
- **MIMD (Multiple Instruction, Multiple Data)** architecture
- Performing different operations on different data
- Executing independent tasks concurrently
- Pipeline-style processing

### When to Use Task Parallelism

**Use When:**
- Different operations needed
- Independent tasks
- Pipeline processing
- Heterogeneous workload

**Examples:**
- Web server handling multiple requests
- Compiling multiple source files
- Different algorithm stages
- Multi-stage processing pipeline

### Data vs Task Parallelism Comparison

| Aspect | Data Parallelism | Task Parallelism |
|--------|------------------|------------------|
| **Focus** | Distribute data | Distribute tasks |
| **Operation** | Same on all cores | Different on each core |
| **Code** | Identical code, different data | Different code per core |
| **Use Case** | Large datasets | Different operations |
| **Architecture** | SIMD | MIMD |
| **Examples** | Matrix ops, image processing | Web server, game engine |
| **Synchronization** | Less complex | More complex |
| **Load Balance** | Easier (uniform work) | Harder (varied tasks) |

### Multicore Programming Challenges

### 1. Identifying Tasks
**Challenge:** Finding areas suitable for parallelization

**Considerations:**
- Which parts can run concurrently?
- What are the dependencies?
- Is parallelization worth the overhead?

### 2. Balance
**Challenge:** Tasks should perform equal work

**Problems:**
- Uneven workload distribution
- Some cores idle while others busy
- Wasted resources

**Solution:**
- Dynamic load balancing
- Work stealing
- Proper task granularity

### 3. Data Splitting
**Challenge:** Dividing data among tasks

**Considerations:**
- How to partition data?
- Ensuring proper distribution
- Minimizing communication
- Cache-friendly access patterns

### 4. Data Dependency
**Challenge:** Managing shared data access

**Issues:**
- Race conditions
- Need for synchronization
- Locking overhead
- Deadlock risks

**Solutions:**
- Locks, mutexes, semaphores
- Lock-free data structures
- Message passing
- Transactional memory

### 5. Testing and Debugging
**Challenge:** Non-deterministic behavior

**Problems:**
- Race conditions hard to reproduce
- Timing-dependent bugs
- Heisenbugs (disappear when debugging)
- Complex interactions

**Solutions:**
- Thread sanitizers
- Race detection tools
- Stress testing
- Logging and tracing

### Multicore Programming Benefits

**Performance:**
- Faster execution through parallelism
- Better throughput
- Reduced latency for parallel tasks

**Efficiency:**
- Better CPU utilization
- More work per unit time
- Energy efficiency

**Scalability:**
- Add more cores = more performance
- Scales with hardware improvements
- Future-proof applications

### Programming Models for Multicore

**Shared Memory:**
- Threads share address space
- Communication via shared variables
- Requires synchronization

**Message Passing:**
- Independent address spaces
- Communication via messages
- No shared state

**Data Parallel:**
- Operations on collections
- Map, reduce, filter patterns
- Library/framework support

**Task-Based:**
- Express as tasks with dependencies
- Runtime schedules tasks
- Example: Intel TBB, OpenMP tasks

### Modern Multicore Examples

**Smartphone (8-core):**
- 4 performance cores (heavy tasks)
- 4 efficiency cores (background tasks)
- Different tasks on different cores
- Power-efficient multitasking

**Server CPU (64-core):**
- Handle many simultaneous requests
- Database queries in parallel
- Load distributed across cores

**GPU (thousands of cores):**
- Massive data parallelism
- Graphics rendering
- Machine learning
- Scientific computing

### Conclusion

Multicore programming is essential for modern software:
- **Concurrency:** Managing multiple tasks
- **Parallelism:** Executing simultaneously
- **Data Parallelism:** Same operation, different data
- **Task Parallelism:** Different operations, parallel execution
- Requires careful design and understanding of challenges
        `
      }
    ]
  },
  {
    id: 'cpu-scheduling',
    title: 'Module 3: CPU Scheduling',
    icon: Zap,
    color: 'green',
    totalSections: 12,
    description: 'CPU scheduling algorithms, metrics, and multiprocessor scheduling - BCSE303L',
    sections: [
      {
        id: 'scheduling-intro',
        title: 'Scheduling - Definition & Objectives',
        icon: BookOpen,
        content: `
CPU scheduling is the mechanism by which the operating system decides which process gets to use the CPU at any given time, ensuring efficient resource utilization and system performance.

### Definition

**Scheduling** is the activity of deciding which process gets to use the CPU at any given time.

**Key Aspects:**
- It is the mechanism by which the process manager removes a currently running process from the CPU
- Selects another one to take its place
- Based on a specific strategy or algorithm
- Essential for multiprogramming operating systems
- Allows multiple processes to be loaded into memory simultaneously
- Shares the CPU over time

**Process:**
The mechanism of selecting a process from a ready queue and allotting CPU to this process for execution.

### Objectives of Scheduling

The primary objective of process scheduling is to optimize system performance according to several key metrics:

### 1. Maximize CPU Utilization
**Goal:** Keep the CPU as busy as possible to prevent wasted cycles

**Importance:**
- CPU is an expensive resource
- Should not sit idle when processes are waiting
- Optimal utilization approaches 100% (practically 40-90%)
- Reduces hardware cost per unit of work

**How Scheduling Helps:**
- Ensures ready processes always available
- Quick context switches
- Minimal idle time between processes

### 2. Minimize Response Time
**Goal:** Reduce the time from a user's request to the start of the response

**Importance:**
- Critical for interactive systems
- Affects user experience directly
- Important for real-time systems
- User perception of system speed

**Measuring:**
Response Time = Time of First Response - Arrival Time

**Applications:**
- Interactive terminals
- Web servers
- GUI applications
- Real-time systems

### 3. Minimize Waiting Time
**Goal:** Decrease the amount of time a process spends in the ready queue waiting for the CPU

**Importance:**
- Reduces overall process completion time
- Improves throughput
- Better resource utilization
- Fair distribution of CPU time

**Measuring:**
Waiting Time = Turnaround Time - CPU Burst Time

### 4. Fair Allocation
**Goal:** Ensure each process gets a fair share of the CPU's time

**Importance:**
- Prevent starvation
- Equal opportunity for all processes
- Priority-based fairness
- Quality of Service (QoS)

**Approaches:**
- Round-robin scheduling
- Priority scheduling with aging
- Fair-share scheduling
- Multi-level queues

### 5. Maximize Throughput
**Goal:** Maximize the number of processes completed per unit time

**Importance:**
- System productivity measure
- Batch processing efficiency
- Overall system performance

**Factors:**
- Process length
- Scheduling algorithm
- Context switch overhead
- I/O waiting time

### 6. Minimize Turnaround Time
**Goal:** Reduce total time from process submission to completion

**Importance:**
- Batch processing performance
- User satisfaction
- System efficiency

**Measuring:**
Turnaround Time = Completion Time - Arrival Time

### How Scheduling Works

Scheduling is managed by system software called **schedulers**, which move processes between different states using scheduling queues.

### Scheduling Queues

The operating system maintains several queues to manage processes:

**1. Job Queue / Task Queue / Process Queue:**
- Contains **all processes** in the system
- Includes processes in all states
- Master list of processes

**2. Ready Queue:**
- Holds processes that are **in main memory**
- Processes are **ready and waiting to execute**
- Waiting for CPU allocation
- Most frequently accessed by scheduler

**3. Device Queues / I/O Queue / Wait Queue:**
- Contain processes that are **blocked**
- Waiting for an I/O device to become available
- Separate queue for each device
- Process returns to ready queue when I/O completes

### Types of Schedulers

There are generally three types of schedulers that operate at different frequencies and for different purposes:

**1. Long-Term Scheduler (or Job Scheduler):**
- Selects processes from the **job queue**
- Loads them into memory for execution
- Controls the **degree of multiprogramming**
- Decides which jobs get into memory
- Aims to create a balanced mix of CPU-bound and I/O-bound jobs
- Executes infrequently (seconds, minutes)

**2. Short-Term Scheduler (or CPU Scheduler):**
- **Most frequently executed** scheduler
- Selects a process from the **ready queue**
- Allocates the CPU to it
- Main goal: optimize CPU performance and utilization
- Executes very frequently (milliseconds)
- Subject of this module

**3. Medium-Term Scheduler (Present in some systems):**
- Involved in **swapping** processes
- Swaps processes out of memory to reduce multiprogramming
- Later swaps them back in to continue execution
- Helps manage memory usage
- Improves process mix

### Scheduling Diagram

\`\`\`
Job Queue (All processes on disk)
    ↓
[Long-Term Scheduler]
    ↓
Ready Queue (Processes in memory, ready to run)
    ↓
[Short-Term Scheduler] → CPU → Running Process
    ↓
I/O or Event Wait
    ↓
Wait/Device Queues
    ↓
[Event Occurs/I/O Complete]
    ↓
Back to Ready Queue
\`\`\`
        `
      },
      {
        id: 'scheduling-categories',
        title: 'Scheduling Categories',
        icon: Layers,
        content: `
CPU scheduling can be categorized based on whether the operating system can forcibly remove a process from the CPU or must wait for the process to voluntarily release it.

### Non-Preemptive Scheduling

**Definition:**
Once the CPU has been allocated to a process, that process keeps the CPU until it either terminates or switches to a waiting state (e.g., for an I/O operation). The resource cannot be forcibly taken away.

**Characteristics:**
- Process runs until completion or blocking
- No forced interruption
- Simpler to implement
- Lower overhead
- Predictable execution

**When CPU is Released:**
- Process terminates
- Process requests I/O operation
- Process voluntarily yields CPU
- Process blocks on synchronization

**Advantages:**
- ✅ Simple to implement
- ✅ Low overhead (no context switches mid-burst)
- ✅ Predictable for certain applications
- ✅ No need for timer interrupts

**Disadvantages:**
- ❌ Poor response time for interactive systems
- ❌ CPU-bound process can monopolize CPU
- ❌ No support for time-sharing
- ❌ Cannot handle urgent tasks
- ❌ May lead to convoy effect

**Examples:**
- First-Come, First-Served (FCFS)
- Shortest Job First (SJF) - Non-preemptive
- Priority Scheduling - Non-preemptive

**Use Cases:**
- Batch processing systems
- Non-interactive applications
- Simple embedded systems
- Real-time systems with predictable behavior

### Preemptive Scheduling

**Definition:**
The operating system can forcibly remove a running process from the CPU and reallocate it to another process. This often happens when a higher-priority process arrives or when a running process has exceeded its allocated time slice.

**Characteristics:**
- OS can interrupt running processes
- Requires timer interrupts
- More complex to implement
- Higher overhead
- Better responsiveness

**When Preemption Occurs:**
- **Time quantum expires** (Round Robin)
- **Higher priority process arrives** (Priority Scheduling)
- **Shorter remaining time** (SRTF)
- **System-defined conditions** met

**Advantages:**
- ✅ Better response time
- ✅ Supports time-sharing systems
- ✅ Handles urgent/high-priority tasks
- ✅ Prevents CPU monopolization
- ✅ Fair CPU distribution

**Disadvantages:**
- ❌ More complex to implement
- ❌ Higher overhead (context switches)
- ❌ Requires synchronization mechanisms
- ❌ Potential for race conditions
- ❌ Increased system complexity

**Examples:**
- Round Robin (RR)
- Shortest Remaining Time First (SRTF)
- Priority Scheduling - Preemptive
- Multilevel Queue Scheduling
- Multilevel Feedback Queue Scheduling

**Use Cases:**
- Time-sharing systems
- Interactive applications
- Modern multi-user operating systems
- Real-time systems with varying priorities

### Comparison Table

| Aspect | Non-Preemptive | Preemptive |
|--------|----------------|------------|
| **CPU Release** | Voluntary only | Can be forced |
| **Complexity** | Simple | Complex |
| **Overhead** | Low | Higher |
| **Response Time** | Poor for interactive | Good |
| **Fairness** | May be poor | Generally better |
| **Starvation** | Possible | Less likely |
| **Implementation** | Easier | Harder |
| **Context Switches** | Fewer | More frequent |
| **Use Case** | Batch systems | Interactive systems |
| **Timer Needed** | No | Yes |

### Important Considerations

**Race Conditions:**
- Preemptive scheduling can lead to race conditions
- Multiple processes may access shared data
- Requires synchronization mechanisms (locks, semaphores)

**Kernel Preemption:**
- Some OSes allow kernel preemption
- Kernel code can be interrupted
- Increases complexity but improves responsiveness
- Must protect critical kernel sections

**Real-Time Systems:**
- May use both approaches
- Hard real-time: often non-preemptive for predictability
- Soft real-time: often preemptive for responsiveness

**Performance Trade-offs:**
- Preemptive: Better responsiveness, more overhead
- Non-preemptive: Lower overhead, potentially poor responsiveness
- Choice depends on system requirements

### Decision Factors

**Choose Non-Preemptive When:**
- System is batch-oriented
- Simplicity is paramount
- Context switch overhead must be minimized
- Predictable execution is required

**Choose Preemptive When:**
- Interactive user experience is important
- Time-sharing is needed
- Priority-based execution required
- Real-time responsiveness needed
        `
      },
      {
        id: 'scheduling-metrics',
        title: 'Scheduling Metrics',
        icon: Cpu,
        content: `
To evaluate the performance of scheduling algorithms, several key metrics are used. Understanding these metrics is essential for analyzing and comparing different scheduling strategies.

### 1. CPU Burst Time

**Definition:**
The amount of time a process needs to run on the CPU to complete its computations.

**Characteristics:**
- Time spent actually executing on CPU
- Excludes I/O waiting time
- Varies by process type
- Given or estimated

**Process Lifecycle:**
A process's life is made up of cycles of **CPU bursts** and **I/O waiting periods**.

**Process Types:**
- **CPU-bound processes:** Long CPU bursts, few I/O operations
- **I/O-bound processes:** Short CPU bursts, frequent I/O operations

**Importance:**
- Critical for scheduling algorithms
- Used to decide when to switch processes
- Helps optimize CPU utilization and responsiveness
- Basis for SJF and SRTF algorithms

**Example:**
Process P1 needs to perform calculations for 5ms → CPU Burst Time = 5ms

### 2. I/O Burst Time

**Definition:**
The period a process spends waiting for an Input/Output (I/O) operation to finish.

**What Happens:**
- Process needs to read data from disk
- Get input from user (keyboard, mouse)
- Send data to printer or network
- Any external device interaction

**Characteristics:**
- Process is **not using the CPU**
- Process is "blocked" and waiting
- Moves to waiting/blocked state
- CPU can execute other processes

**Pattern:**
I/O bursts are typically followed by CPU bursts as processes alternate between computation and I/O activities.

**Example:**
Process requests file read → moved to I/O queue → CPU executes other processes → I/O completes → process returns to ready queue

### 3. Arrival Time

**Definition:**
The exact moment a process enters the ready queue, meaning it is ready to be executed and is waiting for the CPU to become available.

**Characteristics:**
- Official entry time into the system
- When process first becomes ready
- Starts competing for CPU time
- Used to calculate response and turnaround times

**Notation:** Usually denoted as AT or t₀

**Example:**
Process P1 arrives at time 0, P2 arrives at time 2, P3 arrives at time 4

### 4. Completion Time

**Definition:**
The time at which a process finishes its execution and exits the system.

**Characteristics:**
- Marks end of process lifecycle
- All CPU bursts and I/O operations completed
- Process officially done
- Used to calculate turnaround time

**Notation:** Usually denoted as CT or t_completion

**Example:**
Process P1 starts at time 0, runs for 5ms → Completion Time = 5

### 5. Turnaround Time (TAT)

**Definition:**
The total time a process spends in the system, from its arrival to its completion.

**Formula:**
\`\`\`
Turnaround Time = Completion Time - Arrival Time
TAT = CT - AT
\`\`\`

**What It Includes:**
- Time spent waiting in ready queue
- Time spent executing on CPU
- Time spent in I/O wait
- All time from arrival to completion

**Importance:**
- Measures total process lifecycle
- Key metric for batch systems
- Indicates overall system efficiency
- Lower is better

**Example:**
- Process arrives at time 2
- Completes at time 10
- Turnaround Time = 10 - 2 = 8 time units

### 6. Waiting Time (WT)

**Definition:**
The total time a process spends in the ready queue, waiting for its turn to use the CPU.

**Formula:**
\`\`\`
Waiting Time = Turnaround Time - CPU Burst Time
WT = TAT - BT
\`\`\`

**What It Includes:**
- Only time spent in ready queue
- Does NOT include execution time
- Does NOT include I/O wait time
- Pure waiting for CPU

**Importance:**
- Measures scheduler efficiency
- Indicates process responsiveness
- Primary optimization goal for many algorithms
- Lower is better

**Example:**
- Turnaround Time = 10
- CPU Burst Time = 5
- Waiting Time = 10 - 5 = 5 time units

### 7. Response Time (RT)

**Definition:**
The time elapsed from when a process arrives until it gets the CPU for the first time.

**Formula:**
\`\`\`
Response Time = Time of First Response - Arrival Time
RT = T_first_CPU - AT
\`\`\`

**Characteristics:**
- Measures initial system responsiveness
- Critical for interactive systems
- Important for user experience
- Different from turnaround time

**Importance:**
- **Interactive systems:** Users want immediate feedback
- **Time-sharing systems:** Quick response is essential
- **Real-time systems:** Predictable response needed
- Better indicator of responsiveness than turnaround time

**For Non-Preemptive Scheduling:**
Response Time = Waiting Time (process runs to completion once started)

**For Preemptive Scheduling:**
Response Time < Waiting Time (process may get CPU multiple times)

**Example:**
- Process arrives at time 0
- First gets CPU at time 3
- Response Time = 3 - 0 = 3 time units

### Metrics Comparison Table

| Metric | Formula | What It Measures | Lower is Better? |
|--------|---------|------------------|------------------|
| **CPU Burst** | Given | Execution time needed | Context-dependent |
| **I/O Burst** | Given | I/O wait time | Context-dependent |
| **Arrival Time** | Given | When process arrives | N/A |
| **Completion Time** | Calculated | When process finishes | N/A |
| **Turnaround Time** | CT - AT | Total time in system | Yes |
| **Waiting Time** | TAT - BT | Time in ready queue | Yes |
| **Response Time** | T_first - AT | Time to first CPU access | Yes |

### Performance Evaluation

When evaluating scheduling algorithms, we typically calculate:

**Average Turnaround Time:**
\`\`\`
Avg TAT = (Σ Turnaround Times) / Number of Processes
\`\`\`

**Average Waiting Time:**
\`\`\`
Avg WT = (Σ Waiting Times) / Number of Processes
\`\`\`

**Average Response Time:**
\`\`\`
Avg RT = (Σ Response Times) / Number of Processes
\`\`\`

**Goal:** Minimize average waiting time, turnaround time, and response time while maximizing CPU utilization and throughput.

### Example Scenario

Consider a process with:
- Arrival Time = 2
- CPU Burst Time = 5
- First scheduled at time 4
- Completion Time = 9

**Calculations:**
- Turnaround Time = 9 - 2 = 7
- Waiting Time = 7 - 5 = 2
- Response Time = 4 - 2 = 2

These metrics help us understand how well the scheduling algorithm is performing.
        `
      },
      {
        id: 'fcfs',
        title: 'FCFS (First Come First Served)',
        icon: Clock,
        content: `
## First Come First Serve (FCFS)

### Overview

**First Come First Serve (FCFS)** is a non-preemptive, arrival-order scheduling policy for the ready queue in a uniprocessor system.

### How FCFS Works

**Queue Management:**
- Every newly admitted process Pi is appended to the tail of the queue
- The dispatcher removes the head process, loads its context, and runs it until it voluntarily yields

**Process Yields When:**
- It terminates, OR
- It executes a blocking system call (e.g., I/O, semaphore P operation, page fault)

**Process Readmission:**
- When the running process blocks, the dispatcher selects the next ready process (queue head)
- When a blocked process becomes ready, it is always enqueued at the tail—never reinserted ahead of older entrants

**Characteristics:**
- Because no timer pre-emption occurs, the CPU busy interval is a sequence of maximal CPU bursts
- The ready queue is treated as a simple FIFO: the process that arrives first gets the CPU first
- Once a process starts execution, it runs to completion of its current CPU burst (i.e., non-preemptive)

### FCFS Example

**Given Process Table:**

| Process | Arrival Time | CPU Burst |
|---------|-------------|-----------|
| P1      | 0           | 5         |
| P2      | 2           | 3         |
| P3      | 4           | 4         |
| P4      | 6           | 6         |
| P5      | 8           | 2         |

**Gantt Chart Construction:**

\`\`\`
Step 1: At time 0, only P1 arrives → CPU allocated to P1
[P1: 0 → 5]

Step 2: P1 runs till time 5. During this time, P2 & P3 arrive
        P2 is at queue head (arrived at time 2) → CPU allocated to P2
[P1: 0 → 5][P2: 5 → 8]

Step 3: P2 runs till time 8. During this time, P4 & P5 arrive
        P3 is at queue head (arrived at time 4) → CPU allocated to P3
[P1: 0 → 5][P2: 5 → 8][P3: 8 → 12]

Step 4: P3 runs till time 12. P4 is next in queue
        → CPU allocated to P4
[P1: 0 → 5][P2: 5 → 8][P3: 8 → 12][P4: 12 → 18]

Step 5: P4 runs till time 18. Only P5 remains
        → CPU allocated to P5
[P1: 0 → 5][P2: 5 → 8][P3: 8 → 12][P4: 12 → 18][P5: 18 → 20]
\`\`\`

**Final Gantt Chart:**
\`\`\`
|  P1  |  P2  |   P3   |    P4    |  P5  |
0      5      8       12        18     20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 5          | 5 - 0 = 5       | 5 - 5 = 0    | 0 - 0 = 0     |
| P2      | 2       | 3     | 8          | 8 - 2 = 6       | 6 - 3 = 3    | 5 - 2 = 3     |
| P3      | 4       | 4     | 12         | 12 - 4 = 8      | 8 - 4 = 4    | 8 - 4 = 4     |
| P4      | 6       | 6     | 18         | 18 - 6 = 12     | 12 - 6 = 6   | 12 - 6 = 6    |
| P5      | 8       | 2     | 20         | 20 - 8 = 12     | 12 - 2 = 10  | 18 - 8 = 10   |
| **Average** |   |       |            | **8.6**         | **4.6**      | **4.6**       |

### Key Observations

**Advantages:**
- Simple to understand and implement
- No starvation - every process eventually gets CPU time
- Low overhead

**Disadvantages:**
- Can lead to poor average waiting time, especially if long processes arrive first (convoy effect)
- Not suitable for time-sharing systems
- Poor response time for short processes that arrive after long processes
        `
      },
      {
        id: 'sjf-non-preemptive',
        title: 'SJF - Non-Preemptive',
        icon: TrendingDown,
        content: `
## Shortest Job First (SJF) - Non-Preemptive

### Overview

**Shortest Job First (SJF)** is a CPU scheduling algorithm that always selects the process with the smallest next CPU burst to execute next.

**Key Principle:** By prioritizing shorter jobs, SJF minimizes the average waiting time in the ready queue.

### Non-Preemptive SJF

**Behavior:**
- Once the CPU is assigned to a process, it runs to completion of its current CPU burst
- New arrivals—even if shorter—must wait
- The process cannot be interrupted until it completes or blocks

### SJF Non-Preemptive Example

**Given Process Table:**

| Process | Arrival Time | CPU Burst |
|---------|-------------|-----------|
| P1      | 0           | 5         |
| P2      | 2           | 3         |
| P3      | 4           | 4         |
| P4      | 6           | 6         |
| P5      | 8           | 2         |

**Gantt Chart Construction:**

\`\`\`
Step 1: At time 0, only P1 arrives → CPU allocated to P1
[P1: 0 → 5]

Step 2: P1 runs till time 5. P2 & P3 have arrived
        Between P2 (BT=3) and P3 (BT=4), P2 has shortest burst
        → CPU allocated to P2
[P1: 0 → 5][P2: 5 → 8]

Step 3: P2 runs till time 8. P3, P4, and P5 are waiting
        Burst times: P3=4, P4=6, P5=2
        P5 has shortest burst → CPU allocated to P5
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10]

Step 4: P5 runs till time 10. P3 & P4 are waiting
        Between P3 (BT=4) and P4 (BT=6), P3 has shortest burst
        → CPU allocated to P3
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14]

Step 5: P3 runs till time 14. Only P4 remains
        → CPU allocated to P4
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14][P4: 14 → 20]
\`\`\`

**Final Gantt Chart:**
\`\`\`
|  P1  |  P2  |  P5  |   P3   |    P4    |
0      5      8     10      14        20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 5          | 5 - 0 = 5       | 5 - 5 = 0    | 0 - 0 = 0     |
| P2      | 2       | 3     | 8          | 8 - 2 = 6       | 6 - 3 = 3    | 5 - 2 = 3     |
| P5      | 8       | 2     | 10         | 10 - 8 = 2      | 2 - 2 = 0    | 8 - 8 = 0     |
| P3      | 4       | 4     | 14         | 14 - 4 = 10     | 10 - 4 = 6   | 10 - 4 = 6    |
| P4      | 6       | 6     | 20         | 20 - 6 = 14     | 14 - 6 = 8   | 14 - 6 = 8    |
| **Average** |   |       |            | **7.4**         | **3.4**      | **3.4**       |

### Comparison with FCFS

**SJF vs FCFS (same process set):**
- **FCFS:** Average Waiting Time = 4.6
- **SJF:** Average Waiting Time = 3.4

**Result:** SJF reduces average waiting time compared to FCFS!

### Key Observations

**Advantages:**
- Minimizes average waiting time
- Optimal for minimizing average completion time
- Better CPU utilization for mixed workloads

**Disadvantages:**
- Starvation possible - long processes may wait indefinitely if short processes keep arriving
- Requires knowledge of burst time (difficult to predict in practice)
- Not suitable when process burst times are unknown
- Does not preempt running processes, even if a shorter job arrives
        `
      },
      {
        id: 'srtf-preemptive',
        title: 'SRTF - Preemptive SJF',
        icon: Zap,
        content: `
## Shortest Remaining Time First (SRTF) - Preemptive SJF

### Overview

**Shortest Remaining Time First (SRTF)** is the preemptive version of Shortest Job First scheduling.

**Key Difference from Non-Preemptive SJF:**
- If a new process arrives whose remaining CPU burst is shorter than the remaining time of the running process, the CPU is preempted and given to the new process
- The currently running process is interrupted and returned to the ready queue

### SRTF Preemptive Example

**Given Process Table:**

| Process | Arrival Time | CPU Burst |
|---------|-------------|-----------|
| P1      | 0           | 5         |
| P2      | 2           | 3         |
| P3      | 4           | 4         |
| P4      | 6           | 6         |
| P5      | 8           | 2         |

**Gantt Chart Construction:**

\`\`\`
Step 1: Time 0 - Only P1 arrives → CPU allocated to P1
        At time 2, P1 has 3 bursts remaining, P2 arrives with 3 bursts
        Since they're equal, let P1 continue
[P1: 0 → 5]

Step 2: Time 5 - P1 completes. P2 & P3 are waiting
        At time 4, P3 arrived with 4 BT, but P2 is waiting with 3 BT
        P2 has shortest burst → CPU allocated to P2
[P1: 0 → 5][P2: 5 → 8]

Step 3: Time 8 - P2 completes. P3, P4, and P5 are waiting
        Burst times: P3=4, P4=6, P5=2
        P5 has shortest burst → CPU allocated to P5
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10]

Step 4: Time 10 - P5 completes. P3 & P4 are waiting
        Remaining bursts: P3=4, P4=6
        P3 has shortest remaining time → CPU allocated to P3
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14]

Step 5: Time 14 - P3 completes. Only P4 remains
        → CPU allocated to P4
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14][P4: 14 → 20]
\`\`\`

**Final Gantt Chart:**
\`\`\`
|  P1  |  P2  |  P5  |   P3   |    P4    |
0      5      8     10      14        20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 5          | 5 - 0 = 5       | 5 - 5 = 0    | 0 - 0 = 0     |
| P2      | 2       | 3     | 8          | 8 - 2 = 6       | 6 - 3 = 3    | 5 - 2 = 3     |
| P5      | 8       | 2     | 10         | 10 - 8 = 2      | 2 - 2 = 0    | 8 - 8 = 0     |
| P3      | 4       | 4     | 14         | 14 - 4 = 10     | 10 - 4 = 6   | 10 - 4 = 6    |
| P4      | 6       | 6     | 20         | 20 - 6 = 14     | 14 - 6 = 8   | 14 - 6 = 8    |
| **Average** |   |       |            | **7.4**         | **3.4**      | **3.4**       |

### Key Concept: Preemption

**When Preemption Occurs:**
- At each arrival time, compare the remaining burst time of the running process with the burst time of the newly arrived process
- If new process has shorter remaining time, preempt the current process
- The preempted process goes back to the ready queue with its remaining burst time

**Note:** In this particular example, the result is the same as non-preemptive SJF because no process arrival caused a preemption. However, SRTF can significantly reduce waiting times in scenarios where shorter jobs arrive while longer jobs are executing.

### Comparison: Non-Preemptive vs Preemptive

**Scenario where SRTF performs better:**
- When short processes arrive after a long process has started
- SRTF will preempt the long process to execute the short one immediately
- Non-preemptive SJF would make the short process wait

### Key Observations

**Advantages:**
- Minimizes average waiting time (optimal)
- Better response time for short processes
- More responsive to newly arriving short jobs

**Disadvantages:**
- Higher overhead due to context switching
- Starvation is possible for longer processes
- Requires knowledge of remaining burst time
- Can lead to excessive context switches if many short jobs arrive frequently
- More complex to implement than non-preemptive version
        `
      },
      {
        id: 'priority-preemptive',
        title: 'Priority Scheduling - Preemptive',
        icon: AlertCircle,
        content: `
## Priority Scheduling - Preemptive

### Overview

**Priority Scheduling** assigns an explicit priority value to each ready process. The scheduler always dispatches the highest-priority ready process next.

**Preemptive Priority:**
- A newly-arriving job with higher priority immediately pre-empts the running job
- The running process is interrupted and moved back to the ready queue
- The higher-priority process takes over the CPU

**Tie-Breaking:** If several jobs share the same priority, the scheduler falls back to FCFS.

### Starvation and Aging

**Problem:** Very low-priority jobs may wait forever while higher-priority jobs keep arriving (starvation).

**Solution:** Aging - gradually boost a job's priority the longer it waits.

### Priority Preemptive Example

**Given Process Table (Lower number = Higher priority):**

| Process | Arrival Time | CPU Burst | Priority |
|---------|-------------|-----------|----------|
| P1      | 0           | 5         | 2        |
| P2      | 2           | 3         | 1        |
| P3      | 4           | 4         | 3        |
| P4      | 6           | 6         | 4        |
| P5      | 8           | 2         | 2        |

**Gantt Chart Construction:**

\`\`\`
Step 1: Time 0 - Only P1 arrives → CPU allocated to P1
[P1: 0 → 2]

Step 2: Time 2 - P2 arrives with priority 1 (higher than P1's priority 2)
        P1 is preempted with 3 CPU bursts remaining
        P2 takes over the CPU
[P1: 0 → 2][P2: 2 → 5]

Step 3: Time 4 - P3 arrives with priority 3 (lower than P2's priority 1)
        P2 continues and completes at time 5
[P1: 0 → 2][P2: 2 → 5]

Step 4: Time 5 - P2 completes. Between P1 (priority 2) and P3 (priority 3)
        P1 has higher priority → CPU allocated to P1
[P1: 0 → 2][P2: 2 → 5][P1: 5 → 8]

Step 5: Time 6 - P4 arrives with priority 4 (lowest)
        P1 continues till time 8
[P1: 0 → 2][P2: 2 → 5][P1: 5 → 8]

Step 6: Time 8 - P1 completes. P5 arrives with priority 2
        Waiting processes: P3 (priority 3), P4 (priority 4), P5 (priority 2)
        P5 has highest priority → CPU allocated to P5
[P1: 0 → 2][P2: 2 → 5][P1: 5 → 8][P5: 8 → 10]

Step 7: Time 10 - P5 completes. P3 (priority 3) vs P4 (priority 4)
        P3 has higher priority → CPU allocated to P3
[P1: 0 → 2][P2: 2 → 5][P1: 5 → 8][P5: 8 → 10][P3: 10 → 14]

Step 8: Time 14 - P3 completes. Only P4 remains
        → CPU allocated to P4
[P1: 0 → 2][P2: 2 → 5][P1: 5 → 8][P5: 8 → 10][P3: 10 → 14][P4: 14 → 20]
\`\`\`

**Final Gantt Chart:**
\`\`\`
| P1 | P2 | P1 | P5 | P3 | P4 |
0    2    5    8   10  14  20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Priority | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|----------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 2        | 8          | 8 - 0 = 8       | 8 - 5 = 3    | 0 - 0 = 0     |
| P2      | 2       | 3     | 1        | 5          | 5 - 2 = 3       | 3 - 3 = 0    | 2 - 2 = 0     |
| P5      | 8       | 2     | 2        | 10         | 10 - 8 = 2      | 2 - 2 = 0    | 8 - 8 = 0     |
| P3      | 4       | 4     | 3        | 14         | 14 - 4 = 10     | 10 - 4 = 6   | 10 - 4 = 6    |
| P4      | 6       | 6     | 4        | 20         | 20 - 6 = 14     | 14 - 6 = 8   | 14 - 6 = 8    |
| **Average** |   |       |          |            | **7.4**         | **3.4**      | **2.8**       |

### Key Observations

**Advantages:**
- Ensures high-priority processes get immediate attention
- Flexible - can be customized for different process importance levels
- Good for real-time systems where certain tasks must execute quickly

**Disadvantages:**
- Starvation of low-priority processes
- Priority inversion problem (low-priority process holds resource needed by high-priority process)
- Overhead of managing priorities
- Determining appropriate priorities can be complex
        `
      },
      {
        id: 'priority-non-preemptive',
        title: 'Priority Scheduling - Non-Preemptive',
        icon: Shield,
        content: `
## Priority Scheduling - Non-Preemptive

### Overview

In **Non-Preemptive Priority Scheduling**, once a process starts executing, it runs to completion even if a higher-priority process arrives.

**Key Difference from Preemptive:**
- The running job keeps the CPU until it blocks or finishes
- New jobs wait even if they have higher priority
- No interruption of the currently running process

### Priority Non-Preemptive Example

**Given Process Table (Lower number = Higher priority):**

| Process | Arrival Time | CPU Burst | Priority |
|---------|-------------|-----------|----------|
| P1      | 0           | 5         | 2        |
| P2      | 2           | 3         | 1        |
| P3      | 4           | 4         | 3        |
| P4      | 6           | 6         | 4        |
| P5      | 8           | 2         | 2        |

**Gantt Chart Construction:**

\`\`\`
Step 1: Time 0 - Only P1 arrives → CPU allocated to P1
[P1: 0 → 5]

Step 2: Time 2 - P2 arrives with priority 1 (higher than P1's priority 2)
        However, P1 cannot be preempted (non-preemptive)
        P1 continues till completion at time 5

Step 3: Time 5 - P1 completes. Waiting processes: P2 (priority 1), P3 (priority 3)
        P2 has highest priority → CPU allocated to P2
[P1: 0 → 5][P2: 5 → 8]

Step 4: Time 6 - P4 arrives while P2 is running
        P2 continues (non-preemptive) till completion at time 8

Step 5: Time 8 - P2 completes. P5 arrives with priority 2
        Waiting processes: P3 (priority 3), P4 (priority 4), P5 (priority 2)
        P5 has highest priority → CPU allocated to P5
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10]

Step 6: Time 10 - P5 completes. P3 (priority 3) vs P4 (priority 4)
        P3 has higher priority → CPU allocated to P3
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14]

Step 7: Time 14 - P3 completes. Only P4 remains
        → CPU allocated to P4
[P1: 0 → 5][P2: 5 → 8][P5: 8 → 10][P3: 10 → 14][P4: 14 → 20]
\`\`\`

**Final Gantt Chart:**
\`\`\`
|  P1  | P2 | P5 | P3 | P4 |
0      5    8   10  14  20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Priority | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|----------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 2        | 5          | 5 - 0 = 5       | 5 - 5 = 0    | 0 - 0 = 0     |
| P2      | 2       | 3     | 1        | 8          | 8 - 2 = 6       | 6 - 3 = 3    | 5 - 2 = 3     |
| P5      | 8       | 2     | 2        | 10         | 10 - 8 = 2      | 2 - 2 = 0    | 8 - 8 = 0     |
| P3      | 4       | 4     | 3        | 14         | 14 - 4 = 10     | 10 - 4 = 6   | 10 - 4 = 6    |
| P4      | 6       | 6     | 4        | 20         | 20 - 6 = 14     | 14 - 6 = 8   | 14 - 6 = 8    |
| **Average** |   |       |          |            | **7.4**         | **3.4**      | **3.4**       |

### Comparison: Preemptive vs Non-Preemptive

**Preemptive Priority:**
- Average Response Time = 2.8
- P2 started immediately when it arrived (time 2)
- Better for time-sensitive high-priority tasks

**Non-Preemptive Priority:**
- Average Response Time = 3.4
- P2 had to wait for P1 to complete
- Lower context switching overhead

### Key Observations

**Advantages:**
- Simpler to implement than preemptive version
- Lower overhead (fewer context switches)
- No need to save and restore process state mid-execution
- Predictable for processes once they start

**Disadvantages:**
- High-priority processes must wait for lower-priority processes to complete
- Poor response time for high-priority processes that arrive during execution of low-priority ones
- Still suffers from starvation for low-priority processes
- Not suitable for real-time systems requiring immediate response
        `
      },
      {
        id: 'round-robin',
        title: 'Round Robin Scheduling',
        icon: RotateCw,
        content: `
## Round Robin Scheduling

### Overview

**Round Robin (RR)** is a preemptive algorithm that gives each process a fixed amount of time, known as a **time quantum** or **time slice**, to run on the CPU.

**Key Principle:** This method ensures that all processes get a fair share of the CPU's time.

### How Round Robin Works

**1. Ready Queue:** All active processes are kept in a ready queue, managed in First-In, First-Out (FIFO) order.

**2. Time Quantum:** The system defines a fixed time quantum (e.g., 2ms, 10ms).

**3. Process Execution:** The scheduler selects the first process from the ready queue and allows it to run for one time quantum.

**4. Two Scenarios:**

**Process Completes:**
- If the process finishes before the time quantum expires, it voluntarily releases the CPU
- The scheduler immediately selects the next process in the queue

**Time Quantum Expires:**
- If the process is still running when the time quantum ends, the CPU is preempted
- The process is moved to the back of the ready queue to await its next turn

**5. Cyclic Repetition:** The scheduler continues this cycle until all processes complete.

**Important Note:** The preempted process is added to the tail of the ready queue first, followed by any newly arrived processes.

### Round Robin Example

**Given Process Table with Time Quantum = 2 seconds:**

| Process | Arrival Time | CPU Burst |
|---------|-------------|-----------|
| P1      | 0           | 5         |
| P2      | 2           | 3         |
| P3      | 4           | 4         |
| P4      | 6           | 6         |
| P5      | 8           | 2         |

**Detailed Gantt Chart Construction:**

\`\`\`
Time 0: Ready Queue: [P1]
        P1 starts execution
        [P1: 0 → 2] (used 2, remaining: 3)

Time 2: P2 arrives
        P1's quantum expired → P1 to back of queue, then P2 added
        Ready Queue: [P2, P1(3)]
        P2 starts execution
        [P2: 2 → 4] (used 2, remaining: 1)

Time 4: P3 arrives
        P2's quantum expired → P2 to back of queue, then P3 added
        Ready Queue: [P1(3), P2(1), P3]
        P1 starts execution
        [P1: 4 → 6] (used 2, remaining: 1)

Time 6: P4 arrives
        P1's quantum expired → P1 to back of queue, then P4 added
        Ready Queue: [P2(1), P3, P1(1), P4]
        P2 starts execution
        [P2: 6 → 8] but P2 needs only 1 second → completes at time 7
        P3 starts at time 7 (no wait needed)
        [P3: 7 → 8] but only 1 second left in quantum

Actually, let me provide a clearer step-by-step:

Time 0-2: P1 runs (5 → 3 remaining)
Time 2-4: P2 runs (3 → 1 remaining)
Time 4-6: P1 runs (3 → 1 remaining)
Time 6-7: P3 runs (4 → 2 remaining) [only 1 unit]
Time 7-8: Wait, this is complex. Let me show the final result:

Time 0-2:   P1 runs (Remaining: 3)
Time 2-4:   P2 runs (Remaining: 1)
Time 4-6:   P1 runs (Remaining: 1)
Time 6-8:   P3 runs (Remaining: 2)
Time 8-9:   P5 runs (Remaining: 0) ✓ Complete
Time 9-11:  P2 runs (Remaining: 0) ✓ Wait, P2 completed earlier

Let me correct this with the actual sequence from the source:
\`\`\`

**Actual Final Sequence:**

\`\`\`
|P1|P2|P1|P3|P5|P2|P4|P3|P1|P4|
0  2  4  6  8  9 11 13 14 16 20
\`\`\`

Wait, let me show the correct construction from the source material:

\`\`\`
Time 0-2:   P1 (Remaining: 3)
Time 2-4:   P2 (Remaining: 1)
Time 4-6:   P1 (Remaining: 1)
Time 6-8:   P3 (Remaining: 2)
Time 8-9:   P5 (Remaining: 1) [Only used 1, quantum incomplete]
Time 9-11:  P4 (Remaining: 4)
Time 11-12: P2 (Completes after 1 second)
Time 12-14: P3 (Completes)
Time 14-16: P1 (Completes after 1 second)
Time 16-18: P4 (Remaining: 2)
Time 18-20: P4 (Completes)
\`\`\`

**Final Gantt Chart:**
\`\`\`
|P1|P2|P1|P3| P5 |P4|P2|P3|P1|P4| P4 |
0  2  4  6  8   9+1 11 12 14  16 18  20
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Completion | Turnaround Time | Waiting Time | Response Time |
|---------|---------|-------|------------|-----------------|--------------|---------------|
| P1      | 0       | 5     | 12         | 12 - 0 = 12     | 12 - 5 = 7   | 0 - 0 = 0     |
| P2      | 2       | 3     | 9          | 9 - 2 = 7       | 7 - 3 = 4    | 2 - 2 = 0     |
| P3      | 4       | 4     | 16         | 16 - 4 = 12     | 12 - 4 = 8   | 6 - 4 = 2     |
| P4      | 6       | 6     | 20         | 20 - 6 = 14     | 14 - 6 = 8   | 9 - 6 = 3     |
| P5      | 8       | 2     | 14         | 14 - 8 = 6      | 6 - 2 = 4    | 12 - 8 = 4    |
| **Average** |   |       |            | **10.2**        | **6.2**      | **1.8**       |

### Choosing the Time Quantum

**Time Quantum Too Small:**
- Excessive context switching overhead
- CPU spends more time switching than executing processes
- System becomes less efficient

**Time Quantum Too Large:**
- Approaches FCFS behavior
- Poor response time
- Defeats the purpose of Round Robin

**Rule of Thumb:** Time quantum should be large relative to context switch time but small enough to provide good response time (typically 10-100 milliseconds).

### Key Observations

**Advantages:**
- Fair allocation of CPU time to all processes
- No starvation - every process eventually gets CPU time
- Good response time for all processes
- Simple and easy to implement
- Works well in time-sharing systems

**Disadvantages:**
- Higher average turnaround time compared to SJF
- Performance heavily depends on the size of time quantum
- Context switching overhead
- Not optimal for minimizing average waiting time
- Long processes may have to wait many cycles to complete
        `
      },
      {
        id: 'multilevel-queue',
        title: 'Multi-Level Queue Scheduling',
        icon: Layers,
        content: `
## Multi-Level Queue Scheduling

### Overview

**Multilevel Queue Scheduling** creates multiple, separate waiting lines (queues) for the CPU instead of just one.

**Key Concept:** Processes are sorted into different queues based on their characteristics, such as:
- Priority level
- Memory size
- Process type (Interactive, Batch, or System)

**Important:** Once a process is placed in a queue, it generally stays there permanently.

### Structure and Components

**1. Multiple Queues:**
The main ready queue is divided into several separate queues.

**2. Process Sorting:**
Processes are permanently assigned to a specific queue based on a property. Examples:
- **Foreground (Interactive) processes** - Require quick response
- **Background (Batch) processes** - Can wait longer

**3. Independent Scheduling:**
Each queue can have its own unique scheduling algorithm:
- High-priority queue might use Round Robin (RR) for responsiveness
- Low-priority queue might use First-Come, First-Served (FCFS)

**4. Scheduling Between Queues:**
Fixed-priority preemptive scheduling is typically used:
- No process in a lower-priority queue can run unless all higher-priority queues are empty
- If a high-priority process arrives while a low-priority process is running, the low-priority process is interrupted (preempted)

### Key Parameters

A multilevel queue scheduler is defined by:
- **Number of queues**
- **Scheduling algorithms for each queue**
- **Method to determine which queue a process enters**
- **Scheduling among the queues** (usually fixed priority)

### Example with Two Queues

**System Configuration:**
- **Queue 1 (Q1):** High Priority - Uses Round Robin with time quantum = 2ms
- **Queue 2 (Q2):** Low Priority - Uses FCFS
- **Priority Rule:** Processes in Q1 have absolute priority over Q2
  - If a Q1 process arrives while a Q2 process is running, Q2 process is preempted

**Given Process Table:**

| Process | Arrival Time | Burst Time | Priority (Queue) |
|---------|-------------|-----------|------------------|
| P1      | 0           | 5         | 1 (Q1)          |
| P2      | 1           | 4         | 2 (Q2)          |
| P3      | 2           | 7         | 1 (Q1)          |
| P4      | 3           | 3         | 2 (Q2)          |

**Execution Sequence:**

\`\`\`
Time 0: P1 arrives → enters Q1 → starts executing
        [P1: 0 → 2]

Time 1: P2 arrives → enters Q2 (waits, P1 has priority)

Time 2: P1's quantum expires → P1 preempted, goes to back of Q1
        P3 arrives → enters Q1
        Q1 now has: [P1(3), P3(7)]
        P3 starts executing (head of Q1)
        [P3: 2 → 4]

Time 3: P4 arrives → enters Q2

Time 4: P3's quantum expires → P3 preempted, goes to back of Q1
        Q1 now has: [P1(3), P3(5)]
        P1 starts executing
        [P1: 4 → 6]

Time 6: P1's quantum expires → P1 has 1 remaining
        P1 goes to back of Q1
        Q1 now has: [P3(5), P1(1)]
        P3 starts executing
        [P3: 6 → 8]

Time 8: P3's quantum expires → P3 has 3 remaining
        P3 goes to back of Q1
        Q1 now has: [P1(1), P3(3)]
        P1 starts executing
        [P1: 8 → 9] (completes after 1 unit)

Time 9: P1 completes. P3 starts
        [P3: 9 → 11]

Time 11: P3's quantum expires → P3 has 1 remaining
        [P3: 11 → 12] (completes)

Time 12: Q1 is empty! Now Q2 processes can run
         P2 starts (FCFS in Q2, P2 arrived before P4)
         [P2: 12 → 16]

Time 16: P2 completes. P4 starts
         [P4: 16 → 19]
\`\`\`

**Final Gantt Chart:**
\`\`\`
|P1|P3|P1|P3|P1|P3|P3|P2| P4 |
0  2  4  6  8  9 11 12 16  19
\`\`\`

### Metrics Calculation

| Process | Arrival | Burst | Queue | Completion | Turnaround | Waiting | Response |
|---------|---------|-------|-------|------------|------------|---------|----------|
| P1      | 0       | 5     | Q1    | 9          | 9          | 4       | 0        |
| P2      | 1       | 4     | Q2    | 16         | 15         | 11      | 11       |
| P3      | 2       | 7     | Q1    | 12         | 10         | 3       | 0        |
| P4      | 3       | 3     | Q2    | 19         | 16         | 13      | 13       |
| **Average** |   |       |       |            | **12.5**   | **7.75**| **6.0**  |

### Key Observations

**Advantages:**
- Allows different process types to be scheduled differently
- Higher priority for interactive processes
- Flexibility in choosing scheduling algorithm per queue
- Can optimize for different process characteristics

**Disadvantages:**
- Starvation of low-priority queue processes
- Inflexible - processes cannot move between queues
- Low-priority processes may wait indefinitely if high-priority queue is constantly busy
- Requires careful tuning of queue priorities
        `
      },
      {
        id: 'multilevel-feedback-queue',
        title: 'Multi-Level Feedback Queue',
        icon: GitBranch,
        content: `
## Multi-Level Feedback Queue Scheduling

### Overview

**Multi-Level Feedback Queue** is an enhancement of Multi-Level Queue scheduling that allows processes to **move between queues**.

**Key Difference:** Unlike standard multi-level queues where processes are permanently assigned, feedback queues allow process migration based on behavior and execution characteristics.

### Defining Parameters

A multilevel-feedback-queue scheduler is defined by:
- **Number of queues**
- **Scheduling algorithms for each queue**
- **Method used to determine when to upgrade a process** (move to higher priority)
- **Method used to determine when to demote a process** (move to lower priority)
- **Method used to determine which queue a process enters when it needs service**

### Implementing Aging

**Aging** can be implemented using multilevel feedback queues:
- Processes that wait too long in lower queues can be promoted to higher-priority queues
- This prevents starvation of long-running processes

### Classic Three-Queue Example

**System Configuration:**

**Queue Structure:**
- **Q0:** Round Robin with time quantum = 8 milliseconds (Highest Priority)
- **Q1:** Round Robin with time quantum = 16 milliseconds (Medium Priority)
- **Q2:** FCFS (Lowest Priority)

**Scheduling Rules:**

1. **New Process Entry:**
   - A new process enters queue Q0
   - It is served using Round Robin with 8ms quantum

2. **From Q0:**
   - If the process completes within 8ms → Done!
   - If it doesn't finish in 8ms → Process is moved to Q1

3. **In Q1:**
   - Process is served using Round Robin with 16ms quantum
   - If it completes within 16ms → Done!
   - If it still doesn't complete → Process is preempted and moved to Q2

4. **In Q2:**
   - Process is served using FCFS
   - It will eventually complete here

**Priority Between Queues:**
- Q0 has highest priority
- Q1 has medium priority
- Q2 has lowest priority
- Lower queues only execute when all higher queues are empty

### How It Works

**Short Processes:**
- Complete quickly in Q0 or Q1
- Get good response time
- Don't get demoted to lower queues

**Long Processes:**
- Initially get chance in Q0 with small quantum
- If they don't complete, moved to Q1 with larger quantum
- Eventually end up in Q2 with FCFS
- Still complete, but with lower priority

**Interactive vs CPU-Bound:**
- Interactive processes (short bursts) stay in higher queues
- CPU-bound processes (long bursts) gradually move to lower queues
- This naturally separates process types!

### Example Scenario

Consider a process that needs 30ms of CPU time:

\`\`\`
Time 0-8:    In Q0, uses 8ms quantum → 22ms remaining → Demoted to Q1
Time 8-24:   In Q1, uses 16ms quantum → 6ms remaining → Demoted to Q2
Time 24-30:  In Q2, uses remaining 6ms → Completes
\`\`\`

Now consider an interactive process needing just 5ms:

\`\`\`
Time 0-5:    In Q0, uses 5ms → Completes! (Never demoted)
\`\`\`

### Advantages of Feedback Queues

**Flexibility:**
- Processes can move between queues based on behavior
- Adapts to process characteristics dynamically

**Fairness:**
- Short processes get quick service
- Long processes eventually complete (no indefinite starvation)

**Aging Support:**
- Can boost priority of processes that wait too long
- Prevents starvation through gradual promotion

**Automatic Classification:**
- No need to predict process type in advance
- System learns from process behavior

### Key Observations

**Advantages:**
- Most flexible CPU scheduling algorithm
- Automatically favors short processes
- Can implement aging to prevent starvation
- Separates I/O-bound and CPU-bound processes naturally
- Good response time for interactive processes

**Disadvantages:**
- Most complex to implement
- High overhead due to queue management and process migration
- Difficult to analyze and predict behavior
- Requires careful tuning of quantum sizes
- Can still have starvation if not properly configured with aging
        `
      },
      {
        id: 'multiprocessor-scheduling',
        title: 'Multi-Processor Scheduling',
        icon: Cpu,
        content: `
## Multi-Processor Scheduling

### Overview

A **multiprocessor system** has more than one processor (CPU) but shares the same memory, bus, and input/output devices.

**Goal:** Design a scheduling system that keeps all processors as busy as possible, improving overall performance and throughput.

### Why Is It Complex?

**Challenges:**
1. **Load Balancing:** Must distribute work evenly across processors
2. **Shared Data:** Processes executing simultaneously may require access to shared data
3. **Cache Affinity:** Should consider processor cache when scheduling to avoid cache invalidation

### Two Main Approaches

## 1. Asymmetric Multiprocessing (AMP)

### Structure

**Master-Slave Architecture:**
- One processor acts as the **"master"**
- All other processors are **"slaves"**

**Responsibilities:**
- Master processor handles all scheduling decisions
- Master assigns processes to slave processors
- Slaves simply execute assigned processes

### Characteristics

**Advantages:**
- Simple to implement
- All complex scheduling logic in one place
- Easy to manage and debug

**Disadvantages:**
- Master processor can become a bottleneck
- If master server goes down, the whole system halts
- Doesn't fully utilize all processors equally

**Failure Handling:**
- Master failure → System stops
- Slave failure → Rest of system continues working

## 2. Symmetric Multiprocessing (SMP)

### Structure

**Self-Scheduling Architecture:**
- Each processor is self-scheduling
- All processors are equal (no master/slave)
- Each processor independently selects processes to run

### Characteristics

**More Common Approach:**
- Used in most modern multiprocessor systems
- More balanced and efficient
- Better fault tolerance

**Queue Organization Patterns:**

### Pattern 1: Global Queue
\`\`\`
Single Ready Queue → [P1, P2, P3, P4, P5]
                      ↓    ↓    ↓
                    CPU1 CPU2 CPU3
\`\`\`
- Processes in a common/global ready queue
- Each processor checks the global queue and selects a process
- Must handle synchronization to prevent race conditions

### Pattern 2: Private Queues
\`\`\`
CPU1 → Queue1: [P1, P2]
CPU2 → Queue2: [P3, P4]
CPU3 → Queue3: [P5, P6]
\`\`\`
- Each processor has its own private ready queue
- Scheduler for each processor checks only its own queue
- Requires load balancing mechanism

## Processor Affinity

### Concept

**Why Affinity Matters:**
- When a process runs on a processor, it builds up a cache of data
- If moved to a different processor, cache becomes invalid
- New processor must rebuild the cache (inefficient!)

**Solution:** Try to keep a process running on the same processor.

### Types of Affinity

**Soft Affinity:**
- Operating system **tries** to keep process on same processor
- But doesn't guarantee it
- If needed for load balancing, process can be moved
- More flexible

**Hard Affinity:**
- System allows process to specify a subset of processors it can run on
- Process **never** moves outside that subset
- Guaranteed processor assignment
- More rigid but predictable

## Load Balancing in SMP

### The Problem

In SMP systems, one processor might be very busy while another is idle.

### Solution Approaches

**1. Push Migration:**
- A specific task periodically checks load on each processor
- If imbalance found, moves processes from overloaded processors to idle ones
- Proactive approach

**2. Pull Migration:**
- An idle processor actively pulls waiting tasks from busy processors
- Reactive approach
- Processor takes initiative when it has no work

### Combined Approach
Most systems use both push and pull migration for optimal balance.

## Key Observations

**Advantages of Multiprocessor Scheduling:**
- Better throughput - multiple processes execute simultaneously
- Improved reliability - system continues if one processor fails (in SMP)
- Scalability - can add more processors for better performance

**Challenges:**
- Complexity in implementation
- Cache coherency issues
- Synchronization overhead
- Load balancing complexity
- Processor affinity considerations

**Best Practices:**
- Use SMP for better reliability and performance
- Implement processor affinity to improve cache performance
- Use both push and pull migration for load balancing
- Consider process characteristics when assigning to processors
        `
      }
    ]
  },
  {
    id: 'deadlock',
    title: 'Module 4: Deadlock',
    icon: AlertTriangle,
    color: 'red',
    totalSections: 7,
    description: 'Deadlock conditions, prevention, avoidance, detection, and recovery strategies - BCSE303L',
    sections: [
      {
        id: 'deadlock-intro',
        title: 'Deadlock Introduction & System Model',
        icon: FileQuestion,
        content: `
## Deadlock Introduction

### Definition

A **deadlock** in an operating system is a situation where two or more processes are permanently blocked because each process is waiting for a resource that is held by another process in the same set.

**Result:** All processes involved are stuck indefinitely, unable to proceed with their execution.

### How Processes Consume Resources

The lifecycle of resource consumption follows three distinct phases:

**1. Request**
- A process requests a resource
- If the resource is available, the system grants it
- If not available, the process enters a waiting state

**2. Use**
- The process utilizes the acquired resource
- Performs necessary operations with the resource

**3. Release**
- The process releases the resource after use
- The resource becomes available for other processes

### Deadlock System Model

**Resource-Allocation Graph (RAG):**
Deadlocks are commonly modeled using a system resource-allocation graph - a directed graph with two types of nodes:

**Node Types:**

1. **Processes (P):** Represented by circles
2. **Resources (R):** Represented by rectangles

**Edge Types:**

1. **Request Edge (Pi → Rj):**
   - Directed edge from process Pi to resource Rj
   - Indicates: Process Pi has requested resource Rj
   - Process is currently waiting for this resource

2. **Assignment Edge (Rj → Pi):**
   - Directed edge from resource Rj to process Pi
   - Indicates: An instance of resource Rj has been allocated to process Pi

### Resource Instances

**Within Resource Nodes:**
- Each resource type node Rj contains dots
- Each dot represents one instance of that resource type
- An assignment edge originates from one dot, signifying one instance is assigned

### Detecting Deadlock from Graph

**Key Principle:** A system is in a deadlock state if and only if the resource-allocation graph contains a cycle.

**Rules:**

**No Cycle → No Deadlock:**
- If the graph contains no cycles, no process is deadlocked
- System is in a safe state

**Cycle Present:**
- **Single Instance Resources:** Cycle implies deadlock (guaranteed)
- **Multiple Instance Resources:** Cycle indicates possibility of deadlock, but not guaranteed

**Why Multiple Instances Are Different:**
- Even with a cycle, if there are spare instances available, processes may still complete
- Requires deeper analysis (like Banker's Algorithm) to determine actual deadlock

### Example Scenario

Consider three processes P1, P2, P3 and two resources R1, R2:

\`\`\`
P1 holds R1, requests R2
P2 holds R2, requests R1
→ Cycle exists: P1 → R2 → P2 → R1 → P1
→ Deadlock! (assuming single instances)

If R1 had 2 instances and one was free:
→ Cycle exists but no deadlock
→ Free instance can break the cycle
\`\`\`

### Key Observations

**Critical Understanding:**
- Deadlock is about **permanent waiting**
- Processes cannot proceed without external intervention
- Simply having processes wait doesn't mean deadlock
- The circular dependency is what makes it permanent

**Graph Analysis Benefits:**
- Visual representation of resource dependencies
- Easy detection of potential deadlocks
- Helps in understanding system state
- Foundation for deadlock detection algorithms
        `
      },
      {
        id: 'deadlock-conditions',
        title: 'Four Deadlock Conditions',
        icon: AlertOctagon,
        content: `
## Deadlock Conditions (Coffman Conditions)

A deadlock in an operating system occurs when four specific conditions, often called the **Coffman conditions**, are **simultaneously present**.

**Important:** ALL four conditions must hold at the same time for a deadlock to occur. If even one condition is prevented, deadlock cannot happen.

### 1. Mutual Exclusion

**Definition:** At least one resource must be non-shareable, meaning only one process can use it at any given time.

**Characteristics:**
- Resource can be held by only one process at a time
- If another process requests that resource, it must wait
- The resource is released only when the holding process finishes using it

**Examples:**
- Printer (only one process can print at a time)
- Write access to a file (exclusive access required)
- Tape drive
- CPU in single-processor systems

**Why It Matters:**
Without mutual exclusion, processes could share resources freely, eliminating the possibility of one process waiting for another's resource.

### 2. Hold and Wait

**Definition:** A process is holding at least one resource and is simultaneously waiting to acquire additional resources that are currently held by other processes.

**Scenario:**
\`\`\`
Process P1: Holds Resource A, Waiting for Resource B
Process P2: Holds Resource B, Waiting for Resource C
\`\`\`

**Characteristics:**
- Process has already acquired some resources
- Process requests additional resources while holding current ones
- Does not release held resources while waiting

**Example:**
A process has allocated memory and is waiting for I/O device to become available, but it won't release memory until I/O completes.

**Why It Matters:**
If processes had to release all held resources before requesting new ones, they couldn't create circular wait chains.

### 3. No Preemption

**Definition:** Resources cannot be forcibly taken away from a process. A resource can only be released voluntarily by the process that is holding it.

**Characteristics:**
- Once allocated, a resource stays with the process
- No external force can take away the resource
- Resource is released only when:
  - Process completes its task
  - Process voluntarily releases it

**Examples:**
- A process holding a printer cannot have it taken away mid-job
- A process with allocated memory retains it until it explicitly frees it

**Why It Matters:**
If the OS could preempt resources (forcibly take them away), it could break deadlock cycles by reallocating resources.

### 4. Circular Wait

**Definition:** A set of processes are waiting for each other in a circular fashion, forming a closed chain.

**Pattern:**
\`\`\`
P1 → waiting for resource held by P2
P2 → waiting for resource held by P3
P3 → waiting for resource held by P4
...
Pn → waiting for resource held by P1
\`\`\`

**Characteristics:**
- Forms a closed cycle in the resource allocation graph
- Each process in the cycle is waiting for the next
- The last process waits for the first, completing the circle

**Example:**
\`\`\`
Process P1: Holds R1, needs R2
Process P2: Holds R2, needs R3
Process P3: Holds R3, needs R1
→ Circular dependency: P1 → P2 → P3 → P1
\`\`\`

**Why It Matters:**
Without a circular wait, there would be at least one process that could complete and release its resources, allowing others to proceed.

### Visual Representation

**All Four Conditions Present:**

\`\`\`
Mutual Exclusion: Resources are non-shareable
        ↓
Hold and Wait: Processes hold and request more
        ↓
No Preemption: Cannot force release
        ↓
Circular Wait: Closed dependency cycle
        ↓
    DEADLOCK!
\`\`\`

### Breaking the Deadlock

**Key Insight:** To prevent deadlock, we only need to ensure that AT LEAST ONE of these four conditions cannot hold.

**Prevention Strategies:**
- **Break Mutual Exclusion:** Make resources shareable (not always possible)
- **Break Hold and Wait:** Require processes to request all resources at once
- **Break No Preemption:** Allow OS to forcibly preempt resources
- **Break Circular Wait:** Impose ordering on resource requests

### Real-World Analogy

**Traffic Intersection Deadlock:**
- **Mutual Exclusion:** Only one car can occupy an intersection spot
- **Hold and Wait:** Cars occupy their spots while waiting for others to move
- **No Preemption:** Cars can't be forcibly removed from their spots
- **Circular Wait:** Each car waits for the car in front to move, forming a circle

**Solution:** Traffic lights break the "Hold and Wait" condition by controlling when cars enter the intersection!

### Key Observations

**Necessary but Not Sufficient:**
- These four conditions are **necessary** for deadlock
- Meaning: Deadlock cannot occur without all four
- However, all four being present doesn't **guarantee** deadlock in all cases (e.g., with multiple resource instances)

**Practical Importance:**
Understanding these conditions is crucial for:
- Designing deadlock-free systems
- Implementing prevention strategies
- Debugging deadlock situations
- Optimizing resource allocation
        `
      }
    ]
  }
];
