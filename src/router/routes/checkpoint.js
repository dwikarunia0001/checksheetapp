const checkpoint = {
    path: '/checkpoint',
    name: 'Checkpoint',
    children: [
        {
            path: "/checkpoint",
            name: "Checkpoint",
            component: () => import('@/views/Dashboard/CheckpointAdmin.vue'),
            //meta: { auth: true },
        },
        {
            path: "checkpoint-list",
            name: "CheckpointList",
            component: () => import('@/views/Dashboard/CheckpointList.vue'),
            //meta: { auth: true },
        },
    ],
  };
  
  export default checkpoint;