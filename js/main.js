"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Mangiare una pizza",
          done: false,
        },
        {
          text: "Fare una passeggiata",
          done: false,
        },
        {
          text: "Fare i compiti",
          done: true,
        },
        {
          text: "Uscire con gli amici",
          done: true,
        },
      ],
    };
  },
}).mount("#app");
