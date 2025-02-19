export const routes = {
  auth: {
    signin: '/auth/signin',
    register: '/auth/register',
    confirm: '/auth/confirm'
  },
  user: {
    profile: '/user/profile',
    order: '/user/order',
    inquiry: '/user/inquiry'
  },
  admin: {
    order: '/admin/orders',
    dashboard: '/admin/dashboard',
    users: '/admin/users'
  }
} as const;

export const default_redirect = {
  admin: routes.admin.order,
  user: routes.user.profile
} as const; 