import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";
import Skill from "@/views/Skill.vue";
import Contact from "@/views/contact/Contact.vue";
import Show from "@/views/Show.vue";
import Experience from "@/views/Experience.vue";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/'  ,
      name: 'home',
      component: Home
    },{
      path: '/home'  ,
      name: 'home',
      component: Home
    },
    {
      path: '/about'  ,
      name: 'about',
      component: About
    }, 
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    }, 
    {
      path:'/show',
      name:'show',
      component: Show
    }, 
    {
      path:'/experience',
      name:'experience',
      component: Experience
    }
  ]
});
