Vue.component('home-page', {
  data: function() {
    return {
      skills: [
        { name: 'Python',
          description: 'I tried Python in 2016 and I am in love with it ever since.',
          image: 'assets/static/images/python.png' },
        { name: 'Node',
          description: 'Started using it just for fun. It continues to amaze me.',
          image: 'assets/static/images/node.png'},
        { name: 'DS and Algo',
          description: 'In the world of computer science you never know enough of these.',
          image: 'assets/static/images/ds_algo.png'},
        { name: 'Backend',
          description: 'The thing I like to engage with the most. It\'s all backend.',
          image: 'assets/static/images/default.png'},
        { name: 'Frontend',
          description: 'I also like to build cool frontend like this one. Believe it!!',
          image: 'assets/static/images/default.png'}
      ]
    }
    }  
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
