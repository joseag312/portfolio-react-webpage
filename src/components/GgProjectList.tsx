interface GgProjectProps {
  projectName: string;
  onProjectSelect: (name: string) => void;
}

function GgProject(props: GgProjectProps) {
  function handleClick() {
    props.onProjectSelect(props.projectName);
  }

  return (
    <div className='project-icon widget m-2--responsive' onClick={handleClick} style={{ cursor: "pointer" }}>
      <svg fill='white' height='80px' width='80px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' stroke='black' viewBox='0 0 490 490' dur={"0.5s"}>
        <g>
          <path
            d='M466.032,367.5v-245L245,0L23.968,122.5v245L245,490L466.032,367.5z M118.865,175.094L245,105.188l126.136,69.906v139.813
          L245,384.813l-126.135-69.906V175.094z'
          />
          <polygon points='331.299,292.828 331.299,197.172 245,149.343 158.701,197.172 158.701,292.828 245,340.657 	' />
        </g>
      </svg>
    </div>
  );
}

interface GgProjectListProps {
  onProjectSelect: (name: string) => void;
}

function GgProjectList({ onProjectSelect }: GgProjectListProps) {
  let repos: string[] = ["project1", "project2", "project3", "project4", "project5", "project6", "project7"];

  return (
    <div className='h-80 w-100 d-flex flex-column align-items-center justify-content-around position-relative'>
      <div className='h-80 w-100 mx-4 px-4 d-flex flex-row flex-wrap align-items-center justify-content-center'>
        <div className='h-100 w-100 mx-4 px-4 d-flex flex-row flex-wrap align-items-center justify-content-center'>
          {repos.map((repoName) => (
            <GgProject key={`${repoName}`} projectName={`${repoName}`} onProjectSelect={onProjectSelect} />
          ))}
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  );
}

export default GgProjectList;
