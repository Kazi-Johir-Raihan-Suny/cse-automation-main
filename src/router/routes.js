let routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/Auth/LoginPage.vue") },
      {
        path: "allreq",
        component: () => import("pages/AO/AllRequests_AO.vue"),
      },
      {
        path: "teachers",
        component: () => import("pages/AO/TeachersList.vue"),
      },
      {
        path: "students",
        component: () => import("pages/AO/StudentsList.vue"),
      },
      {
        path: "routine",
        component: () => import("pages/AO/CourseRoutine .vue"),
      },
      {
        path: "allocatefac",
        component: () => import("pages/AO/AllocateTeacher.vue"),
      },
      {
        path: "Routines",
        component: () => import("pages/AO/ViewRoutine.vue"),
      },
      {
        path: "Thesisalloc",
        component: () => import("pages/AO/Admin_Thesis_Application.vue"),
      },
      {
        path: "ManagePracticum",
        component: () => import("pages/AO/ManagePracticum.vue"),
      },
      {
        path: "CourseManage",
        component: () => import("pages/AO/CourseManage.vue"),
      },
      {
        path: "noticeupdate",
        component: () => import("pages/AO/UpdateNotice.vue"),
      },
    ],
  },

  {
    path: "/student",
    component: () => import("layouts/StudentLayout.vue"),
    children: [
      {
        path: "newreq",
        name: "newRequest",
        component: () => import("pages/Student/NewRequest_STU.vue"),
      },

      {
        path: "addreq",
        component: () => import("pages/Student/addDropRequests.vue"),
      },
      {
        path: "thesisreq",
        component: () => import("pages/Student/ThesisReq.vue"),
      },
      {
        path: "practicumreq",
        component: () => import("pages/Student/PracticumReq.vue"),
      },
      {
        path: "semesterdrop",
        component: () => import("pages/Student/SemesterDropReq.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
