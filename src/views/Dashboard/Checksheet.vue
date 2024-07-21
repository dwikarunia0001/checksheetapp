<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Checksheet</h4>
                  </div>
                  <div class="card-body pt-2">
                    <form role="form">
                      <label for="username">Operation</label>
                      <div class="mb-0">
                        <argon-input type="text" placeholder="Username" name="username" size="sm" />
                      </div>
                      <label for="password">Work Center</label>
                      <div class="mb-4">
                        <argon-input type="text" placeholder="Work Center" name="workcenter" size="sm" />
                      </div>
                      <label for="part-family">Part Family</label>
                      <div class="mb-4">
                        <argon-input type="text" placeholder="Part Family" name="partfamily" size="sm" />
                      </div>
                      <label for="part-family">Part Name</label>
                      <div class="mb-4">
                        <argon-input type="text" placeholder="Part Name" name="partname" size="sm" />
                      </div>
                      <label for="part-family">Part Number</label>
                      <div class="mb-4">
                        <argon-input type="text" placeholder="Part Number" name="partnumber" size="sm" />
                      </div>
                      <div class="text-center">
                        <RouterLink to="/checksheet/checksheet-detail"><argon-button class="mt-3 " variant="gradient" color="warning" fullWidth size="md">Search
                        </argon-button></RouterLink>
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
        name: 'dwi',
        password: '123',
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
  