<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header">
          <div class="container">
            <div class="row justify-content-center">
              <div class="w-75 d-flex flex-column mt-5">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Checksheet Detail</h4>
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
                        </tbody>
                      </table>
                      <div class="mt-3 p-2 d-flex flex-column border border-dark">
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column">
                            <label for="shift">Shift</label>
                            <div class="mb-0">
                              <argon-input v-model="input.shift" type="text" placeholder="Shift" name="shift" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <label for="hour">Hour</label>
                            <div class="mb-0">
                              <argon-input v-model="input.hour" type="text" placeholder="Hour" name="hour" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <label for="customer">Customer</label>
                            <div class="mb-0">
                              <argon-input v-model="input.customer" type="text" placeholder="Customer" name="customer" size="lg" />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between gap-2">
                          <div class="d-flex flex-column">
                            <label for="manufacture-order">Manufacture Order</label>
                            <div class="mb-0">
                              <argon-input v-model="input.manufactureorder" type="text" placeholder="Manufacture Order" name="manufacture-order" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <label for="manufacture-date">Manufacture Date</label>
                            <div class="mb-0">
                              <argon-input v-model="input.manufacturedate" type="date" placeholder="Manufacture Date" name="manufacture-date" size="lg" />
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <label for="doc-number">Document Number</label>
                            <div class="mb-0">
                              <argon-input v-model="input.documentnumber" type="text" placeholder="Document Number" name="doc-number" size="lg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    
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
                              <argon-input v-model="input.checkpointStatus1OK" type="text" placeholder=""  size="sm"/>
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus1NG" type="text" placeholder=""  size="sm" />
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus1Repair" type="text" placeholder=""  size="sm" />
                              </td>
                            </tr>
                            <tr>
                              <td>Visual</td>
                              <td>Visual</td>
                              <td>No Scratch</td>
                              <td>
                                <argon-input v-model="input.checkpointStatus2OK" type="text" placeholder=""  size="sm"/>
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus2NG" type="text" placeholder=""  size="sm" />
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus2Repair" type="text" placeholder=""  size="sm" />
                              </td>
                            </tr>
                            <tr>
                              <td>Total Panjang</td>
                              <td>Gauge</td>
                              <td>L = 288.0</td>
                              <td>
                                <argon-input v-model="input.checkpointStatus3OK" type="text" placeholder=""  size="sm"/>
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus3NG" type="text" placeholder=""  size="sm" />
                              </td>
                              <td>
                                <argon-input v-model="input.checkpointStatus3Repair" type="text" placeholder=""  size="sm" />
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
                            <td><argon-input v-model="input.judgement_status" type="text" placeholder=""  size="sm" /></td>
                            <td><argon-input v-model="input.judgement_qty" type="text" placeholder=""  size="sm" /></td>
                            <td>Maryono</td>
                            <td>Aris Priyanto</td>
                            <td>Tutur Angger</td>
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
                      <div >
                        <!--
                        class="d-flex flex-row gap-3"
                        <div class="text-center">
                          <RouterLink to="/dashboard"><argon-button class="mt-3 " variant="gradient" color="primary" fullWidth size="md">Save
                          </argon-button></RouterLink>
                        </div>
                        -->
                        <div class="text-center">
                          <RouterLink to="/checksheet-list"><argon-button class="mt-3 " variant="gradient" color="warning" fullWidth size="md">Submit
                          </argon-button></RouterLink>
                        </div>
                        <!--
                        <div class="text-center">
                          <RouterLink to="/dashboard"><argon-button class="mt-3 " variant="gradient" color="danger" fullWidth size="md">Cancel
                          </argon-button></RouterLink>
                        </div>
                        -->
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
        shift: 1,
        hour: 7,
        customer: 'KYB',
        manufactureorder: 'MO65571',
        manufacturedate: '2 Juli 2024',
        documentnumber: 'QC/020724/1',
        checkpointStatus1OK: '0.03',
        checkpointStatus1NG: '-',
        checkpointStatus1Repair: '-',
        checkpointStatus2OK: 'OK',
        checkpointStatus2NG: '-',
        checkpointStatus2Repair: '-',
        checkpointStatus3OK: '288.0',
        checkpointStatus3NG: '-',
        checkpointStatus3Repair: '-',
        judgement_status: 'OK',
        judgement_qty: '30',
        supervisor_name: 'Maryono',
        leader_name: 'Aris Priyanto',
        inspector_name: 'Tutur',
        supervisor_sign: 'Maryono',
        leader_sign: 'Aris Priyanto',
        inspector_sign: 'Tutur',
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
  