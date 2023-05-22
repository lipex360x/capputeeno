import type { PlopGeneratorConfig } from 'plop'

export default <Partial<PlopGeneratorConfig>>{
  description: 'Generate Icons',

  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name',
      validate: (value: string) => (!value ? 'name is required' : true),
    },
  ],

  actions: (data: any) => {
    const { componentName } = data
    const fileData = { componentName }

    return [
      {
        type: 'add',
        path: `../src/components/Icons/{{componentName}}.tsx`,
        templateFile: `modules/Icons/templates/component.hbs`,
        data: fileData,
      },

      {
        type: 'append',
        path: `../src/components/Icons/index.ts`,
        template: "export * from './{{componentName}}'\n",
      },
    ]
  },
}
