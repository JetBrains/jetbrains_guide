/*

Schema field (and later type) directives

 */

export const defaultString = (createFieldExtension: any) => {
  // Change null results to empty arrays so that map works
  createFieldExtension({
    name: `defaultString`,
    args: {
      value: {
        type: 'String!'
      }
    },
    extend(options: any) {
      const value = options.value
      return {
        async resolve(source: any, args: any, context: any, info: any) {
          const fieldValue = await context.defaultFieldResolver(source, args, context, info)
          return fieldValue || value
        }
      }
    }
  })
}


export const nullArray = (createFieldExtension: any) => {
  // If an array-oriented schema field provides a null, return an
  // empty list instead
  createFieldExtension({
    name: `nullArray`,
    extend() {
      return {
        async resolve(source: any, args: any, context: any, info: any) {
          const fieldValue = await context.defaultFieldResolver(source, args, context, info)
          return fieldValue || []
        }
      }
    }
  })
}
export const parentBody = (createFieldExtension: any) => {
  createFieldExtension({
    name: `parentBody`,
    extend() {
      return {
        async resolve(source: any, args: any, context: any, info: any) {
          const type = info.schema.getType(`Mdx`)
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent
          })
          const resolver = type.getFields().body.resolve
          return resolver(mdxNode, {}, context, {
            fieldName: 'body'
          })
        }
      }
    }
  })
}
