<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header">
          <div class="container">
            <div class="row justify-content-center">
              <div class="w-75 d-flex flex-column mt-5">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Inspector Report Detail</h4>
                  </div>
                  <div class="card-body pt-2">
                    <form role="form" class="d-flex flex-column gap-3">
                      <img src="https://images.pexels.com/photos/7254428/pexels-photo-7254428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="drawing" class="img-fluid">
                      <table class="mt-3 w-100 table-bordered">
                        <tbody>
                          <tr>
                            <th scope="1">Operations</th>
                            <td>: Machining</td>
                          </tr>
                          <tr>
                            <th scope="2">Work Center</th>
                            <td>: Takisawa TC2000</td>
                          </tr>
                          <tr>
                            <th scope="2">Part Name</th>
                            <td>: Guide 951 Forging</td>
                          </tr>
                          <tr>
                            <th scope="2">Shift</th>
                            <td>: 1</td>
                          </tr>
                          <tr>
                            <th scope="2">Hour</th>
                            <td>: 3</td>
                          </tr>
                          <tr>
                            <th scope="2">Customer</th>
                            <td>: KYB</td>
                          </tr>
                          <tr>
                            <th scope="2">Manufacture Order</th>
                            <td>: MO65771</td>
                          </tr>
                          <tr>
                            <th scope="2">Manufacture Date</th>
                            <td>: 2 Juli 2024</td>
                          </tr>
                          <tr>
                            <th scope="2">Document Number</th>
                            <td>: QC/020724/1</td>
                          </tr>
                        </tbody>
                      </table>
                      
                    
                        <table class="table-bordered text-center mt-3 w-100">
                          <thead>
                            <tr class="align-middle">
                              <th>Checkpoint</th>
                              <th>Methode</th>
                              <th>Standard</th>
                              <th>OK</th>
                              <th>NG</th>
                              <th>REPAIR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Concentricity</td>
                              <td>Visual</td>
                              <td>Max 0.04</td>
                              <td>
                                0.03
                              </td>
                              <td>
                                -
                              </td>
                              <td>
                                -
                              </td>
                            </tr>
                            <tr>
                              <td>Visual</td>
                              <td>Visual</td>
                              <td>No Scratch</td>
                              <td>
                                OK
                              </td>
                              <td>
                                -
                              </td>
                              <td>
                                -
                              </td>
                            </tr>
                            <tr>
                              <td>Total Panjang</td>
                              <td>Gauge</td>
                              <td>L = 288.0</td>
                              <td>
                                288.0
                              </td>
                              <td>
                                -
                              </td>
                              <td>
                               -
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      <table class="mt-3 w-100 table-bordered text-center">
                        <thead>
                          <tr>
                            <th>Judgement</th>
                            <th>Qty</th>
                            <th>Approved</th>
                            <th>Checked</th>
                            <th>Inspected</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>OK</td>
                            <td>30</td>
                            <td>Maryono</td>
                            <td>Aris</td>
                            <td>Tutur</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <th>Maryono</th>
                            <th>Aris Priyanto</th>
                            <th>Tutur Angger</th>
                          </tr>
                        </tbody>
                      </table>
                      
                        <div class="text-center">
                          <RouterLink to="/dashboard"><argon-button class="mt-3 " variant="gradient" color="danger" fullWidth size="md">Export to PDF
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
  