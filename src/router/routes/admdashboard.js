const admdashboard = {
    path: '/admdashboard',
    name: 'admdashboard',
    children: [
      {
        path: "",
        name: "Admin Dashboard",
        component: () => import('@/views/Dashboard/AdmDashboard.vue'),
        //meta: { auth: true },
      },
    ],
  };
  
  export default admdashboard;