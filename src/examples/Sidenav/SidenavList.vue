<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          url="/dashboard"
          :class="getRoute() === 'dashboard' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/checksheet"
          :class="getRoute() === 'todo' ? 'active' : ''"
          :navText="'Checksheet'"
        >
          <template v-slot:icon>
            <i class="ni ni-check-bold text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      
      <li class="nav-item" @click="logout">
        <div class="nav-link">
          <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
            <slot name="icon">
              <i class="ni ni-user-run text-info text-sm opacity-10"></i>
            </slot>
          </div>
          <RouterLink to="/auth/signin"><span class="nav-link-text ms-1">Sign Out</span></RouterLink>
        </div>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";
import { mapActions } from 'pinia';
import d$auth from '@/stores/auth';
import { certCookies } from "@/plugins/cookies";

const { id } = certCookies();

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      signed: id,
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    ...mapActions(d$auth, ['a$logout']),
    logout() {
      try {
        this.a$logout();
        this.$router.replace({ name: 'Signin' });
      } catch (e) {
        console.log(e);
      }
    },
  }
};
</script>
<style>
li.nav-item {
  cursor: pointer;
}
</style>
