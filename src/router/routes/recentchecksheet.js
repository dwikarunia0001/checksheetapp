const recentchecksheet = {
    path: '/recentchecksheet',
    name: 'Recent Checksheet',
    children: [
        {
            path: "/recentchecksheet",
            name: "Recent Checksheet",
            component: () => import('@/views/Dashboard/RecentChecksheet.vue'),
            //meta: { auth: true },
        },
        {
            path: "recentchecksheet-detail",
            name: "Recent Checksheet Detail",
            component: () => import('@/views/Dashboard/RecentChecksheetDetail.vue'),
            //meta: { auth: true },
        },
        
    ],
  };
  
  export default recentchecksheet;