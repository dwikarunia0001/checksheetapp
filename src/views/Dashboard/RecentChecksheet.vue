<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header">
          <div class="container">
            <div class="row justify-content-center">
              <div class="d-flex flex-column mt-5 mb-5">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Recent Checksheet</h4>
                  </div>
                  <div class="card-body pt-2">
                    <div class="table-responsive" >
                        <table class="table align-middle table-striped table-hover text-center mt-3 w-100" >
                          <thead class="table-warning">
                            <tr>
                              <th>Date</th>
                              <th>Shift</th>
                              <th>Hours</th>
                              <th>Inspector</th>
                              <th>Leader</th>
                              <th>Supervisor</th>
                              <th>Operations</th>
                              <th>Work Center</th>
                              <th>Part Family</th>
                              <th>Part Name</th>
                              <th>Part Number</th>
                              <th>Judgement Status</th>
                              <th>Judgement Quantity</th>
                              <th>Judgement Category</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>12/7/2024</td>
                              <td>1</td>
                              <td>7</td>
                              <td>Tutur Angger</td>
                              <td>Aris Priyanto</td>
                              <td>Maryono</td>
                              <td>Machining</td>
                              <td>Takisawa TC2000</td>
                              <td>Oil Lock Piece</td>
                              <td>OLPK122</td>
                              <td>122</td>
                              <td>NG</td>
                              <td>5</td>
                              <td>Scratch</td>
                              <td>
                                <RouterLink to="/dashboard"><argon-button variant="gradient" color="primary" style="weight: 10px;">Detail
                                </argon-button></RouterLink>
                              </td>
                            </tr>
                            <tr>
                              <td>12/7/2024</td>
                              <td>1</td>
                              <td>7</td>
                              <td>Tutur Angger</td>
                              <td>Aris Priyanto</td>
                              <td>Maryono</td>
                              <td>Machining</td>
                              <td>Takisawa TC2000</td>
                              <td>Oil Lock Piece</td>
                              <td>OLPK122</td>
                              <td>122</td>
                              <td>NG</td>
                              <td>5</td>
                              <td>Scratch</td>
                              <td>
                                <RouterLink to="/dashboard"><argon-button variant="gradient" color="primary" style="weight: 10px;">Detail
                                </argon-button></RouterLink>
                              </td>
                            </tr>
                            <tr>
                              <td>12/7/2024</td>
                              <td>1</td>
                              <td>7</td>
                              <td>Tutur Angger</td>
                              <td>Aris Priyanto</td>
                              <td>Maryono</td>
                              <td>Machining</td>
                              <td>Takisawa TC2000</td>
                              <td>Oil Lock Piece</td>
                              <td>OLPK122</td>
                              <td>122</td>
                              <td>NG</td>
                              <td>5</td>
                              <td>Scratch</td>
                              <td>
                                <RouterLink to="/dashboard"><argon-button variant="gradient" color="primary" style="weight: 10px;">Detail
                                </argon-button></RouterLink>
                              </td>
                            </tr>
                            
                          </tbody>
                        </table>
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
  