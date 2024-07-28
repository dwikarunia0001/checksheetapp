const checksheetlist = {
    path: '/checksheet-list',
    name: 'ChecksheetList',
    children: [
        {
            path: "/checksheet-list",
            name: "ChecksheetList",
            component: () => import('@/views/Dashboard/ChecksheetListInsp.vue'),
            //meta: { auth: true },
        },
        {
            path: "insp-check-list-detail",
            name: "InspChecksheetListDetail",
            component: () => import('@/views/Dashboard/InspCheckListDetail.vue'),
            //meta: { auth: true },
        },
    ],
  };
  
  export default checksheetlist;