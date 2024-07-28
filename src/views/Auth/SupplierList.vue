<template>
  <main>
    <section class="bg-image" 
     style="background-image: url('https://images.pexels.com/photos/7254428/pexels-photo-7254428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
            height: 100vh; background-size: cover; background-position: center center; background-repeat: no-repeat;">
      <div class="container-fluid ms-3">
        <img src="https://i.imgur.com/tgu6F4l.png" alt="" class="my-4">
      </div>

      <div class="container-fluid">
        <div class="row mt-8 ms-4">
          <div class="col-6">
            <h4 class="fw-bolder text-white">CHECKSHEET APP</h4>
            <h1 style="color: #FCA311;">Merdeka Precision</h1>
            <h5 class="fw-light text-white">Component Manufacturing, Fabrication, and Engine Overhaul.</h5>
          </div>
        </div>

        <div class="row ms-4">
          <div class="col-3">
            <RouterLink class="btn btn-lg mt-5 text-start px-3" style="background-color: #FCA311; color: black;" to="/auth/role">Sign In</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section id="supplierlist" class="mt-0 main-content bg-gray-100 min-vh-100 position-relative">
      <div class="page-header pt-6">
        <div class="container">
          <div v-for="item in listImg" :key="item.logo" class="row justify-content-center align-items-center g-5">
            <div class="mx-auto col-6 col-md-5 col-lg-4 col-xl-3 d-flex flex-column mx-lg-0">
              <h2>All <span style="color: #FCA311;">Customer</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid my-6 supplier-list">
        <div class="row justify-content-center align-items-center g-4">
          <RouterLink to="/" tag="div" class="col-sm-6 col-md-5 col-xl-3 col-xxl-3 mx-1">
            <div class="card">
              <div class="container my-auto">
                <div  class="row align-items-center justify-content-center">
                  <div class="col-4">
                    <img class="img-fluid" src="../../assets/img/bmj/kyb_logo.png">
                  </div>
                  <div class="col">
                    <h1 class="fs-5 mb-0">KYB</h1>
                    <p style="font-size: .7rem" class="fw-normal mt-1">Our Precision, Your Advantage</p>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/" tag="div" class="col-sm-6 col-md-5 col-xl-3 col-xxl-3 mx-1">
            <div class="card">
              <div class="container my-auto">
                <div class="row align-items-center justify-content-center">
                  <div class="col-4">
                    <img class="img-fluid" src="../../assets/img/bmj/hitachi_logo.png">
                  </div>
                  <div class="col">
                    <h1 class="fs-5 mb-0">Hitachi</h1>
                    <p style="font-size: .7rem" class="fw-normal mt-1"> Inspire the next</p>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="footer w-100" style="background-color: #FCA311; position: absolute; bottom: 0;">
        <div class="container-fluid px-5 mx-auto text-center text-white">
          <div class="py-3">
            <h5 class="text-white" style="margin-bottom: 0;">MERDEKA PRECISION</h5>
          </div>
          <hr style="margin: 0;"/>
          <p class="py-2" style="margin-bottom: 0; font-size: .8rem;">&copy; Copyright 2024</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
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
  data () {
    return {
      listImg: [
        {
          logo: "https://stechoq.com/wp-content/uploads/2022/06/stechoq-logo.png",
          sply1: "https://miamifilmfestival.com/wp-content/uploads/2020/01/Sponsors-Toyota-Logo-300x300.png",
          sply2: "https://i.pinimg.com/474x/b5/1c/3b/b51c3b229f78e799eeacc89ac9f03489.jpg"
        },
      ],
    }
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
