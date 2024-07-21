const checksheet = {
    path: '/checksheet',
    name: 'Checksheet',
    children: [
        {
            path: "/checksheet",
            name: "Checksheet",
            component: () => import('@/views/Dashboard/Checksheet.vue'),
            //meta: { auth: true },
        },
        {
            path: "checksheet-detail",
            name: "ChecksheetDetail",
            component: () => import('@/views/Dashboard/ChecksheetDetail.vue'),
            //meta: { auth: true },
        },
    ],
  };
  
  export default checksheet;