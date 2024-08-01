import { defineStore } from "pinia";
//import * as s$admin from '@/services/finish-good/production';

const store$admin = defineStore({
    id: 'admin',
    state: () => ({
       workOrder: [],
       listWOFile: [],
       detailWO: [],
       listLabelBox: [],
       fakeListCheckpoint: [
          {
            "id": 1,
            "operation": 'Machining',
            "workcenter": 'Headman T-35',
            "partfamily": 'Cylinder',
            "partname": 'Cylinder 12201-40755',
            "partnumber": '12201-40755',
            "checkpoint": 'Visual',
            "methode": 'Visual',
            "standard": 'No Scratch',
            "checkpointseriesnumber": '1',
            "drawing":'img.jpg'
          }
       ],
       fakeListCheckpointById: [],
       fakeDetailWO: [
        {
            "id": 3,
            "id_file": 2,
            "no_work_order": "23102022SPK001",
            "part_name": "GARNISH RR BUMPER LWR (IPR)",
            "part_number": "IT01-RBL0105-XX-XX",
            "customer": "HPP",
            "prod_date": "2022-12-16T16:36:27.082Z",
            "quantity_perbox": 10,
            "total_order": 30,
            "total_box": 3,
            "supplier_id": 1
          },
          {
            "id": 4,
            "id_file": 2,
            "no_work_order": "23102022SPK001",
            "part_name": "COBA",
            "part_number": "IT01-RBL0105-XX-XX",
            "customer": "HPP",
            "prod_date": "2022-12-16T16:36:27.090Z",
            "quantity_perbox": 10,
            "total_order": 30,
            "total_box": 3,
            "supplier_id": 1
          }
       ],
    }),
    actions: {
        // actions upload file
        async store$uploadcheckpoint(file) {
            try {
                //await s$production.upload(file);
                this.fakeListCheckpoint.push(file)
                console.log(file)
                // return data;
            } catch (error) {
                console.error('actions upload error', e);
            }
        },
        async store$deleteCheckpointList(id) {
            try {
              // const data = await s$production.editDetailWO(body); // mengirim body ke services
              // console.log('EDITT=', data);
              /*
              if (this.fakeDetailWO.find(item => item.id == id)) {
                return this.fakeDetailWO.find(item => item.total_order = body)
              }
              */
              var foundIndex = this.fakeListCheckpoint.findIndex(x => x.id == id);
              this.fakeListCheckpoint.splice(foundIndex, 1)
              //this.fakeListCheckpoint[foundIndex].workcenter = workcenter
              console.log(this.fakeListCheckpoint);

            } catch (e) {
              console.error('actions todo list error', e);
              console.log(body);
              throw e;
            }
        },
        async store$getCheckpointById(id) {
            try {
                var foundIndex = this.fakeListCheckpoint.findIndex(x => x.id == id);
                this.fakeListCheckpointById.push(this.fakeListCheckpoint[foundIndex])
              //this.fakeListCheckpoint[foundIndex].workcenter = workcenter
              console.log(this.fakeListCheckpointById);
            } catch (error) {
                console.error('actions upload error', e);
            }
        },
        // buat actions get list history work order 
        async a$listWO() {
            try {
                const data = await s$production.listWO(); // mengambil data dari services
                console.log('production data' + data)
                this.listWOFile = data.data;
            } catch(e) {
                console.error('actions get list WO error', e);
                throw e;
            }
        },
        // actions get detail history work order
        async a$detailWO(id) {
            try {
                const data = await s$production.detailWO(id); // mengambil data dari services
                this.detailWO = data.data; // menyimpan data di state list
                console.log('detail' + this.detailWO)
            } catch(e) {
                console.error('actions get detail WO error', e);
                throw e;
            }
        },

        // actions edit detail work order
        async a$editCheckpointList(id, data) {
            try {
              // const data = await s$production.editDetailWO(body); // mengirim body ke services
              // console.log('EDITT=', data);
              /*
              if (this.fakeDetailWO.find(item => item.id == id)) {
                return this.fakeDetailWO.find(item => item.total_order = body)
              }
              */
              var foundIndex = this.fakeListCheckpoint.findIndex(x => x.id == id);
              this.fakeListCheckpoint[foundIndex].operation = data.operation;
              
              this.fakeListCheckpoint[foundIndex].workcenter = data.workcenter;
              this.fakeListCheckpoint[foundIndex].partfamily = data.partfamily;
              this.fakeListCheckpoint[foundIndex].partname = data.partname;
              this.fakeListCheckpoint[foundIndex].partnumber = data.partnumber;
              this.fakeListCheckpoint[foundIndex].checkpoint = data.checkpoint;
              this.fakeListCheckpoint[foundIndex].methode = data.methode;
              this.fakeListCheckpoint[foundIndex].standard = data.standard;
              this.fakeListCheckpoint[foundIndex].checkpointseriesnumber = data.checkpointseriesnumber;
              this.fakeListCheckpoint[foundIndex].drawing = data.drawing;

            } catch (e) {
              console.error('actions todo list error', e);
              console.log(data.operation)
              throw e;
            }
        },

        // actions get detail label box
        async a$detailLabelBox(id) {
            try {
                const data = await s$production.listLabelBox(id); // mengambil data dari services
                this.listLabelBox = data.data; // menyimpan data di state list
                console.log('detail' + this.detailWO)
            } catch(e) {
                console.error('actions get detail WO error', e);
                throw e;
            }
        },
    },
    getters: {
        g$fakeListCheckpoint: ({ fakeListCheckpoint }) => fakeListCheckpoint,
        getDetail: ({ fakeListCheckpoint }) => {
            return (id) => fakeListCheckpoint.find((a) => a.id == id);
        },
        g$fakeListCheckpointById: ({ fakeListCheckpointById }) => fakeListCheckpointById,
        // checkpointadminend
        g$listWO: ({ listWOFile }) => listWOFile,
        g$listWO: ({ listWOFile }) => listWOFile,
        g$detailWO: ({ detailWO }) => detailWO,
        g$detailLabelBox: ({ listLabelBox }) => listLabelBox,
        g$fakeWO: ({ fakeListWO }) => fakeListWO,
        g$fakeDetailWO: ({ fakeDetailWO}) => fakeDetailWO,
        g$fakeLabelBox: ({ fakeLabelBox }) => fakeLabelBox,
    },
});

export default store$admin;