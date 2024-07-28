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
            path: "checksheet-detail-insp",
            name: "ChecksheetDetailInsp",
            component: () => import('@/views/Dashboard/ChecksheetDetailInsp.vue'),
            //meta: { auth: true },
        },
    ],
  };
  
  export default checksheet;