<template>
  <div class="view-routine">
    <h2>View Routine</h2>
    <q-card class="routine-card">
      <q-card-section>
        <h4>Course Routine</h4>
        <q-table :rows="routine" :columns="columns" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routine: [], // Populate with routine data
      columns: ["Course", "Faculty", "Section", "Time"], // Columns for the table
    };
  },
};
</script>

<style scoped>
.view-routine {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.routine-card {
  width: 600px;
}
</style>
