// Initializing a new VueJS component
var vue = new Vue({
  // The css selector where the app will
  // be instantiated on the page
  el: '#signup',

  // Variables that you want it to have
  // access to within your view
  // and component functions.
  data: {

  },

  // When your component is initialized and the rendered dom is
  // put inside the component's element this function is
  // run allowing you to run any functions from
  // `methods` and access  `data`.
  ready: function() {
    // Load some content, run some initializing functions, or whatever.
    console.info('This component is ready for use!');

  },

  // All the methods you want the view
  // to have access to, basically
  // an object of functions.
  methods: {
    openReg: function() {
      var reg = document.getElementById("reg");
      reg.style.visibility = "visible";
    },
  }
});
