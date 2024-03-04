<template>
  <div class="allocate-teacher">
    <h2>Allocate Teacher</h2>
    <q-card class="allocate-card">
      <q-card-section class="select-section">
        <h4>Select Course</h4>
        <q-select
          v-model="selectedCourse"
          :options="courseOptions"
          label="Course"
          class="course-select"
        ></q-select>
      </q-card-section>
      <q-card-section class="select-section">
        <h4>Select Faculty</h4>
        <q-select
          v-model="selectedFaculty"
          :options="facultyOptions"
          label="Faculty"
          class="faculty-select"
        ></q-select>
      </q-card-section>
      <q-card-section class="select-section">
        <h4>Select Section</h4>
        <q-select
          v-model="selectedSection"
          :options="sectionOptions"
          label="Section"
          class="section-select"
        ></q-select>
      </q-card-section>
      <q-card-section class="select-section">
        <h4>Select Time</h4>
        <q-input v-model="selectedTime" label="Time" class="time-input" />
      </q-card-section>
      <q-card-section class="action-section">
        <q-btn
          label="Allocate"
          color="primary"
          @click="allocate"
          class="allocate-btn"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: null,
      selectedFaculty: null,
      selectedSection: null,
      selectedTime: "",
      courseOptions: [], // Populate with course options
      facultyOptions: [], // Populate with faculty options
      sectionOptions: [], // Populate with section options
    };
  },
  methods: {
    allocate() {
      // Implement allocation logic
      console.log("Allocating teacher...");
      console.log("Course:", this.selectedCourse);
      console.log("Faculty:", this.selectedFaculty);
      console.log("Section:", this.selectedSection);
      console.log("Time:", this.selectedTime);
    },
  },
};
</script>

<style scoped>
.allocate-teacher {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background-color: #f5f5f5; /* Light gray background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.allocate-card {
  width: 400px;
}

.select-section {
  margin-bottom: 20px;
}

.course-select,
.faculty-select,
.section-select {
  /* Consistent styling for all selects */
  width: 100%;
}

.time-input {
  /* Customize input styling */
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.action-section {
  /* Style the action section */
  display: flex;
  justify-content: flex-end;
}

.allocate-btn {
  /* Style the allocate button */
  background-color: #3f51b5; /* Indigo from previous example */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
