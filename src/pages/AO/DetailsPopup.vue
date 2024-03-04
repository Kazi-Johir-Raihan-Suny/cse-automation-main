<template>
  <q-dialog v-model="visible" ref="detailsPopup">
    <q-card>
      <q-card-section>
        <div class="details">
          <p><strong>Student Name:</strong> {{ selectedRequest.name }}</p>
          <p><strong>Batch:</strong> {{ selectedRequest.batch }}</p>
          <p><strong>Date:</strong> {{ selectedRequest.date }}</p>
          <p><strong>Current Status:</strong> {{ selectedRequest.status }}</p>
          <q-select v-model="selectedStatus" :options="statusOptions" label="Update Status" />
          <q-input v-model="comment" type="textarea" label="Comment" maxlength="255" />
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat label="Cancel" @click="visible = false" />
        <q-btn label="Save" @click="saveChanges" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    selectedRequest: {
      type: Object,
      required: true,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      selectedStatus: this.selectedRequest.status,
      comment: "",
    };
  },
  methods: {
    saveChanges() {
      // Logic to save updated status and comment
      // You can emit an event to notify the parent component
      this.$emit('update-request', {
        id: this.selectedRequest.id,
        status: this.selectedStatus,
        comment: this.comment,
      });
      this.visible = false; // Close the pop-up
    },
  },
};
</script>

<style scoped>
/* Add y CSS styles here */
/* Customize as needed */
</style>
