import fa2018projects from "./projects-2018FA";
import su2019projects from "./projects-2019SU";

const getLastName = fullName => {
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
    name: "Summer 2019",
    projects: su2019projects.sort(byLastName)
  },
  {
    name: "Fall 2018",
    projects: fa2018projects.sort(byLastName)
  }
];

const sortObjKeyBy = (key, sortingFn) => obj => ({
  ...obj,
  [key]: obj[key].sort(sortingFn)
});

export default terms.map(sortObjKeyBy("projects", byLastName));
