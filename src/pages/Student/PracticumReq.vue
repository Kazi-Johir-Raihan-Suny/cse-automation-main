<template>
  <div>
    <!-- Main content area -->
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
          <p v-if="eligibleForThesis">You are eligible for Practicum</p>
          <!-- Thesis Application Form -->
          <q-card class="Practicum-application-form">
            <q-card-section>
              <h4>Practicum Application</h4>
              <div class="input-space"></div>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your practicum application"
                placeholder="Submit your practicum application"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your placement letter"
                placeholder="Submit your placement letter"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>

              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your placement letter"
                placeholder="Submit your placement letter"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>

              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your Picture(300X300)"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>

              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your Resume"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your SSC Marksheet"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your HSC Marksheet"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your SSC Certificate"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>
              <q-input
                outlined
                v-model="thesisApplicationText"
                label="Attatch your HSC Certificate"
                placeholder="Submit your picture"
                input
                type="file"
                @change="handleFileUpload"
                accept=".pdf"
              ></q-input>

              <div class="button-container">
                <q-btn
                  label="ENROLL"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: "Redwan Hossain",
      studentID: "20203005",
      cgpa: 3.7,
      semester: 11,
      creditHoursCompleted: 140,
      eligibleForPracticum: true,
      PracticumApplicationText: "",
      applicationFile: null,
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
      console.log("Thesis Application Text:", this.thesisApplicationText);
      console.log("Application File:", this.applicationFile);
      console.log("Preferred Field:", this.preferredField);
      // You can submit the application data to the server here
    },
  },
};
</script>

<style scoped>
.header-title {
  color: #3f51b5; /* Indigo from the image */
}
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
.input-space {
  margin-top: 50px; /* Adjust the margin-top value to create space between input boxes */
}
</style>
