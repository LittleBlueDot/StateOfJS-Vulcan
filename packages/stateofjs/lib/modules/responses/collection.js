import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

const Responses = createCollection({
  collectionName: 'Responses',

  typeName: 'Response',

  schema,

  permissions: {
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['admins'],
  },
});

export default Responses;
