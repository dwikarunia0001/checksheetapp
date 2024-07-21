const auth = {
  path: '/auth',
  name: 'Auth',
  children: [
    {
      path: "supplier-list",
      name: "SupplierList",
      alias: "/",
      component: () => import('@/views/Auth/SupplierList.vue')
    },
    {
      path: "signin",
      name: "Signin",
      component: () => import('@/views/Auth/Signin.vue'),
    },
  ],
};

export default auth;