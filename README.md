# Management App

Management App is a real‑time project management and communication platform built with Django, Django REST Framework, and Django Channels on the backend and React on the frontend. The application supports user authentication with JWT, live notifications via WebSockets, and a fully responsive admin interface for managing projects, tasks, clients, and users.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [WebSockets & Real-Time Notifications](#websockets--real-time-notifications)
- [Models](#models)
- [Serializers & API Endpoints](#serializers--api-endpoints)
- [Installation & Setup](#installation--setup)
  - [Local Development](#local-development)
  - [Using Docker & Docker Compose](#using-docker--docker-compose)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

Management App is designed to streamline project workflows, allowing teams to collaborate on projects, track employees tasks and vacations, and receive real‑time notifications. With a robust backend powered by Django and Django Channels, the application supports live updates and asynchronous communication, while the modern React-based frontend ensures a smooth user experience.

---

## Features

- **Real-Time Notifications:** Receive instant notifications for new tasks, vacation requests, project status updates, and more via WebSockets.
- **JWT Authentication:** Secure access using JSON Web Tokens.
- **RESTful API:** CRUD operations for users, projects, tasks, and notifications.
- **Custom Admin Panel:** Built with Django Admin enhanced by Jazzmin for a modern look.
- **Responsive Frontend:** Developed with React and Material-UI for an intuitive user interface.
- **Dockerized Deployment:** Easily deployable using Docker and Docker Compose.

---

## Architecture
  ```bash
  Management
  |   .env
  |   .gitattributes
  |   .gitignore
  |   docker-compose.yml
  |   README.md
  |   
  +---backend
  |   |   .gitignore
  |   |   Dockerfile
  |   |   manage.py
  |   |   requirements.txt
  |   |   
  |   +---api
  |   |   |   admin.py
  |   |   |   apps.py
  |   |   |   consumers.py
  |   |   |   middleware.py
  |   |   |   permissions.py
  |   |   |   routing.py
  |   |   |   signals.py
  |   |   |   tests.py
  |   |   |   urls.py
  |   |   |   __init__.py
  |   |   |   
  |   |   +---decorators
  |   |   |       permission_decorator.py
  |   |   |       __init__.py
  |   |   |       
  |   |   +---migrations
  |   |   |       0001_initial.py
  |   |   |       __init__.py
  |   |   |       
  |   |   +---models
  |   |   |       client.py
  |   |   |       notification.py
  |   |   |       phase.py
  |   |   |       post.py
  |   |   |       project.py
  |   |   |       task.py
  |   |   |       user.py
  |   |   |       vacation.py
  |   |   |       __init__.py
  |   |   |       
  |   |   +---notification
  |   |   |       notification_manager.py
  |   |   |       notification_variables.py
  |   |   |       __init__.py
  |   |   |
  |   |   +---serializers
  |   |   |       client_serializer.py
  |   |   |       notification_serializer.py
  |   |   |       phase_serializer.py
  |   |   |       post_serializer.py
  |   |   |       project_serializer.py
  |   |   |       register_serializer.py
  |   |   |       restricted_user_serializer.py
  |   |   |       task_serializer.py
  |   |   |       user_serializer.py
  |   |   |       vacation_serializer.py
  |   |   |       __init__.py
  |   |   |
  |   |   \---views
  |   |           client_viewset.py
  |   |           current_user_view.py
  |   |           notification_viewset.py
  |   |           phase_viewset.py
  |   |           post_viewset.py
  |   |           project_viewset.py
  |   |           register_view.py
  |   |           task_viewset.py
  |   |           user_viewset.py
  |   |           vacation_viewset.py
  |   |           __init__.py
  |   |
  |   +---management
  |   |       asgi.py
  |   |       settings.py
  |   |       urls.py
  |   |       wsgi.py
  |   |       __init__.py
  |   |
  |   +---media
  |   \---staticfiles
  \---frontend
      |   .gitignore
      |   Dockerfile
      |   nginx.conf
      |   package-lock.json
      |   package.json
      |   README.md
      |
      +---public
      |       favicon.ico
      |       index.html
      |       logo192.png
      |       logo512.png
      |       manifest.json
      |       robots.txt
      |
      \---src
          |   App.css
          |   App.js
          |   App.test.js
          |   Axios.js
          |   axiosConfig.js
          |   fileUrl.js
          |   index.css
          |   index.js
          |   logo.svg
          |   reportWebVitals.js
          |   setupTests.js
          |
          +---components
          |   +---AboutModule
          |   |       About.js
          |   |
          |   +---ClientsModule
          |   |   |   Clients.js
          |   |   |
          |   |   +---api
          |   |   |       clientsApi.js
          |   |   |
          |   |   +---components
          |   |   |   +---Dialogs
          |   |   |   |       ClientEditDialog.js
          |   |   |   |       ClientInfoDialog.js
          |   |   |   |
          |   |   |   \---Tabs
          |   |   |           AddClientTab.js
          |   |   |           ClientsListTab.js
          |   |   |
          |   |   \---hooks
          |   |           useClientsData.js
          |   |
          |   +---HomeModule
          |   |       Home.js
          |   |
          |   +---images
          |   |       logo_ps.png
          |   |
          |   +---LayoutModule
          |   |       AccountMenu.js
          |   |       Footer.js
          |   |       NavBar.js
          |   |
          |   +---LoginModule
          |   |       Login.js
          |   |
          |   +---ProfileModule
          |   |   |   Profile.js
          |   |   |
          |   |   +---api
          |   |   |       profileApi.js
          |   |   |
          |   |   +---components
          |   |   |   +---Dialogs
          |   |   |   |       EditPasswordDialog.js
          |   |   |   |
          |   |   |   \---Tabs
          |   |   \---hooks
          |   |           useProfileData.js
          |   |
          |   +---ProjectsModule
          |   |   |   Projects.js
          |   |   |
          |   |   +---api
          |   |   |       projectsApi.js
          |   |   |
          |   |   +---components
          |   |   |   +---Dialogs
          |   |   |   |       PhaseAddDialog.js
          |   |   |   |       PhaseDeleteDialog.js
          |   |   |   |       PhaseInfoDialog.js
          |   |   |   |       PhaseUpdateDialog.js
          |   |   |   |       ProjectDeleteDialog.js
          |   |   |   |       ProjectEditDialog.js
          |   |   |   |       ProjectInfoDialog.js
          |   |   |   |
          |   |   |   \---Tabs
          |   |   |           AddProjectTab.js
          |   |   |           ProjectsListTab.js
          |   |   |
          |   |   \---hooks
          |   |           useProjectsData.js
          |   |
          |   +---ReinforcementDimModule
          |   |       ReinforcementDimensioning.js
          |   |       reinforcement_calculations.js
          |   |
          |   +---SlicingModule
          |   |       Slicing.js
          |   |       slicing_calculations.js
          |   |
          |   +---TasksModule
          |   |   |   Tasks.js
          |   |   |   
          |   |   +---api
          |   |   |       tasksApi.js
          |   |   |
          |   |   +---components
          |   |   |   |   Variables.js
          |   |   |   |
          |   |   |   +---Calendar
          |   |   |   |       Backup.js
          |   |   |   |       Calendar.css
          |   |   |   |       Calendar.js
          |   |   |   |
          |   |   |   +---Dialogs
          |   |   |   |       AddPostDialog.js
          |   |   |   |       AddVacationDialog.js
          |   |   |   |       DeletePostDialog.js
          |   |   |   |       DeleteTaskDialog.js
          |   |   |   |       PostEditDialog.js
          |   |   |   |       PostInfoDialog.js
          |   |   |   |       TaskEditDialog.js
          |   |   |   |       TaskInfoDialog.js
          |   |   |   |       VacationEditDialog.js
          |   |   |   |       VacationInfoDialog.js
          |   |   |   |
          |   |   |   \---Tabs
          |   |   |           AddTaskTab.js
          |   |   |           CalendarTab.js
          |   |   |           TasksListTab.js
          |   |   |
          |   |   \---hooks
          |   |           useTasksData.js
          |   |
          |   +---UsersModule
          |   |   |   Users.js
          |   |   |
          |   |   +---api
          |   |   |       usersApi.js
          |   |   |
          |   |   +---components
          |   |   |   |   Variables.js
          |   |   |   |
          |   |   |   +---Dialogs
          |   |   |   |       UserEditDialog.js
          |   |   |   |       UserInfoDialog.js
          |   |   |   |
          |   |   |   \---Tabs
          |   |   |           AddUserTab.js
          |   |   |           UsersListTab.js
          |   |   |
          |   |   \---hooks
          |   |           useUsersData.js
          |   |
          |   \---utils
          |           const_variables.js
          |
          \---theme
                  colors.js
  ```

### Backend

- **Framework:** Django 5.x with Django REST Framework.
- **Authentication:** Simple JWT for access/refresh token management.
- **Real-Time Communication:** Django Channels is used to manage WebSocket connections for live notifications.
- **Custom User Model:** The application uses a custom `User` model (in `api.User`) to support roles (e.g., Boss, Employee) and other custom fields.
- **Static & Media Files:** Static files are collected into a directory (`staticfiles`) and media (e.g., user-uploaded images) are served from the `/media/` URL.

### Frontend

- **Framework:** React (bootstrapped with Create React App).
- **UI Library:** Material-UI (MUI) is used for responsive components and theming.
- **HTTP Client:** Axios is used for making API calls, with interceptors handling JWT token refresh.
- **Notifications:** The NavBar component listens for incoming WebSocket messages and updates the notifications dropdown.

### WebSockets & Real-Time Notifications

- **WebSocket Endpoint:** Exposed at `/ws/notifications/` via Django Channels.
- **Token Authentication:** A custom middleware decrypts a token generated by the API (`/notifications/get_ws_token/`) to authenticate WebSocket connections.
- **Live Updates:** Upon creation of a new notification (e.g., when a task is created), a signal triggers the sending of the notification to the connected user's WebSocket group.

---

## Models

### User Model

- **Location:** `api/models.py`
- **Description:** A custom user model that extends Django’s AbstractUser to include a unique `user_id` and a `role` field (e.g., Boss, Employee). This field is used to determine access levels for notifications and administration features.

### Notification Model

- **Location:** `api/models.py`
- **Fields:**
  - `notification_id` – A unique identifier for the notification.
  - `recipient` – A ForeignKey linking to the custom User model.
  - `type` – A string indicating the type of notification (e.g., `TASK`, `PROJECT`, `VACATION`).
  - `title` – A brief title for the notification.
  - `message` – Detailed message content.
  - `is_read` – Boolean flag to indicate if the notification has been read.
  - `created_at` – Timestamp of notification creation.
- **Usage:** Notifications are created via backend signals (see `signals.py`) when related objects (like tasks or projects) are updated.

### Additional Models

Depending on your implementation, you might also have:
- **Project Model:** To manage project details.
- **Task Model:** To manage tasks within projects.
- **Client Model:** To store client information.
- **Phase:** To manage project phases.
- **Post:** To manage daily updates for tasks.
- **Vacation:** To manage employees vacation requests.

---

## Serializers & API Endpoints

### Serializers

- **NotificationSerializer:** Serializes the Notification model. Located in `api/serializers.py`.
- **UserSerializer:** Serializes the custom User model.
- **Remaining Serializers:** For projects, tasks, clients, phases, post, vacations .

## API Endpoints

Below is a list of the available API endpoints grouped by functionality.

### Admin & Authentication
- **Admin Panel:**  
  `/admin/`
- **Register User:**  
  `POST /api/register/`
- **Current User:**  
  `GET /api/users/me/`
- **Obtain JWT Token:**  
  `POST /api/token/`
- **Refresh JWT Token:**  
  `POST /api/token/refresh/`
- **Verify JWT Token:**  
  `POST /api/token/verify/`

### Notifications
- **Get WebSocket Token:**  
  `GET /api/notifications/get_ws_token/`
- **Notifications List:**  
  `GET /api/notifications/`
- **Notification Detail:**  
  `GET /api/notifications/<pk>/`
- **Mark Notification as Read:**  
  `PATCH /api/notifications/<pk>/mark-read/`

### Projects
- **Projects List:**  
  `GET /api/projects/`
- **Project Detail:**  
  `GET /api/projects/<pk>/`

### Tasks
- **Tasks List:**  
  `GET /api/tasks/`
- **Task Detail:**  
  `GET /api/tasks/<pk>/`

### Phases
- **Phases List:**  
  `GET /api/phases/`
- **Phase Detail:**  
  `GET /api/phases/<pk>/`

### Posts
- **Posts List:**  
  `GET /api/posts/`
- **Post Detail:**  
  `GET /api/posts/<pk>/`

### Clients
- **Clients List:**  
  `GET /api/clients/`
- **Client Detail:**  
  `GET /api/clients/<pk>/`

### Users
- **Users List:**  
  `GET /api/users/`
- **Change Password:**  
  `POST /api/users/change_password/`
- **Upload Profile Picture:**  
  `POST /api/users/upload_profile_picture/`
- **User Detail:**  
  `GET /api/users/<pk>/`

### Vacations
- **Vacations List:**  
  `GET /api/vacations/`
- **Vacations by Group:**  
  `GET /api/vacations/group/<group_id>/`
- **Vacation Detail:**  
  `GET /api/vacations/<pk>/`

### API Root
- **API Root:**  
  `GET /api/`

### Media Files
- **Media:**  
  _Pattern for serving media files:_  
  `GET /media/<path>`

---

> **Note:**  
> All endpoints support an optional format suffix (e.g., `.json`, `.xml`) where indicated.  
> Ensure that you include the proper JWT token in the `Authorization` header for secured endpoints.
> There are also custom permissions depending on user role.

---

## Local Development

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AdrianSajdak/Management.git
