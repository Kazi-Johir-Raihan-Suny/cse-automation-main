<template>
  <q-page>
    <!-- Drawer -->
    <q-drawer
      v-model="drawer"
      show-if-above
      side="right"
      :content-class="['drawer-content']"
    >
      <div class="drawer-header">
        <q-avatar
          v-on:click="drawer = !drawer"
          color="primary"
          text-color="white"
        >
          {{ studentName.charAt(0) }}
        </q-avatar>
        <h3>{{ studentName }}</h3>
        <p>ID: {{ studentID }}</p>
      </div>
      <q-btn flat label="Sign Out" color="negative" @click="signOut" />
    </q-drawer>

    <!-- Course Card -->
    <q-card class="course-card">
      <q-card-section>
        <h4>Select Courses</h4>
        <div class="course-selectors">
          <q-select
            v-model="selectedCourseCode"
            :options="filteredCourseCodes"
            label="Course Code"
            placeholder="Search or Select Course Code"
            emit-value
            map-options
            @input="updateSelectedCourse"
          ></q-select>
          <q-input
            v-model="selectedCourseName"
            label="Course Title"
            disabled
          ></q-input>
          <q-input
            v-model="selectedCreditHours"
            label="Credit Hours"
            disabled
          ></q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="addCourse" :disable="!selectedCourseCode"
          >Add Course</q-btn
        >
      </q-card-actions>
    </q-card>

    <!-- Course Table -->
    <q-table
      :rows="selectedCourses"
      :columns="tableColumns"
      class="course-table"
    >
      <template v-slot:body-cell-remarks="props">
        <q-input
          v-model="props.row.remarks"
          @input="updateRemarks(props.row)"
        />
      </template>
    </q-table>

    <!-- Submit Button -->
    <q-btn
      @click="submitSelection"
      :disable="selectedCourses.length === 0"
      class="submit-btn"
      >Submit</q-btn
    >
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      studentName: "Johir Raihan",
      studentID: "20203022",
      courseCodes: [
        {
          code: "CSC101",
          name: "Introduction to Computer Science",
          creditHours: 3,
        },
        { code: "MAT101", name: "Calculus I", creditHours: 4 },
        // Add more courses as needed
      ],
      filteredCourseCodes: [],
      selectedCourseCode: "",
      selectedCourseName: "",
      selectedCreditHours: "",
      selectedCourses: [],
      search: "",
    };
  },
  computed: {
    tableColumns() {
      return ["courseCode", "courseName", "creditHours", "remarks"];
    },
  },
  methods: {
    signOut() {
      console.log("Signing out...");
      // Implement sign out logic here (clear user session, redirect to login page, etc.)
    },
    updateSelectedCourse() {
      const selectedCourse = this.courseCodes.find(
        (course) => course.code === this.selectedCourseCode
      );
      if (selectedCourse) {
        this.selectedCourseName = selectedCourse.name;
        this.selectedCreditHours = selectedCourse.creditHours;
      }
    },
    addCourse() {
      if (this.selectedCourseCode) {
        this.selectedCourses.push({
          courseCode: this.selectedCourseCode,
          courseName: this.selectedCourseName,
          creditHours: this.selectedCreditHours,
          remarks: "",
        });
        this.clearSelectedCourseDetails();
      }
    },
    clearSelectedCourseDetails() {
      this.selectedCourseCode = "";
      this.selectedCourseName = "";
      this.selectedCreditHours = "";
    },
    updateRemarks(row) {
      // Find the index of the row in the selectedCourses array
      const rowIndex = this.selectedCourses.findIndex(
        (course) => course.courseCode === row.courseCode
      );

      // If the row index is found
      if (rowIndex !== -1) {
        // Update the remarks for the specific row
        this.selectedCourses[rowIndex].remarks = row.remarks;
      }
    },

    submitSelection() {
      // Assuming you are using axios for making HTTP requests
      axios
        .post("/submit-courses", this.selectedCourses)
        .then((response) => {
          // Handle successful submission
          console.log("Courses submitted successfully:", response.data);
          // Optionally, you can reset the selectedCourses array
          this.selectedCourses = [];
        })
        .catch((error) => {
          // Handle errors
          console.error("Error submitting courses:", error);
        });
    },
    filterCourses() {
      this.filteredCourseCodes = this.courseCodes.filter((course) => {
        return (
          course.code.toLowerCase().includes(this.search.toLowerCase()) ||
          course.name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  watch: {
    search(newValue) {
      if (newValue !== "") {
        this.filterCourses();
      } else {
        this.filteredCourseCodes = this.courseCodes;
      }
    },
  },
  created() {
    // Initialize default values
    if (this.courseCodes.length > 0) {
      this.selectedCourseCode = this.courseCodes[0].code;
      this.selectedCourseName = this.courseCodes[0].name;
      this.selectedCreditHours = this.courseCodes[0].creditHours;
    }
    // Populate filtered course codes with all course codes
    this.filteredCourseCodes = this.courseCodes;
    // Optionally, you can add the default course to the selected courses
    // this.addCourse();
  },
};
</script>

<style scoped>
.drawer-content {
  padding: 20px;
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drawer-header h3 {
  margin-left: 10px;
  margin-bottom: 0;
}
.course-card {
  margin-bottom: 20px;
}
.course-selectors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.course-selectors q-select,
.course-selectors q-input {
  flex-grow: 1;
  margin-bottom: 10px;
}
.course-table {
  margin-bottom: 20px;
}
.submit-btn {
  float: right;
}
</style>
