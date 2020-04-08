import { readFileSync } from 'fs';
import path from 'path';

export const resourcesSchemaCustomizations = (createTypes: any) => {
  // Load the GQL files for resource types
  const gqlFiles = ['blogpost'];
  gqlFiles.forEach((resourcetype: string) => {
    const fullFn = path.join(__dirname, `./${resourcetype}/types.graphql`);
    const resourceTypes = readFileSync(`${fullFn}`, {
      encoding: `utf-8`
    });
    createTypes(resourceTypes);
  });
};
