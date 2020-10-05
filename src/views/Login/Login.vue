<template>
  <div class="row mr-0">
    <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col">
      <div class="box vh-100 white-bg box-shadow">
        <div class="row vh-100">
          <div class="col vh-100">
            <a href="https://www.wobiz.com/">
              <img class="logo" src="@/assets/images/wobiz-logo.png">
            </a>
            <LoginFormVue />
          </div>
          
        </div>
      </div>
    
    </div>
    
  <!-- Right Container-->
  <div class="col-lg-8 col-md-6 d-none d-md-block p-0 col">
    <div  class="position relative vh-100">
      <img class="vh-100 position-relative vw-img" src="@/assets/images/background.png">
      <div class="row text-not-account d-none d-lg-inline-flex">
        <p class="greenish-blue-text mr-3 mt-2">
          ¿No tienes una cuenta en Wobiz?
        </p>
        <a href="https://admin.wobiz.com.ar/signup">
          <button class="btn btn-transparent btn-bordered">
            <div class="button-text">
              Crea tu cuenta
            </div>
          </button>
        </a>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import LoginFormVue from '../../components/Login/LoginForm.vue'

export default {
  name: 'Login',
  components: {LoginFormVue}
}
</script>

<style lang="scss">
  @import './Login.scss';

</style>