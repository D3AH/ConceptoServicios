export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624279855835166ad306727c',
                  title: 'Sanity Studio',
                  name: 'conceptoservicios-studio',
                  apiId: 'cd9d9024-61f9-4f9d-9e4c-a4a350f68213'
                },
                {
                  buildHookId: '624279856b0e475f9839d9bf',
                  title: 'Blog Website',
                  name: 'conceptoservicios',
                  apiId: 'e82be532-3dc8-4ae2-859b-7084f6083ef2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/D3AH/ConceptoServicios',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://conceptoservicios.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
