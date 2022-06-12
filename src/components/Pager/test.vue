<template>
  <div>
    <Pager :current="current" :total="300" @pageChange="handlepageChange($event)" />
  </div>
</template>

<script>
import Pager from "./"

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 3,
    }
  },
  methods: {
    handlepageChange(newPage) {
      this.current = newPage;
    }
  }
}
</script>