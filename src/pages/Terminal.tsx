import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Globe, Github, Linkedin, Twitter, Rocket, Hand, Shield, FileText } from "lucide-react";
import { projects, technologies, personalInfo, education, contact, socials } from "@/lib/data";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}

const ASCII_ART = `
██████╗ ██╗████████╗███████╗███████╗██╗  ██╗
██╔══██╗██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
██████╔╝██║   ██║   █████╗  ███████╗███████║
██╔══██╗██║   ██║   ██╔══╝  ╚════██║██╔══██║
██║  ██║██║   ██║   ███████╗███████║██║  ██║
╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝
`;

const HELP_TEXT = `
╭─────────────────────────────────────────────────────────────────╮
│                    AVAILABLE COMMANDS                           │
├─────────────────────────────────────────────────────────────────┤
│  help              Show this help message                       │
│  whoami            Display information about me                 │
│  skills            List my technical skills                     │
│  projects          Show my projects (with links)                │
│  education         Display education history                    │
│  contact           Get my contact information                   │
│  socials           Show social media links                      │
│  neofetch          Display system information                   │
│  ls                List available sections                      │
│  ls -la            List all files with details                  │
│  cat <file>        View file contents (readme, about, resume)   │
│  pwd               Print current directory                      │
│  cd <dir>          Change directory (simulated)                 │
│  date              Show current date and time                   │
│  uptime            Show system uptime                           │
│  echo <text>       Echo text back                               │
│  history           Show command history                         │
│  cowsay <text>     Make a cow say something                     │
│  fortune           Display a random fortune                     │
│  matrix            Start/stop matrix rain effect                │
│  matrix stop       Stop matrix rain effect                      │
│  binary            Start/stop binary rain (0s and 1s)            │
│  binary stop       Stop binary rain effect                      │
│  hex               Start/stop hexadecimal code rain             │
│  hex stop          Stop hex code rain effect                     │
│  effects           Show all available visual effects             │
│  clear / cls       Clear the terminal                           │
│  exit / quit       Exit terminal mode                           │
╰─────────────────────────────────────────────────────────────────╯
`;


// Memoized History Entry Component for better performance
const HistoryEntry = memo(({ entry }: { entry: CommandOutput }) => {
  return (
    <div className="mb-1.5 sm:mb-2 break-words">
      {entry.command && (
        <div className="flex items-start sm:items-center gap-1 sm:gap-2 flex-wrap">
          <span className="text-[#00ff41] text-[10px] sm:text-xs drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">ritesh@portfolio</span>
          <span className="text-[#00ff41] text-[10px] sm:text-xs opacity-50">:</span>
          <span className="text-[#00ff41] text-[10px] sm:text-xs">~</span>
          <span className="text-[#00ff41] text-[10px] sm:text-xs opacity-50">$</span>
          <span className="text-[#00ff41] text-[10px] sm:text-xs break-all opacity-90">{entry.command}</span>
        </div>
      )}
      {entry.output && <div className="mt-1 ml-0 break-words">{entry.output}</div>}
    </div>
  );
});
HistoryEntry.displayName = 'HistoryEntry';

// Memoized Status Bar Component
const StatusBar = memo(() => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex-shrink-0 px-2 sm:px-4 py-1.5 sm:py-1 bg-black border-t-2 border-[#00ff41] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 text-[9px] sm:text-xs text-[#00ff41] font-mono opacity-70">
      <span className="truncate">Type &apos;help&apos; for commands • &apos;exit&apos; to leave</span>
      <span className="flex-shrink-0">{time}</span>
    </div>
  );
});
StatusBar.displayName = 'StatusBar';

const FORTUNES = [
  "The best code is no code at all.",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "It's not a bug – it's an undocumented feature.",
  "In order to understand recursion, one must first understand recursion.",
  "There are only two hard things in Computer Science: cache invalidation and naming things.",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
];

// Generate neofetch dynamically using imported data
const generateNeofetch = (uptime: number) => {
  const allSkills = technologies.flatMap(t => t.skills);
  const langs = technologies.find(t => t.category === 'Languages')?.skills.join(', ') || 'TS, JS';
  
  return `
                   -\`                    ritesh@portfolio
                  .o+\`                   ─────────────────
                 \`ooo/                   OS: Portfolio Linux x86_64
                \`+oooo:                  Host: Next.js 15 (App Router)
               \`+oooooo:                 Kernel: React 19
               -+oooooo+:                Uptime: ${uptime} mins
             \`/:-:++oooo+:               Packages: ${allSkills.length} (skills)
            \`/++++/+++++++:              Shell: zsh 5.9
           \`/++++++++++++++:             Resolution: Responsive
          \`/+++ooooooooooooo/\`           DE: Tailwind CSS
         ./ooosssso++osssssso+\`          WM: Framer Motion
        .oossssso-\`\`\`\`/ossssss+\`         Theme: Dark [GTK2/3]
       -osssssso.      :ssssssso.        Icons: Lucide
      :osssssss/        osssso+++.       Terminal: xterm-256color
     /ossssssss/        +ssssooo/-       CPU: TypeScript @ 100%
   \`/ossssso+/:-        -:/+osssso+-     GPU: WebGL 2.0
  \`+sso+:-\`                 \`.-/+oso:    Memory: 8GB / ∞
 \`++:.                           \`-/+/
 .\`                                 \`/   Languages: ${langs}
                                         Frameworks: React, Next.js, Node.js
                                         DevOps: Docker, K8s, ArgoCD
`;
};

export default function Terminal() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showBinary, setShowBinary] = useState(false);
  const [showHex, setShowHex] = useState(false);
  const [currentDir, setCurrentDir] = useState("~");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [bootTime] = useState(new Date());

  // Prevent body scroll when terminal is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Auto-scroll to bottom - optimized with requestAnimationFrame
  useEffect(() => {
    if (terminalRef.current) {
      requestAnimationFrame(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      });
    }
  }, [history]);

  // Focus input on click anywhere
  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Initial boot message
  useEffect(() => {
    if (history.length === 0) {
      const bootSequence: CommandOutput[] = [
        {
          command: "",
          output: (
            <pre className="text-[#00ff41] text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs leading-tight sm:leading-normal overflow-x-auto font-mono whitespace-pre drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
              {ASCII_ART}
            </pre>
          ),
          timestamp: new Date(),
        },
        {
          command: "",
          output: (
            <div className="text-[#00ff41] opacity-80">
              <p>Welcome to Ritesh&apos;s Portfolio Terminal v1.0.0</p>
              <p>Type <span className="text-[#00ff41]">help</span> to see available commands.</p>
              <p>Type <span className="text-[#ff0040]">exit</span> to return to normal mode.</p>
              <br />
            </div>
          ),
          timestamp: new Date(),
        },
      ];
      setHistory(bootSequence);
    }
  }, [history.length]);

  const processCommand = useCallback((cmd: string): React.ReactNode => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    switch (command) {
      case "help":
      case "man":
      case "?":
        return <pre className="text-[#00ff41] text-[11px] sm:text-xs whitespace-pre-wrap font-mono opacity-90">{HELP_TEXT}</pre>;

      case "whoami":
  return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#00ff41] mb-3 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">┌─ About Me ─────────────────────────────────────────────────┐</p>
            <p className="ml-2"><span className="text-[#00ff41] opacity-70">  User:</span>       <span className="text-[#00ff41] opacity-90">{personalInfo.name}</span></p>
            <p className="ml-2"><span className="text-[#00ff41] opacity-70">  Role:</span>       <span className="text-[#00ff41] opacity-90">{personalInfo.role}</span></p>
            <p className="ml-2"><span className="text-[#00ff41] opacity-70">  Location:</span>   <span className="text-[#00ff41] opacity-90">{personalInfo.location}</span></p>
            <p className="ml-2"><span className="text-[#00ff41] opacity-70">  University:</span> <span className="text-[#00ff41] opacity-90">{personalInfo.university}</span></p>
            <p className="ml-2"><span className="text-[#00ff41] opacity-70">  Status:</span>     <span className="text-[#00ff41]">{personalInfo.status}</span></p>
            <p className="text-[#00ff41] mt-3 ml-2 max-w-xl opacity-80">  {personalInfo.bio}</p>
            <p className="text-[#00ff41] mt-3 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">└────────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "skills":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#00ff41] mb-3 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">┌─ Technical Skills ────────────────────────────────────────┐</p>
            {technologies.map((tech, i) => (
              <div key={i} className="mb-2">
                <p className="text-[#00ff41] opacity-90">  {tech.category}:</p>
                <p className="text-[#00ff41] ml-4 opacity-80">  └─ {tech.skills.join(" │ ")}</p>
              </div>
            ))}
            <p className="text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">└───────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "projects":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#00ff41] mb-3 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">┌─ Projects ─────────────────────────────────────────────────┐</p>
            {projects.map((project, i) => (
              <div key={i} className="mb-4 ml-2">
                <p className="text-[#00ff41] font-bold opacity-90">  [{project.year}] {project.title}</p>
                <p className="text-[#00ff41] ml-4 opacity-80">{project.description}</p>
                <p className="text-[#00ff41] ml-4 text-[10px] opacity-70">Tech: {project.tags.join(", ")}</p>
                {project.liveUrl && (
                  <p className="ml-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline cursor-pointer opacity-90 hover:opacity-100 drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">
                      Live: {project.liveUrl}
                    </a>
                  </p>
                )}
                <p className="ml-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline cursor-pointer opacity-90 hover:opacity-100 drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">
                    Code: {project.githubUrl}
                  </a>
                </p>
              </div>
            ))}
            <p className="text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">└────────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "education":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#39d353] mb-3">┌─ Education ────────────────────────────────────────────────┐</p>
            <div className="ml-2 mb-3">
              <p className="text-[#58a6ff] font-bold">  🎓 {education.degree}</p>
              <p className="text-[#c9d1d9] ml-4">{education.institution}, {education.location}</p>
              <p className="text-[#8b949e] ml-4">{education.duration}</p>
              <p className="text-[#39d353] ml-4 font-bold">CGPA: {education.cgpa}</p>
            </div>
            <p className="text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">└────────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "contact":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#39d353] mb-3">┌─ Contact Information ─────────────────────────────────────┐</p>
            <p className="ml-2 flex items-center gap-1"><span className="text-[#a371f7]">  <Mail className="w-3.5 h-3.5 inline" /> Email:</span>    <a href={`mailto:${contact.email}`} className="text-[#56d4dd] hover:underline">{contact.email}</a></p>
            <p className="ml-2 flex items-center gap-1"><span className="text-[#a371f7]">  <Globe className="w-3.5 h-3.5 inline" /> Website:</span>  <a href={socials.website} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.website}</a></p>
            <p className="ml-2 flex items-center gap-1"><span className="text-[#a371f7]">  <Github className="w-3.5 h-3.5 inline" /> GitHub:</span>   <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.github}</a></p>
            <p className="ml-2 flex items-center gap-1"><span className="text-[#a371f7]">  <Linkedin className="w-3.5 h-3.5 inline" /> LinkedIn:</span> <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.linkedin}</a></p>
            <p className="text-[#39d353] mt-3">└────────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "socials":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#39d353] mb-3">┌─ Social Links ─────────────────────────────────────────────┐</p>
            <p className="ml-2 flex items-center gap-1">  <Github className="w-3.5 h-3.5 text-[#c9d1d9] inline" /> GitHub:   <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.github}</a></p>
            <p className="ml-2 flex items-center gap-1">  <Linkedin className="w-3.5 h-3.5 text-[#c9d1d9] inline" /> LinkedIn: <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.linkedin}</a></p>
            <p className="ml-2 flex items-center gap-1">  <Twitter className="w-3.5 h-3.5 text-[#c9d1d9] inline" /> Twitter:  <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#56d4dd] hover:underline">{socials.twitter}</a></p>
            <p className="text-[#39d353] mt-3">└────────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "neofetch": {
        const uptimeMins = Math.floor((Date.now() - bootTime.getTime()) / 1000 / 60);
        return <pre className="text-[#00ff41] text-[9px] sm:text-[11px] whitespace-pre leading-tight font-mono opacity-90 drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">{generateNeofetch(uptimeMins)}</pre>;
      }

      case "clear":
      case "cls":
        setTimeout(() => setHistory([]), 0);
        return null;

      case "exit":
      case "quit":
      case "q":
        setTimeout(() => navigate("/"), 500);
        return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)] flex items-center gap-1">Logging out... Goodbye! <Hand className="w-4 h-4 inline" /></p>;

      case "ls":
        if (args === "-la" || args === "-al" || args === "-l") {
          return (
            <div className="text-[11px] sm:text-xs font-mono">
              <p className="text-[#8b949e]">total 42</p>
              <p><span className="text-[#58a6ff]">drwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">4096</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#58a6ff]">about/</span></p>
              <p><span className="text-[#58a6ff]">drwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">4096</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#58a6ff]">skills/</span></p>
              <p><span className="text-[#58a6ff]">drwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">4096</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#58a6ff]">projects/</span></p>
              <p><span className="text-[#58a6ff]">drwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">4096</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#58a6ff]">education/</span></p>
              <p><span className="text-[#58a6ff]">drwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">4096</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#58a6ff]">contact/</span></p>
              <p><span className="text-[#39d353]">-rw-r--r--</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">1337</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#39d353]">README.md</span></p>
              <p><span className="text-[#39d353]">-rw-r--r--</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">2048</span>  <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#39d353]">resume.pdf</span></p>
              <p><span className="text-[#d29922]">-rwxr-xr-x</span>  <span className="text-[#8b949e]">ritesh ritesh</span>  <span className="text-[#c9d1d9]">512</span>   <span className="text-[#8b949e]">Dec 19</span>  <span className="text-[#d29922]">.bashrc</span></p>
            </div>
          );
        }
        return (
          <div className="text-[11px] sm:text-xs font-mono flex flex-wrap gap-4">
            <span className="text-[#58a6ff]">about/</span>
            <span className="text-[#58a6ff]">skills/</span>
            <span className="text-[#58a6ff]">projects/</span>
            <span className="text-[#58a6ff]">education/</span>
            <span className="text-[#58a6ff]">contact/</span>
            <span className="text-[#39d353]">README.md</span>
            <span className="text-[#39d353]">resume.pdf</span>
          </div>
        );

      case "pwd":
        return <p className="text-[#c9d1d9] text-xs font-mono">/home/ritesh/portfolio{currentDir === "~" ? "" : "/" + currentDir}</p>;

      case "cd":
        const validDirs = ["~", "about", "skills", "projects", "education", "contact", "..", "-"];
        if (!args || args === "~" || args === "") {
          setCurrentDir("~");
          return null;
        }
        if (args === ".." || args === "-") {
          setCurrentDir("~");
          return null;
        }
        if (validDirs.includes(args)) {
          setCurrentDir(args);
          return null;
        }
        return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">bash: cd: {args}: No such file or directory</p>;

      case "date":
        return <p className="text-[#c9d1d9] text-xs font-mono">{new Date().toString()}</p>;

      case "uptime": {
        const uptimeSecs = Math.floor((Date.now() - bootTime.getTime()) / 1000);
        const hours = Math.floor(uptimeSecs / 3600);
        const minutes = Math.floor((uptimeSecs % 3600) / 60);
        const seconds = uptimeSecs % 60;
        return (
          <p className="text-[#c9d1d9] text-xs font-mono">
            {new Date().toLocaleTimeString()} up {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}, 1 user, load average: 0.42, 0.37, 0.31
          </p>
        );
      }

      case "echo":
        if (args === "$USER" || args === "$user") return <p className="text-[#c9d1d9] text-xs font-mono">ritesh</p>;
        if (args === "$HOME" || args === "$home") return <p className="text-[#c9d1d9] text-xs font-mono">/home/ritesh</p>;
        if (args === "$SHELL" || args === "$shell") return <p className="text-[#c9d1d9] text-xs font-mono">/bin/zsh</p>;
        if (args === "$PATH" || args === "$path") return <p className="text-[#c9d1d9] text-xs font-mono">/usr/local/bin:/usr/bin:/bin:/home/ritesh/.local/bin</p>;
        return <p className="text-[#c9d1d9] text-xs font-mono">{args || ""}</p>;

      case "history":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            {commandHistory.map((cmd, i) => (
              <p key={i} className="text-[#8b949e]">
                <span className="text-[#484f58] mr-3 inline-block w-6 text-right">{i + 1}</span>
                <span className="text-[#c9d1d9]">{cmd}</span>
              </p>
            ))}
          </div>
        );

      case "cat":
        if (args === "readme.md" || args === "readme" || args === "README.md") {
          return (
            <div className="text-[11px] sm:text-xs font-mono">
              <p className="text-[#58a6ff] font-bold flex items-center gap-1"># <Hand className="w-4 h-4 inline" /> Hi, I&apos;m Ritesh Singh!</p>
              <br />
              <p className="text-[#c9d1d9]">Welcome to my terminal-based portfolio.</p>
              <p className="text-[#c9d1d9]">I&apos;m a Full Stack Developer & Blockchain enthusiast from India.</p>
              <br />
              <p className="text-[#39d353] flex items-center gap-1">## <Rocket className="w-4 h-4 inline" /> Quick Start</p>
              <p className="text-[#8b949e]">  • Type `help` to see all available commands</p>
              <p className="text-[#8b949e]">  • Type `projects` to see my work</p>
              <p className="text-[#8b949e]">  • Type `skills` to see my tech stack</p>
              <p className="text-[#8b949e]">  • Type `exit` to return to the normal site</p>
              <br />
              <p className="text-[#39d353] flex items-center gap-1">## <Mail className="w-4 h-4 inline" /> Get in Touch</p>
              <p className="text-[#8b949e]">  • GitHub: github.com/neutron420</p>
              <p className="text-[#8b949e]">  • Email: fnaticritesh2004@gmail.com</p>
            </div>
          );
        }
        if (args === "about" || args === "about/") {
          return processCommand("whoami");
        }
        if (args === "resume" || args === "resume.pdf") {
          return <p className="text-[#ffaa00] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,170,0,0.8)] flex items-center gap-1"><FileText className="w-4 h-4 inline" /> Opening resume... (This would download the resume in a real terminal)</p>;
        }
        if (!args) {
          return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">cat: missing file operand</p>;
        }
        return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">cat: {args}: No such file or directory</p>;

      case "cowsay":
        const cowText = args || "Moo! Type 'help' for commands!";
        const borderLen = Math.min(cowText.length + 2, 40);
        const displayText = cowText.length > 38 ? cowText.substring(0, 35) + "..." : cowText;
        return (
          <pre className="text-[#ffaa00] text-[10px] sm:text-xs whitespace-pre font-mono drop-shadow-[0_0_8px_rgba(255,170,0,0.8)]">
{` ${"_".repeat(borderLen)}
< ${displayText.padEnd(borderLen - 2)} >
 ${"-".repeat(borderLen)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
          </pre>
        );

      case "fortune":
        const randomFortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
        return (
          <p className="text-[#a371f7] text-xs font-mono italic">
            &quot;{randomFortune}&quot;
          </p>
        );

      case "matrix":
        if (args.toLowerCase() === "stop") {
          setShowMatrix(false);
          return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">Matrix effect stopped. 🔴</p>;
        }
        setShowMatrix(!showMatrix);
        return <p className="text-[#39d353] text-xs font-mono">Matrix effect {showMatrix ? "disabled" : "enabled"}. {!showMatrix && "🔴🟢"}</p>;
      
      case "binary":
        if (args.toLowerCase() === "stop") {
          setShowBinary(false);
          return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">Binary rain stopped. 🔴</p>;
        }
        setShowBinary(!showBinary);
        return <p className="text-[#39d353] text-xs font-mono">Binary rain {showBinary ? "disabled" : "enabled"}. {!showBinary && "0101"}</p>;
      
      case "hex":
        if (args.toLowerCase() === "stop") {
          setShowHex(false);
          return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">Hex rain stopped. 🔴</p>;
        }
        setShowHex(!showHex);
        return <p className="text-[#39d353] text-xs font-mono">Hex rain {showHex ? "disabled" : "enabled"}. {!showHex && "0xFF"}</p>;
      
      case "effects":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#00ff41] mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">┌─ Visual Effects ────────────────────────────────────────┐</p>
            <p className="ml-2 text-[#00ff41] opacity-90">  matrix       - Start/stop matrix rain effect</p>
            <p className="ml-2 text-[#00ff41] opacity-70">  matrix stop  - Stop matrix rain effect</p>
            <p className="ml-2 text-[#00ff41] opacity-90">  binary       - Start/stop binary rain (0s and 1s)</p>
            <p className="ml-2 text-[#00ff41] opacity-70">  binary stop  - Stop binary rain effect</p>
            <p className="ml-2 text-[#00ff41] opacity-90">  hex          - Start/stop hexadecimal code rain</p>
            <p className="ml-2 text-[#00ff41] opacity-70">  hex stop     - Stop hex code rain effect</p>
            <p className="text-[#00ff41] mt-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">└───────────────────────────────────────────────────────────┘</p>
          </div>
        );

      case "sudo":
        if (args.startsWith("rm")) {
          return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)] flex items-center gap-1">Nice try! This portfolio is protected <Shield className="w-4 h-4 inline" /></p>;
        }
        return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">[sudo] password for ritesh: ▓▓▓▓▓▓▓▓ Access Denied! 🔒</p>;

      case "rm":
        return <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">rm: cannot remove &apos;{args || "*"}&apos;: Permission denied</p>;

      case "touch":
      case "mkdir":
      case "mv":
      case "cp":
        return <p className="text-[#ffaa00] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,170,0,0.8)]">{command}: Read-only file system</p>;

      case "vim":
      case "nano":
      case "vi":
      case "nvim":
      case "emacs":
        return <p className="text-[#d29922] text-xs font-mono">Opening {command}... Error: This is a web-based terminal. Try VS Code instead! 😄</p>;

      case "git":
        if (args === "status") {
          return (
            <div className="text-[11px] sm:text-xs font-mono">
              <p className="text-[#c9d1d9]">On branch <span className="text-[#39d353]">main</span></p>
              <p className="text-[#c9d1d9]">Your branch is up to date with &apos;origin/main&apos;.</p>
              <p className="text-[#c9d1d9]">nothing to commit, working tree clean</p>
            </div>
          );
        }
        return <p className="text-[#8b949e] text-xs font-mono">git: &apos;{args}&apos; is not a git command. See &apos;git --help&apos;.</p>;

      case "ping":
        return (
          <div className="text-[11px] sm:text-xs font-mono">
            <p className="text-[#c9d1d9]">PING {args || "localhost"} (127.0.0.1): 56 data bytes</p>
            <p className="text-[#c9d1d9]">64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms</p>
            <p className="text-[#c9d1d9]">64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</p>
            <p className="text-[#39d353]">--- {args || "localhost"} ping statistics ---</p>
            <p className="text-[#c9d1d9]">2 packets transmitted, 2 received, 0% packet loss</p>
          </div>
        );

      case "whoops":
      case "oops":
        return <p className="text-[#d29922] text-xs font-mono">No worries! Try &apos;help&apos; to see available commands 😊</p>;

      case "hello":
      case "hi":
      case "hey":
        return <p className="text-[#39d353] text-xs font-mono flex items-center gap-1">Hello! <Hand className="w-4 h-4 inline" /> Welcome to my portfolio. Type &apos;help&apos; to get started!</p>;

      case "":
        return null;

      default:
        return (
          <p className="text-[#ff0040] text-xs font-mono drop-shadow-[0_0_8px_rgba(255,0,64,0.8)]">
            bash: {command}: command not found. Type &apos;help&apos; for available commands.
          </p>
        );
    }
  }, [commandHistory, showMatrix, showBinary, showHex, navigate, currentDir, bootTime, personalInfo, technologies, projects, education, contact, socials]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentInput.trim()) {
      setHistory(prev => {
        const newHistory = [...prev, {
          command: "",
          output: null,
          timestamp: new Date(),
        }];
        // Limit history to 200 entries for performance
        return newHistory.length > 200 ? newHistory.slice(-200) : newHistory;
      });
      return;
    }

    const output = processCommand(currentInput);
    const timestamp = new Date();
    
    setHistory(prev => {
      const newHistory = [...prev, {
        command: currentInput,
        output,
        timestamp,
      }];
      // Limit history to 200 entries for performance
      return newHistory.length > 200 ? newHistory.slice(-200) : newHistory;
    });

    setCommandHistory(prev => {
      const newHistory = [...prev, currentInput];
      // Limit command history to 100 entries
      return newHistory.length > 100 ? newHistory.slice(-100) : newHistory;
    });
    setHistoryIndex(-1);
    setCurrentInput("");
  }, [currentInput, processCommand]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete
      const commands = ["help", "whoami", "skills", "projects", "experience", "education", "contact", "socials", "clear", "exit", "neofetch", "ls", "cat", "pwd", "date", "echo", "history", "cowsay", "matrix", "binary", "hex", "effects"];
      const matches = commands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setHistory([]);
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      setCurrentInput("");
      setHistory(prev => [...prev, {
        command: currentInput + "^C",
        output: null,
        timestamp: new Date(),
      }]);
    }
  }, [commandHistory, historyIndex, currentInput]);

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black overflow-hidden touch-none animate-fade-in"
      onClick={handleTerminalClick}
    >
      {/* Matrix rain effect - enabled by default, continuous loop */}
      {showMatrix && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-12" style={{ willChange: 'transform', zIndex: 1 }}>
          {Array.from({ length: 30 }).map((_, i) => {
            const delay = (i * 0.2) % 3; // Staggered delays for continuous effect
            const duration = 3 + (i % 3); // Varying speeds
            return (
              <div
                key={`matrix-${i}`}
                className="absolute text-[#00ff41] text-xs font-mono animate-matrix-rain"
              style={{ 
                  left: `${(i * 3.33)}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  willChange: 'transform',
                  animationIterationCount: 'infinite',
                }}
              >
                {Array.from({ length: 15 }).map((_, j) => (
                  <div key={j} style={{ willChange: 'transform', opacity: 0.5 + Math.random() * 0.5 }}>
                    {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Binary rain effect - 0s and 1s, continuous loop */}
      {showBinary && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10" style={{ willChange: 'transform', zIndex: 2 }}>
          {Array.from({ length: 25 }).map((_, i) => {
            const delay = (i * 0.25) % 4; // Staggered delays
            const duration = 4 + (i % 2); // Varying speeds
            return (
              <div
                key={`binary-${i}`}
                className="absolute text-[#00ff41] text-[10px] font-mono animate-matrix-rain"
                        style={{
                  left: `${(i * 4) + 1}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  willChange: 'transform',
                  animationIterationCount: 'infinite',
                }}
              >
                {Array.from({ length: 12 }).map((_, j) => (
                  <div key={j} style={{ willChange: 'transform', opacity: 0.3 + Math.random() * 0.4 }}>
                    {Math.random() > 0.5 ? '0' : '1'}
                      </div>
                    ))}
              </div>
            );
          })}
                  </div>
                )}

      {/* Hex code rain effect - continuous loop */}
      {showHex && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-8" style={{ willChange: 'transform', zIndex: 3 }}>
          {Array.from({ length: 20 }).map((_, i) => {
            const delay = (i * 0.3) % 5; // Staggered delays
            const duration = 5 + (i % 3); // Varying speeds
            const hexValue = Math.floor(Math.random() * 256);
                  return (
                    <div 
                key={`hex-${i}`}
                className="absolute text-[#39d353] text-[9px] font-mono animate-matrix-rain"
                style={{ 
                  left: `${(i * 5) + 0.5}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  willChange: 'transform',
                  animationIterationCount: 'infinite',
                }}
              >
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} style={{ willChange: 'transform', opacity: 0.2 + Math.random() * 0.5 }}>
                    {'0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0')}
                  </div>
                ))}
                    </div>
                  );
                })}
        </div>
      )}

      {/* Scanlines - optimized with GPU acceleration */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,255,65,0.05) 0px, rgba(0,255,65,0.05) 1px, transparent 1px, transparent 2px)",
          transform: 'translateZ(0)', // GPU acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
        }}
      />

      {/* Glitch overlay - disabled to prevent wobbling */}

      {/* Terminal window - stable container without animations */}
      <div className="h-full flex flex-col overflow-hidden safe-area-inset" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        {/* Terminal title bar */}
        <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 bg-black border-b-2 border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.3)]">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff0040] shadow-[0_0_8px_rgba(255,0,64,0.8)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.8)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
          </div>
          <span className="text-[#00ff41] text-[10px] sm:text-sm ml-1.5 sm:ml-2 font-mono truncate drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">ritesh@portfolio:~</span>
        </div>

        {/* Terminal content - this is the only scrollable area */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4 font-mono text-xs sm:text-sm scrollbar-thin scrollbar-track-black scrollbar-thumb-[#00ff41] bg-black"
          style={{
            scrollBehavior: 'smooth',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            willChange: 'scroll-position',
          }}
        >
          {history.map((entry, index) => (
            <HistoryEntry key={`${entry.timestamp.getTime()}-${index}`} entry={entry} />
          ))}

          {/* Current input line - Fixed at bottom of scrollable area */}
          <form 
            onSubmit={handleSubmit} 
            className="sticky bottom-0 bg-black/98 backdrop-blur-sm pt-2 pb-2 sm:pt-3 sm:pb-2 flex items-center gap-1 sm:gap-2 flex-wrap border-t border-[#00ff41]/50 mt-2 z-20"
          >
            <span className="text-[#00ff41] text-[10px] sm:text-xs flex-shrink-0 hidden sm:inline drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">ritesh@portfolio</span>
            <span className="text-[#00ff41] text-[10px] sm:text-xs flex-shrink-0 sm:hidden drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">ritesh</span>
            <span className="text-[#00ff41] text-[10px] sm:text-xs flex-shrink-0 opacity-50">:</span>
            <span className="text-[#00ff41] text-[10px] sm:text-xs flex-shrink-0">~</span>
            <span className="text-[#00ff41] text-[10px] sm:text-xs flex-shrink-0 opacity-50">$</span>
            <div className="flex-1 min-w-0 relative">
                    <input
                      ref={inputRef}
                      type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-[#00ff41] font-mono text-base sm:text-sm caret-[#00ff41] border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none placeholder:text-[#00ff41]/50"
                style={{ boxShadow: 'none', fontSize: '16px', textShadow: '0 0 8px rgba(0,255,65,0.8)' }}
                      placeholder="Type a command..."
                      autoFocus
                autoComplete="off"
                      spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                    />
                  </div>
                </form>
            </div>

        {/* Status bar */}
        <StatusBar />
      </div>
    </div>
  );
}
