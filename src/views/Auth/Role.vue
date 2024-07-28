<template>
    <main class="mt-0 main-content bg-gray-100">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Choose Your Role:</h4>
                  </div>
                  <div class="card-body pt-2">
                    <ol class="list-group list-group-numbered">
                        <RouterLink to="/auth/login-admin">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Admin</div>
                            Checkpoint Data
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                            </svg>
                        </li>
                        </RouterLink>
                        <RouterLink to="/auth/login-inspector">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Inspector</div>
                            Checksheet Data
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </li>
                        </RouterLink>
                        <RouterLink to="/auth/login-supervisor">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Supervisor</div>
                            Analyst Data
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill-gear" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                            </svg>
                        </li>
                        </RouterLink>
                    </ol>
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
  import { useRouter } from "vue-router";
  const body = document.getElementsByTagName("body")[0];
  const router = useRouter();
  
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
      Login() {
        this.$router.push('/dashboard')
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
  