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
    {
      path: "role",
      name: "Role",
      component: () => import('@/views/Auth/Role.vue'),
    },
    {
      path: "login-admin",
      name: "Login Admin",
      component: () => import('@/views/Auth/LoginAdmin.vue'),
    },
    {
      path: "login-inspector",
      name: "Login Inspector",
      component: () => import('@/views/Auth/LoginInspector.vue'),
    },
    {
      path: "login-supervisor",
      name: "Login Supervisor",
      component: () => import('@/views/Auth/LoginSupervisor.vue'),
    },
  ],
};

export default auth;