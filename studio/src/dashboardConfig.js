export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f33e505502341ce2aa7b02e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rumyxqvv',
                  apiId: '99084b37-4f60-4053-9f99-99eaebadca17'
                },
                {
                  buildHookId: '5f33e505ea7793f0785a1ddf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dsu66ru6',
                  apiId: '0586a159-5450-43db-9523-a1dde0803233'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxmurdoch/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dsu66ru6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
