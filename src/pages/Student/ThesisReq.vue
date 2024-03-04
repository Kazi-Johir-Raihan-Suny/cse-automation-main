<template>
  <q-page-container class="q-pa-md">
    <div class="content">
      <!-- Student Information -->
      <div class="student-info">
        <h2>{{ studentName }}</h2>
        <p>ID: {{ studentID }}</p>
        <p>CGPA: {{ cgpa }}</p>
        <p>Semester: {{ semester }}</p>
        <p>Credit Hours Completed: {{ creditHoursCompleted }}</p>
      </div>

      <!-- Additional Information -->
      <div class="additional-info">
        <p v-if="eligibleForThesis">You are eligible for thesis.</p>

        <!-- Thesis Application Form -->
        <q-card class="thesis-application-form">
          <q-card-section>
            <h4>Thesis Application</h4>
            <q-input
              outlined
              v-model="thesisTopic"
              label="Thesis Topic"
              placeholder="Enter your thesis topic"
            ></q-input>

            <q-select
              label="Preferred Field"
              v-model="preferredField"
              :options="fieldOptions"
              placeholder="Select preferred field"
            ></q-select>

            <q-input
              outlined
              v-model="applicationFile"
              placeholder="Upload your application"
              input
              type="file"
              @change="handleFileUpload"
              accept=".pdf"
            ></q-input>

            <div class="button-container">
              <q-btn
                label="Submit"
                color="primary"
                @click="submitThesisApplication"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
        <!-- End of Thesis Application Form -->
      </div>
    </div>
  </q-page-container>
</template>

<script>
export default {
  data() {
    return {
      studentName: "Johir Raihan",
      studentID: "20203022",
      cgpa: 3.5,
      semester: 6,
      creditHoursCompleted: 90,
      eligibleForThesis: true,
      thesisTopic: "",
      applicationFile: null,
      preferredField: "",
      fieldOptions: ["Machine Learning", "IO", "AI"], // Add your field options here
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.applicationFile = file;
      }
    },
    submitThesisApplication() {
      // Implement thesis application submission logic
      console.log("Thesis Topic:", this.thesisTopic);
      console.log("Preferred Field:", this.preferredField);
      console.log("Application File:", this.applicationFile);
      // You can submit the application data to the server here
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.student-info {
  text-align: center;
  margin-bottom: 20px;
}

.additional-info {
  margin-top: 30px;
  font-size: large;
}

.thesis-application-form {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.button-container {
  margin-top: 40px;
}

/* Color Options */
.primary-color {
  color: #3f51b5; /* Indigo */
}

.primary-color-light {
  color: #7986cb; /* Light Indigo */
}

.secondary-color {
  color: #f06292; /* Pink */
}

.secondary-color-light {
  color: #ffccbc; /* Light Pink */
}

.success-color {
  color: #4caf50; /* Green */
}

.success-color-light {
  color: #81c784; /* Light Green */
}

.error-color {
  color: #f44336; /* Red */
}

.error-color-light {
  color: #e57373; /* Light Red */
}
</style>
