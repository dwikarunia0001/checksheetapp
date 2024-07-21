const dashboard = {
  path: '/dashboard',
  name: 'dashboard',
  children: [
    {
      path: "",
      name: "Default",
      component: () => import('@/views/Dashboard/Default.vue'),
      //meta: { auth: true },
    },
  ],
};

export default dashboard;