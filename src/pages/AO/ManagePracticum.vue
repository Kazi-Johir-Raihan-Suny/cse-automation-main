<template>
  <div class="manage-practicum">
    <h2>Manage Practicum Applications</h2>
    <q-card class="application-list-card">
      <q-card-section>
        <h4>Practicum Applications List</h4>
        <q-list bordered separator>
          <q-item
            v-for="(application, index) in practicumApplications"
            :key="index"
            clickable
          >
            <q-item-section>
              <q-item-label class="primary-color">{{
                application.studentName
              }}</q-item-label>
              <q-item-label caption>
                ID: {{ application.studentID }} - Semester:
                {{ application.semester }}
              </q-item-label>
              <q-item-label caption>
                CGPA: {{ application.cgpa }} - Credit Hours Completed:
                {{ application.creditHoursCompleted }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                :color="application.supervisorAllocated ? 'grey' : 'primary'"
                :label="
                  application.supervisorAllocated
                    ? 'Supervisor Allocated'
                    : 'Allocate Supervisor'
                "
                @click="allocateSupervisor(application)"
                :disable="application.supervisorAllocated"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      practicumApplications: [],
    };
  },
  methods: {
    allocateSupervisor(application) {
      // Implement supervisor allocation logic for the chosen application
      console.log("Allocating supervisor for:", application);
      // Notify teacher and student about allocation
      application.supervisorAllocated = true; // Update application state
    },
  },
};
</script>

<style scoped>
.manage-practicum {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.application-list-card {
  width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.q-item-label {
  font-weight: normal;
}

.q-item-label:first-child {
  font-weight: bold;
}

.primary-color {
  color: #3f51b5;
}
</style>
