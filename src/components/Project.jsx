import React from "react";

export default function Project({ index, hostedAt, projectImgPath, projectName, projectAbout }) {
  return (
    <>
      {index % 2 === 0 ? (
        <div className="project-wrapper flex gap-24">
          <img src={projectImgPath} alt="projectImage" className="h-[15rem] w-[30rem] border-2 border-black" />
          <div className="flex flex-col gap-4 justify-center">
            <a href={hostedAt}>
              <h1 className="relative text-4xl text-my-red ">{projectName}</h1>
            </a>
            <p className="text-xl line-clamp-5">{projectAbout}</p>
          </div>
        </div>
      ) : (
        <div className="project-wrapper flex gap-24">
          <div className="flex flex-col gap-4 justify-center">
            <a href={hostedAt}>
              <h1 className="text-4xl text-my-red ">{projectName}</h1>
            </a>
            <p className="text-xl line-clamp-5">{projectAbout}</p>
          </div>
          <img src={projectImgPath} alt="projectImage" className="h-[15rem] w-[30rem] border-2 border-black" />
        </div>
      )}
    </>
  );
}
