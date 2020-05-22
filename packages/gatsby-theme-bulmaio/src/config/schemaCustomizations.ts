/*

Handlers for gatsby-node.js createSchemaCustomization

 */
import * as fs from 'fs';
import * as path from 'path';
import { defaultString, nullArray, parentBody } from './directives';

import { resourcesSchemaCustomizations } from '../resources/gatsby-setup';
import { referencesSchemaCustomizations } from '../references/gatsby-setup'

export interface SchemaCustomizationProps {
  actions: any
}

exports.setupSchemaCustomizations = ({ actions }: SchemaCustomizationProps) => {
  const { createTypes, createFieldExtension } = actions;

  // Extensions
  defaultString(createFieldExtension);
  nullArray(createFieldExtension);
  parentBody(createFieldExtension);

  // Load the GQL files for core interfaces and types
  const fullFn = path.join(__dirname, `./core.graphql`);
  const coreTypes = fs.readFileSync(`${fullFn}`, {
    encoding: `utf-8`
  });
  createTypes(coreTypes);

  resourcesSchemaCustomizations(createTypes);
  referencesSchemaCustomizations(createTypes)
};
