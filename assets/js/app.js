Vue.component('home-page', {
  template: '<p>This is the home page</p>'
  })

Vue.component('projects-page', {
  template: '<p>This is the projects page</p>'
  })

Vue.component('blogs-page', {
  template: '<p>This is the blogs page</p>'
  })

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello, this is going fine!",
    navItems: [
       {name : 'Home'},
       {name : 'Projects'},
       {name : 'Blogs'}
       ],
    currentPage: 'home'
    },
  methods: {
    changePage: function(pageName) {
      console.log(pageName);
      this.currentPage = pageName.toLowerCase();
      }
    }
  })
