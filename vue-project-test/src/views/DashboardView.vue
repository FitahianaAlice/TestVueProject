<template>
    <div>
        <NavbarView />
        <TableView />
    </div>
</template>

<script>
import NavbarView from './NavbarView.vue';
import TableView from './TableView.vue';

export default {
  components: {
    NavbarView,
    TableView
  },
};
</script>