const spvdashboard = {
    path: '/spvdashboard',
    name: 'spvdashboard',
    children: [
      {
        path: "",
        name: "Supervisor Dashboard",
        component: () => import('@/views/Dashboard/SpvDashboard.vue'),
        //meta: { auth: true },
      },
    ],
  };
  
  export default spvdashboard;