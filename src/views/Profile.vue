<template>
  <div class="profile">
    <div class="profile-card">
      <img class="profile-pic" src="../assets/images/profile-pic.jpg" :alt="$t('Profile.profile-pic-alt')" />
      <div class="profile-info">
        <h1>Tobias Hölzer</h1>
        <h6>{{ $t('Profile.job') }}</h6>
        <hr />
        <p>{{ `${age} ${$t('Profile.age')} | ${$t('Profile.lives')}` }}</p>
        <p class="profile-emails">
          <a href="mailto:tobiashoelzer@hotmail.com">tobiashoelzer@hotmail.com</a> |
          <a href="mailto:tobias.hoelzer@ibm.com">tobias.hoelzer@ibm.com</a>
        </p>
        <div class="profile-social">
          <a href="https://github.com/relativityhd" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://de.linkedin.com/in/tobias-h%C3%B6lzer-281b72193" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://medium.com/@tobiast.h.50" target="_blank">
            <MediumIcon />
          </a>
          <a href="https://twitter.com/tobiashoelzer" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://ibmdach.slack.com/team/WND3T9LEQ" target="_blank">
            <SlackIcon />
          </a>
        </div>
      </div>
    </div>
    <div class="profile-about">
      <h3 class="profile-welcome">{{ $t('Profile.welcome') }}</h3>
      <br />
      <h6>{{ $t('Profile.middleSchool.title') }}</h6>
      <p>{{ $t('Profile.middleSchool.text') }}</p>
      <br />
      <h6>{{ $t('Profile.highSchool.title') }}</h6>
      <p>{{ $t('Profile.highSchool.text') }}</p>
      <br />
      <h6>{{ $t('Profile.university.title') }}</h6>
      <p>{{ $t('Profile.university.text') }}</p>
    </div>
  </div>
</template>

<script>
import GitHubIcon from '@carbon/icons-vue/es/logo--github/32'
import LinkedInIcon from '@carbon/icons-vue/es/logo--linkedin/32'
import MediumIcon from '@carbon/icons-vue/es/logo--medium/32'
import TwitterIcon from '@carbon/icons-vue/es/logo--twitter/32'
import SlackIcon from '@carbon/icons-vue/es/logo--slack/32'

export default {
  name: 'Profile',
  components: { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, SlackIcon },
  data() {
    var ageDifMs = Date.now() - new Date(2001, 1, 16).getTime()
    var ageDate = new Date(ageDifMs)
    return {
      age: Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  }
}
</script>
<style lang="scss">
.profile {
  width: 98%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-about {
  margin-top: 50px;
}

.profile-card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-info {
  min-width: 300px;
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-social {
  margin-top: 4px;
}

.profile-social a,
.profile-social a:visited,
.profile-emails a,
.profile-emails a:visited {
  color: $text-01 !important;
}

.profile-social a:hover,
.profile-emails a:hover {
  opacity: 0.5 !important;
}

.profile-welcome::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  margin-top: 2px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel 60s infinite;
  animation: colorWheel 60s infinite;
}
</style>
