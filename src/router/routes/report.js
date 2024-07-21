const checksheet = {
    path: '/report',
    name: 'Report',
    children: [
        {
            path: "/report",
            name: "Report",
            component: () => import('@/views/Dashboard/Report.vue'),
            //meta: { auth: true },
        },
        {
            path: "report-detail",
            name: "ReportDetail",
            component: () => import('@/views/Dashboard/ReportDetail.vue'),
            //meta: { auth: true },
        },
    ],
  };
  
  export default checksheet;