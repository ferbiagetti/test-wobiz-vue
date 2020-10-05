<template>
  <div>
    <form v-on:submit.prevent="login">
      <h2 class="greenish-blue-text mt-5 mb-4 bolder">Ingresa a tu cuenta</h2>

        <div v-if="showWrongData">
          <AlertComponent :message="wrongDataMsj" />
        </div>

      <!-- Email Field -->
      <fieldset class="form-group darkgray-text bold">
        <legend class="bv-no-focus-ring col-form-label pt-0">Email</legend>

        <div tabindex="1" role="group" class="bv-no-focus-ring">
          <input
            v-model="username"
            placeholder="ej: usuario@mail.com"
            type="text"
            @input="validateEmail"
            class="text-lowercase form-control"
          />
        </div>

        <div v-if="!errors.email.valid && isSubmit">
          <AlertComponent :message="errors.email.error" />
        </div>
      </fieldset>

      <!-- Password Field -->
      <fieldset class="form-group darkgray-text bold">
        <legend class="bv-no-focus-ring col-form-label pt-0">Contraseña</legend>

        <div tabindex="-1" role="group" class="bv-no-focus-ring">
          <input
            v-model="password"
            placeholder="Escribe tu contraseña"
            id="password"
            @input="validatePassword"
            type="password"
            class="form-control"
          />
        </div>

        <div v-if="!errors.password.valid && isSubmit">
          <AlertComponent :message="errors.password.error" />
        </div>
      </fieldset>

      <div class="pl-0 mt-2 mb-2 link-decoration">
        <a class="gray-text forgot-pass">¿Olvidaste tu contraseña?</a>
      </div>

      <div class="row">
        <div class="col">
          <button
            :disabled="loading" class="btn btn-action-2 btn-lg btn-block mt-3 btn-validate btn-secondary">
            
            <div v-if="!loading">
              Ingresar a mi cuenta
            </div>
            <div v-else>
              <SpinnerComponent />
            </div>
            
        
            
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import AlertComponent from "../share/alert/Alert";
import SpinnerComponent from '../share/spinner/Spinner';

export default {
  name: "LoginForm",
  components: { AlertComponent, SpinnerComponent },
  data() {
    return {
      username: null,
      isSubmit: false,
      loading: false,
      password: null,
      showWrongData: false,
      wrongDataMsj: "",
      errors: {
        email: { valid: false, error: 'Necesitamos tu email.' },
        password: { valid: false, error: 'Necesitamos tu contraseña.' },
      },
    };
  },
  methods: {
    validateEmail() {
      if (!this.username) {
        this.errors.email = { valid: false, error: "Necesitamos tu email." };
        return;
      }
      if (
        !this.username.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ) {
        this.errors.email = {
          valid: false,
          error: "El email ingresado no es correcto.",
        };
        return;
      }
      this.errors.email = { valid: true, error: null };
    },
    validatePassword() {
      if (!this.password) {
        this.errors.password = { valid: false, error: "Necesitamos tu contraseña." };
        return;
      }
      if (this.password.length < 6) {
        this.errors.password = { valid: false, error: "La contraseña no tiene un formato válido." };
        return;
      }
      this.errors.password = { valid: true, error: null };
    },
    login() {
      this.isSubmit = true;
      if(!this.errors.password.valid || !this.errors.email.valid) {
        return;
      } 
      this.loading = true;
      const body = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("https://powerful-crag-90877.herokuapp.com/login", body)
        .then((response) => {
          if (response.data && response.data.codigo === 200) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("user_id", response.user_id);
            window.location.href = "https://www.wobiz.com/";
          }
        })
        .catch((error) => {
          console.log("err", error.response.data);
          if (error.response.data.code === 106) {
            this.wrongDataMsj = "La contraseña no coinciden con el usuario";
            this.showWrongData = true;
          }

          if (error.response.data.code === 108) {
            this.wrongDataMsj = "Usuario Incorrecto";
            this.showWrongData = true;
          }
        }).finally ( () => {
          this.loading = false;
        });
    },
  },
};
</script>