import fa2018projects from "./projects-2018FA";
import su2019projects from "./projects-2019SU";
import fa2019projects from "./projects-2019FA";
import su2020projects from "./projects-2020SU";
import fa2020projects from "./projects-2020FA";
import su2021projects from "./projects-2021SU";
import fa2021projects from "./projects-2021FA";
import su2022projects from "./projects-2022SU";
import fa2022projects from "./projects-2022FA";
import sp2023projects from "./projects-2023SP";
import su2023projects from "./projects-2023SU";
import fa2023projects from "./projects-2023FA";
import sp2024projects from "./projects-2024SP";
import fa2024projects from "./projects-2024FA";
import sp2025projects from "./projects-2025SP";
import su2025projects from "./projects-2025SU";
import fa2025projects from "./projects-2025FA";

const getLastName = (fullName) => {
  const names = fullName.split(" ");
  return names[1];
};

function byLastName(project1, project2) {
  const lastname1 = getLastName(project1.by).toUpperCase();
  const lastname2 = getLastName(project2.by).toUpperCase();
  if (lastname1 < lastname2) return -1;
  if (lastname1 > lastname2) return 1;
  return 0;
}

const terms = [
         {
    name: "Fall 2025",
    projects: fa2025projects.sort(byLastName),
  }, 
  {
    name: "Summer 2025",
    projects: su2025projects.sort(byLastName),
  }, 
  {
    name: "Spring 2025",
    projects: sp2025projects.sort(byLastName),
  }, 
  {
    name: "Fall 2024",
    projects: fa2024projects.sort(byLastName),
  }, 
  {
    name: "Spring 2024",
    projects: sp2024projects.sort(byLastName),
  }, 
  {
    name: "Fall 2023",
    projects: fa2023projects.sort(byLastName),
  }, 
  {
    name: "Summer 2023",
    projects: su2023projects.sort(byLastName),
  },
  {
    name: "Spring 2023",
    projects: sp2023projects.sort(byLastName),
  },
  {
    name: "Fall 2022",
    projects: fa2022projects.sort(byLastName),
  },
  {
    name: "Summer 2022",
    projects: su2022projects.sort(byLastName),
  },
  {
  name: "Fall 2021",
  projects: fa2021projects.sort(byLastName),
},
    {
    name: "Summer 2021",
    projects: su2021projects.sort(byLastName),
  },
   {
    name: "Fall 2020",
    projects: fa2020projects.sort(byLastName),
  },
  {
    name: "Summer 2020",
    projects: su2020projects.sort(byLastName),
  },
  {
    name: "Fall 2019",
    projects: fa2019projects.sort(byLastName),
  },
  {
    name: "Summer 2019",
    projects: su2019projects.sort(byLastName),
  },
  {
    name: "Fall 2018",
    projects: fa2018projects.sort(byLastName),
  },
];

const sortObjKeyBy = (key, sortingFn) => (obj) => ({
  ...obj,
  [key]: obj[key].sort(sortingFn),
});

export default terms.map(sortObjKeyBy("projects", byLastName));
