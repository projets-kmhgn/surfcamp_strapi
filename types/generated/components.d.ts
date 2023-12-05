import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['turquoise', 'orange', 'beige', 'black']> &
      Attribute.Required &
      Attribute.DefaultTo<'black'>;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'info-block.button': InfoBlockButton;
    }
  }
}
