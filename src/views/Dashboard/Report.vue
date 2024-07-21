<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="w-75 mx-auto d-flex flex-column mx-lg-0 mt-5">
                <div class="card">
                  <div class="pb-0 card-header">
                    <h4 class="font-weight-bolder">Recent</h4>
                  </div>
                  <div class="card-body pt-2">
                    <div class="d-flex flex-column  border border-dark px-3 pb-3">
                      <div>
                      <table class="mt-3 w-100 table-bordered">
                        <tbody>
                          <tr>
                            <th>Status</th>
                            <th>: In Progress</th>
                          </tr>
                          <tr>
                            <th>Operations</th>
                            <td>: Machining</td>
                          </tr>
                          <tr>
                            <th>Work Center</th>
                            <td>: Takisawa TC2000</td>
                          </tr>
                          <tr>
                            <th>Part Name</th>
                            <td>: Guide 951 Forging</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="mt-3 w-100 table-bordered">
                        <tbody>
                          <tr>
                            <th>Status</th>
                            <th>: Finished</th>
                          </tr>
                          <tr>
                            <th>Operations</th>
                            <td>: Machining</td>
                          </tr>
                          <tr>
                            <th>Work Center</th>
                            <td>: Takisawa TC2000</td>
                          </tr>
                          <tr>
                            <th>Part Name</th>
                            <td>: Guide 951 Forging</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                  </div>
                  <div class="pb-0 card-header">
                    <h4 class="font-weight-bolder">Search and Find</h4>
                  </div>
                  <div class="card-body pt-2">
                    <div class="d-flex flex-column border border-dark p-3 justify-content-between">
                    <form role="form">
                      
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column w-50">
                            <label for="start-date">Start Date</label>
                            <div class="mb-0">
                              <argon-input type="date" placeholder="Start Date" name="start-date" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column w-50">
                            <label for="finish-date">Finish Date</label>
                            <div class="mb-0">
                              <argon-input type="date" placeholder="Manufacture Date" name="manufacture-date" size="lg" />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column w-50">
                            <label for="operation">Operation</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Operation" name="operation" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column w-50">
                            <label for="manufacture-date">Part Name</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Part Name" name="part-name" size="lg" />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column w-50">
                            <label for="work-center">Work Center</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Work Center" name="work-center" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column w-50">
                            <label for="part-number">Part Number</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Part Number" name="part-number" size="lg" />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column w-50">
                            <label for="part-family">Part Family</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Part Family" name="part-family" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column w-50">
                            <label for="manufacture-date">Shift</label>
                            <div class="mb-0">
                              <argon-input type="text" placeholder="Shift" name="shift" size="lg" />
                            </div>
                          </div>
                        </div>
                      <div class="text-center">
                        <RouterLink to="/report/report-detail"><argon-button class="mt-3 " variant="gradient" color="warning" fullWidth size="md">Search
                        </argon-button></RouterLink>
                      </div>
                    
                    </form>
                    </div>
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
  