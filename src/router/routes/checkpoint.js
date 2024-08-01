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
            children: [
                {
                    path: "",
                    name: "CheckpointList",
                    component: () => import('@/views/Dashboard/CheckpointList.vue'),
                },
                {
                    path: "edit-checkpoint-list/:id",
                    name: "EditCheckpointList",
                    component: () => import('@/views/Dashboard/EditCheckpointList.vue'),
                    //meta: { auth: true },
                }
            ],
            //meta: { auth: true },
        },
        
    ],
  };
  
  export default checkpoint;