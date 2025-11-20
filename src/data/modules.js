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
