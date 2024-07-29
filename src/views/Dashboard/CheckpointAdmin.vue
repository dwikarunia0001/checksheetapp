<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="w-75 mx-auto d-flex flex-column mx-lg-0">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Checkpoint</h4>
                  </div>
                  <div class="card-body pt-2">
                    <form role="form" @submit="checkpointSubmit">
                    <div class="d-flex flex-row justify-content-between gap-2 pt-3">
                    <div class="w-50 d-flex flex-column">
                      <label for="operation">Operation</label>
                      <div class="mb-0">
                        <argon-input v-model="input.operation" type="text" placeholder="Operation" name="operation" size="sm" />
                      </div>
                      <label for="workcenter">Work Center</label>
                      <div class="mb-4">
                        <argon-input v-model="input.workcenter" type="text" placeholder="Work Center" name="workcenter" size="sm" />
                      </div>
                      <label for="partfamily">Part Family</label>
                      <div class="mb-4">
                        <argon-input v-model="input.partfamily" type="text" placeholder="Part Family" name="partfamily" size="sm" />
                      </div>
                      <label for="partname">Part Name</label>
                      <div class="mb-4">
                        <argon-input v-model="input.partname" type="text" placeholder="Part Name" name="partname" size="sm" />
                      </div>
                      <label for="partnumber">Part Number</label>
                      <div class="mb-4">
                        <argon-input v-model="input.partnumber" type="text" placeholder="Part Number" name="partnumber" size="sm" />
                      </div>
                    </div>
                    <div class="w-50 d-flex flex-column">
                      <label for="checkpoint">Checkpoint</label>
                      <div class="mb-0">
                        <argon-input v-model="input.checkpoint" type="text" placeholder="Checkpoint" name="checkpoint" size="sm" />
                      </div>
                      <label for="methode">Methode</label>
                      <div class="mb-4">
                        <argon-input v-model="input.methode" type="text" placeholder="Methode" name="methode" size="sm" />
                      </div>
                      <label for="standard">Standard</label>
                      <div class="mb-4">
                        <argon-input v-model="input.standard" type="text" placeholder="Standard" name="standard" size="sm" />
                      </div>
                      <label for="checkpointseriesnumber">Checkpoint Series Number</label>
                      <div class="mb-4">
                        <argon-input v-model="input.checkpointseriesnumber" type="text" placeholder="Checkpoint Series Number" name="checkpointseriesnumber" size="sm" />
                      </div>
                      <label for="drawing">Drawing</label>
                      <div class="mb-4">
                        <argon-input v-model="input.drawing" type="file" placeholder="Drawing" name="drawing" size="sm" />
                      </div>
                    </div>
                    
                    </div>
                    <div class="text-center">
                        <RouterLink to="/checkpoint/checkpoint-list"></RouterLink><argon-button type="submit" class="mt-3 " variant="gradient" color="warning" fullWidth size="md">Submit
                        </argon-button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
    
  </template>
  
  <script>
  import { mapActions } from 'pinia';
  import d$auth from '@/stores/auth';
  
  import Navbar from "@/examples/PageLayout/Navbar.vue";
  import ArgonInput from "@/components/ArgonInput.vue";
  import ArgonSwitch from "@/components/ArgonSwitch.vue";
  import ArgonButton from "@/components/ArgonButton.vue";
  const body = document.getElementsByTagName("body")[0];
  
  export default {
    name: "signin",
    components: {
      Navbar,
      ArgonInput,
      ArgonSwitch,
      ArgonButton,
    },
    data: () => ({
      // input
      input: {
        operation: 'Machining',
        workcenter: 'Headman T-35',
        partfamily: 'Cylinder',
        partname: 'Cylinder 12201-40755',
        partnumber: '12201-40755',
        checkpoint: 'Visual',
        methode: 'Visual',
        standard: 'No Scratch',
        checkpointseriesnumber: '1',
        drawing:''
      },
        listImg: [
          {
            logo: "https://stechoq.com/wp-content/uploads/2022/06/stechoq-logo.png",
            sply1: "https://miamifilmfestival.com/wp-content/uploads/2020/01/Sponsors-Toyota-Logo-300x300.png",
            sply2: "https://i.pinimg.com/474x/b5/1c/3b/b51c3b229f78e799eeacc89ac9f03489.jpg"
          },
        ],
    }),
    methods: {
      //...mapActions(d$auth, ['a$login']),
      async checkpointSubmit(e){
            try {
                e.preventDefault()
                // const formData = new FormData();

                // formData.append('avatar',this.fileUpload)
                //await this.a$upload(this.fileUpload); //abis itu panggil actions store buat kirim file ke server
                alert(`File uploaded! success`);
                this.$router.push('/checkpoint/checkpoint-list')
                // console.log(formData)
            } catch (error) {
                alert(`Error!\n${e.message}`);
            }
        },
      async submitLogin() {
        try {
          //await this.a$login({ ...this.input });
          //this.$router.replace({ name: 'Default' });
          location.replace("/dashboard");
        } catch (e) {
          console.error(e);
        }
      },
    },
    created() {
      this.$store.state.hideConfigButton = true;
      this.$store.state.showNavbar = false;
      this.$store.state.showSidenav = false;
      this.$store.state.showFooter = false;
      body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
      this.$store.state.hideConfigButton = false;
      this.$store.state.showNavbar = true;
      this.$store.state.showSidenav = true;
      this.$store.state.showFooter = true;
      body.classList.add("bg-gray-100");
    },
  };
  </script>
  