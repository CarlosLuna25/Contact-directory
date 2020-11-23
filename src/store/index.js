import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactosLocal:[
      {
          "id": 1,
          "name": "Carlos Luna",
          "direction": "Los Robles, Maneiro, Nueva Esparta",
          "phone": "04166964462",
          "email": "carlos@gmail.com",
          "photo_path": "http://localhost:8000/storage/images/1605058304Carlos Luna.png",
          "created_at": "2020-09-25T20:17:25.000000Z",
          "updated_at": "2020-11-11T01:31:44.000000Z"
      },
      {
          "id": 2,
          "name": "Andrea Luna",
          "direction": "Los Robles, Maneiro, Nueva Esparta",
          "phone": "04166964475",
          "email": "andrea@gmail.com",
          "photo_path": "http://localhost:8000/storage/images/1605837227Andrea Luna.png",
          "created_at": "2020-09-25T20:17:26.000000Z",
          "updated_at": "2020-11-20T01:53:48.000000Z"
      },
      {
          "id": 3,
          "name": "Mary Jimenez",
          "direction": "Los Robles, Maneiro, Nueva Esparta",
          "phone": "04166956571",
          "email": "mary@gmail.com",
          "photo_path": "http://localhost:8000/storage/images/1605837626Mary Jimenez.png",
          "created_at": "2020-09-25T20:17:29.000000Z",
          "updated_at": "2020-11-20T02:00:26.000000Z"
      },
      {
          "id": 5,
          "name": "Argenis Luna",
          "direction": "Los Robles, Maneiro, Nueva Esparta",
          "phone": "04263869802",
          "email": "argenis@gmail.com",
          "photo_path": "http://localhost:8000/storage/images/1605838042Argenis Luna.png",
          "created_at": "2020-11-06T23:41:18.000000Z",
          "updated_at": "2020-11-20T02:07:22.000000Z"
      },
      {
          "id": 11,
          "name": "Carlos Ramos",
          "direction": "España, Barcelonaasd",
          "phone": "04125698756",
          "email": "Carlos@ramos.com",
          "photo_path": null,
          "created_at": "2020-11-16T20:24:15.000000Z",
          "updated_at": "2020-11-16T20:24:15.000000Z"
      },
      {
          "id": 12,
          "name": "Laura Jimenez",
          "direction": "asdasdasda",
          "phone": "04245698789",
          "email": "laura@laura.com",
          "photo_path": null,
          "created_at": "2020-11-16T20:29:42.000000Z",
          "updated_at": "2020-11-16T20:29:42.000000Z"
      },
      {
          "id": 14,
          "name": "andrea A",
          "direction": "asdadasdasd",
          "phone": "04125698784",
          "email": "AndreaA@andrea.com",
          "photo_path": null,
          "created_at": "2020-11-16T20:32:21.000000Z",
          "updated_at": "2020-11-16T20:32:21.000000Z"
      }
  ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
