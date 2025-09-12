import { PROJECTS } from "../config/ProjectConfig";

type ProjectKey = keyof typeof PROJECTS;

type ProjectProps = {
  projectName: ProjectKey;
  onProjectSelect: (name: ProjectKey) => void;
  anim?: "enter" | "exit" | null;
};

function Project({ projectName, onProjectSelect, anim }: ProjectProps) {
  function handleClick() {
    onProjectSelect(projectName);
  }

  const cls = anim === "exit" ? "svg-collapse m-2--responsive" : "project-icon widget m-2--responsive";

  return (
    <div className={cls} onClick={handleClick} style={{ cursor: "pointer" }}>
      <svg fill='white' height='80px' width='80px' version='1.1' viewBox='0 0 490 490' stroke='black'>
        <g>
          <path d='M466.032,367.5v-245L245,0L23.968,122.5v245L245,490L466.032,367.5z M118.865,175.094L245,105.188l126.136,69.906v139.813 L245,384.813l-126.135-69.906V175.094z' />
          <polygon points='331.299,292.828 331.299,197.172 245,149.343 158.701,197.172 158.701,292.828 245,340.657' />
        </g>
      </svg>
    </div>
  );
}

type ProjectListProps = {
  onProjectSelect: (name: ProjectKey) => void;
  anim?: "enter" | "exit" | null;
};

export default function ProjectList({ onProjectSelect, anim }: ProjectListProps) {
  const repos = Object.keys(PROJECTS) as ProjectKey[];
  return (
    <div className='h-80 w-100 d-flex flex-column align-items-center justify-content-around position-relative'>
      <div className='h-80 w-100 mx-4 px-4 d-flex flex-row flex-wrap align-items-center justify-content-center'>
        <div className='h-100 w-100 mx-4 px-4 d-flex project-container flex-wrap align-items-center justify-content-center'>
          {anim === "exit" ? <Project key={repos[0]} projectName={repos[0]} onProjectSelect={onProjectSelect} anim={anim} /> : repos.map((repoName) => <Project key={repoName} projectName={repoName} onProjectSelect={onProjectSelect} />)}
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  );
}
