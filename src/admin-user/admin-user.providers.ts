import { Mongoose } from 'mongoose';
import { AdminUserSchema } from './schemas/admin-user';

export const adminUserProviders = [
  {
    provide: 'AdminUserModel_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Admin_User', AdminUserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
