import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { Loader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  //Add a New Job
  const addJob = async (newJob) => {
    await fetch("api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete an existing Job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //Update Job
  const updateJob = async (editedJob) => {
    console.log(editedJob.id);
    await fetch(`/api/jobs/${editedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/edit-jobs/:id"
          element={<EditJobPage updateJob={updateJob} />}
          loader={Loader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={Loader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
