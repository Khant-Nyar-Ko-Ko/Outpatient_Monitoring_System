# Outpatient Monitoring System (OPD)

## Overview

The **Outpatient Monitoring System (OPD)** is designed to enhance healthcare management by enabling hospital staff to track and support patients requiring follow-up care after hospital visits. This system helps manage patient records, schedule appointments, and categorize patients based on their treatment status, ensuring timely follow-ups and continuous care.

## Key Features

- **Login and Sign Up**: Secure login and user registration to ensure authorized access.
- **Patient Management**: View, add, search, and manage patient details, including medical history and personal information.
- **Treatment Tracking**: Categorize patients as treated or untreated and track their treatment history.
- **Medical Records Entry**: Add and update patient medical records, including treatment details, diagnoses, and vital statistics.
- **Appointment Scheduling**: Seamless management of patient appointments, with the ability to reschedule or update as needed.
- **Data Export**: Export patient lists for record-keeping, reporting, or further analysis.
- **User Dashboard**: A centralized overview of patient statistics and condition-specific data for easy access and decision-making.

## User Roles

- **Admin**: The primary user responsible for managing patient data, adding and updating patient information, and overseeing system functions.

## Functional Requirements

1. **Login**: User authentication for system access.
2. **Sign Up**: Register new users (admins) with username, email, and password.
3. **Patient List**: View and manage a list of patient records.
4. **Add New Patient**: Add new patients by entering personal and contact information.
5. **Search Patient**: Search for specific patients using their name or ID.
6. **Categorize Patients**: Categorize patients into treated and untreated groups for follow-up purposes.
7. **Add Medical Record**: Enter and update treatment records, diagnoses, and patient medical history.
8. **Update Appointment**: Modify or reschedule patient appointments.
9. **Logout**: Securely log out of the system.

## Non-functional Requirements

- **Security**: Data encryption to protect sensitive patient information.
- **Usability**: User-friendly interfaces to ensure ease of navigation and efficient use of the system.
- **Performance**: Fast response times and support for multiple users accessing the system simultaneously.
- **Maintainability**: Modular codebase for easy updates, bug fixes, and feature additions.
- **Data Consistency**: Real-time synchronization of patient data to maintain consistency and accuracy.

## User Interface Details

- Login/Sign-Up Screens: Forms for user authentication and registration, with secure password handling.
- Dashboard: A summary page displaying patient statistics, treatment status, and quick links to other features.Patient
- Details Page: A detailed view of patient data, including personal information, medical history, and treatment records.
- Medical Record Entry: Interface to input and update medical treatment details for each patient.
- Appointment Management: Tools to view, schedule, and update patient appointments.

## Installation and Setup

1. Clone the repository:
`git clone https://github.com/yourusername/opd-monitoring-system.git`

2. Install dependencies:
`npm install`

3. Start the application:
`npm start`

Access the application at `http://localhost:3000`.

## Usage Guide

- Logging In: On the login page, enter your registered email and password to access the system.
- Adding a New Patient: From the dashboard, click the "Add Patient" button and complete the required form with patient details.
- Viewing Patient Details: Click the "Details" button next to any patient to view their full information, including medical records.
- Updating Appointments: From the patient's profile, select the "Update Appointment" option to change or reschedule the appointment.
- Logging Out: To log out, click the "Log Out" button located in the sidebar.

## Contact

Developed by:
- Khant Nyar Ko Ko : 6631503061
- La Yaung Chit    : 6631503064
- Lin Htet Aung    : 6631503065
- Thaung Than Han  : 6631503091
- Moe Myamyintzu   : 6631503128
  
For further assistance, please reach out to the development team.
- Email : 6631503091@lamduan.mfu.ac.th, 6631503061@lamduan.mfu.ac.th
