<script setup lang="ts">
import SkillItem from './SkillItem.vue'

const yearsOfExperience: number = new Date().getFullYear() - 1998
const javaExperience: number = new Date().getFullYear() - 2007
</script>

<template>
  <div id="tweet">
    <div class="container">
      <section>
        <blockquote>&ldquo;Keep it simple&rdquo;</blockquote>
      </section>
    </div>
  </div>

  <header>
    <h2>Welcome to Gundmann Consulting</h2>
  </header>
  <p>
    I am an independent fulle stack developer with more than {{ yearsOfExperience }} years of
    experience
  </p>
  <p>I have thorough experience with these technologies and methods:</p>
  <hr />
  <div class="skills">
    <SkillItem
      title="Continuous Delivery"
      description="Have set up several systems with automated pipeline for build, test and deployments"
      link="https://en.wikipedia.org/wiki/Continuous_delivery"
    >
      <span class="fa fa-play-circle-o" />
    </SkillItem>
    <SkillItem
      title="Vue 3"
      description="Have built several applications with Vue.js"
      link="https://vuejs.org"
    >
      <img class="icon" src="@/assets/images/Vue.svg" />
    </SkillItem>
    <SkillItem
      title="TypeScript"
      description="Have built several applications with TypeScript"
      link="https://www.typescriptlang.org"
    >
      <img class="icon" src="@/assets/images/Ts.svg" />
    </SkillItem>
    <SkillItem
      title="Angular"
      description="Have build applications with Angular version 2+"
      link="https://angular.io"
    >
      <img class="icon" src="@/assets/images/Angular.svg" />
    </SkillItem>
    <SkillItem
      title="Spring Boot"
      description="Have built several applications with Spring Boot since version 1.0"
      link="https://spring.io/projects/spring-boot"
    >
      <img class="icon" src="@/assets/images/Sp.svg" />
    </SkillItem>
    <SkillItem
      title="Java"
      :description="`More than ${javaExperience} years of experience with Java building frontend and backend applications`"
      link="https://www.java.com"
    >
      <img class="icon" src="@/assets/images/Java.svg" />
    </SkillItem>
  </div>
</template>
<style lang="css">
.icon {
  display: inline-block;
  font-size: 1.25em;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 80px;
  height: 80px;
  margin-top: -13px;
  margin-bottom: -3px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
