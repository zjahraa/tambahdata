<template>
  <UserCreate />
  <UserList />
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'HomeView',
  components: { UserCreate, UserList }
}
</script>
