module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'breadcrumb',
  description: 'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.',
  required: ['breadcrumbItems'],
  properties: {
    breadcrumbItems: {
      type: 'array',
      title: 'Breadcrumb Items',
      items: {
        type: 'object',
        title: 'Item',
        required: ['text', 'link'],
        properties: {
          text: {
            type: 'string',
            title: 'Item Text',
          },
          link: {
            type: 'string',
            title: 'Item Link',
          },
        },
      },
    },
  },
  examples: [
    {
      breadcrumbItems: [
        {
          text: 'Home',
          link: '#',
        },
        {
          text: 'Library',
          link: '#',
        },
        {
          text: 'Data',
          link: '#',
        },
      ],
    },
  ],
};
