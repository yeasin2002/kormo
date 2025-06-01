import { companies, Company } from "@/data";
import fs from "fs";
import path from "path";

// This function already does what you want
const extractUniqueTechnologies = (companies: Company[]): string[] => {
  const technologiesSet = new Set<string>();

  companies.forEach((company) => {
    company.technologies.forEach((tech) => {
      technologiesSet.add(tech);
    });
  });

  return Array.from(technologiesSet).sort();
};

// Get unique technologies
const uniqueTechnologies = extractUniqueTechnologies(companies);
console.table(uniqueTechnologies.map((tech, index) => ({ index, tech })));

// // Create the file content
// const fileContent = uniqueTechnologies.join("\n"); // Convert array to string

// // Write to file
// const outputPath = path.join(__dirname, "unique-technologies.ts");
// fs.writeFileSync(outputPath, fileContent);

// console.log(
//   `Successfully created unique-technologies.ts with ${uniqueTechnologies.length} unique technologies`
// );
