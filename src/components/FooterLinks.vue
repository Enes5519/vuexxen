<template>
  <div class="footer-link">
    <h3 class="title">{{ title }}</h3>
    <div class="links" :class="directionClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    title: {
      type: String,
      required: true
    },
    column: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      directionClass: {
        'flex-column': this.column
      }
    };
  }
};
</script>

<style>
.footer-link {
  display: flex;
  flex-direction: column;
}

.flex-column {
  flex-direction: column;
}

.footer-link > .title {
  font-size: 14px;
  color: #9e9e9e;
  border-bottom: 1px solid #484848;
  padding-bottom: 6px;
}

.footer-link > .links {
  margin-top: 10px;
  display: flex;
}

.footer-link > .links > div {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
}

@media (max-width: 768px) {
  .footer-link > .links {
    flex-direction: column;
  }
}

.footer-link > .links a {
  font-size: 1rem;
  text-decoration: none;
  color: #9e9e9e;
  margin-bottom: 10px;
}
</style>
