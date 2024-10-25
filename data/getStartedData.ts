// app/data/getStartedData.ts
export interface Step {
  id: number;
  title: string;
  description: string[];
}

export const getStartedSteps: Step[] = [
  {
    id: 1,
    title: "Register for an Account",
    description: [
      "1. **Visit the Website:** Go to [mq.dk-lab.xyz](https://mq.dk-lab.xyz).",
      "2. **Create Your Account:** Click the **Register** button located at the top right corner of the homepage. A registration page will appear; click on the **Register** tab if you’re not already there.",
      "3. **Fill in the Registration Form:** Complete the form, selecting the role you wish to test: **Teacher** or **Student**.",
      "   - **Important Note:** If you want to test the **Student** role, ensure that you or one of your classmates has already registered as a **Teacher**, created a course, uploaded materials, and shared the course joining code with you.",
      "4. **Log into Your Profile:** After registration, log in using the username and password you created.",
    ],
  },
  {
    id: 2,
    title: "Create and Manage a Course",
    description: [
      "1. **Access Your Dashboard:** Once logged in, look to the left side of your screen to find the sidebar. You will see an icon that looks like a piece of paper. Click on that.",
      "2. **Create a New Course:** Click on **Add Course**. A form will appear where you should input the following: **Course Name**, **Course Number**, **Course Description**, **Image URL** (if you’d like to display a course image). Fill out all these and submit to create your course.",
    ],
  },
  {
    id: 3,
    title: "Add or Remove Course Materials",
    description: [
      "1. **Navigate to Your Course:** After creating your course, it will appear on your dashboard. You’ll notice a gear-like icon at the bottom left of the course card. Click on that icon to open more options.",
      "2. **Select Add/Remove Materials:** A menu will pop up. From the options, choose **Add/Remove Materials** to begin uploading files and organizing your course content.",
      "3. **Create or Select an Agent:** At the top of the File Manager, click on the blue dropdown. Select **Create a New Agent**. This allows you to create agents with similar course settings and materials that can be used across different courses.",
      "4. **Choose the Mode for the Agent:**",
      "   - **Practice Mode:** Provides students with hints but not full answers. Useful for guiding students through problem-solving.",
      "   - **Review Mode:** Offers students full answers, ideal for reviewing completed assignments or studying course material before exams.",
      "   - **Note 1:** Course-related documents like the syllabus can be exempt from these modes if the instructor chooses. During the upload process, there is an option to determine that.",
      "   - **Note 2:** You can always access this option and change the mode.",
      "5. **Upload Files:** Click on **Upload File**. You can either drag and drop the files into the upload area or click to browse files on your computer. After uploading each file, click **Submit** to finalize your additions.",
    ],
  },
  {
    id: 4,
    title: "Invite Students and TAs Using the Roster",
    description: [
      "1. **Generate a Course Invitation Code:** If you’re an instructor, you can generate an invitation code for students to join. Navigate to the course, click on the gear icon at the bottom left of the course card, and choose the **Roster** option.",
      "2. You’ll see an option to **Enable Invitation Code**. Once enabled, a code will be generated automatically, which you can copy and share with students.",
      "3. **Join a Course as a Student:** If you are testing MerryQuery as a student, enter this code by clicking on the **Join** button on your dashboard, and you’ll gain access to the materials associated with that course.",
      "4. **Add Multiple Instructors:** To assign multiple instructors to the same course, toggle the **Students** switch in the Roster menu. This will allow you to change a user’s role, enabling them to also act as an instructor and help manage the course.",
    ],
  },
  {
    id: 5,
    title: "Initiate a Chat Session",
    description: [
      "1. **Access the Chat Feature:** On your course card, click the **Chat** button located at the bottom of the course description to begin setting up a chat session.",
      "2. **Select an Agent:** In the chat interface, locate the dropdown menu near the top-left corner to select the agent for your chat session. If no agent is available, create a new agent as needed.",
      "3. **Create a New Chat Session:** To initiate a new conversation, click the plus button (+) next to the dropdown menu, which will open a prompt to start a new chat.",
      "4. **Name Your Chat Session:** Assign a name to the chat session. Choose a descriptive name related to the discussion topic (e.g., “Homework Help” or “Project Discussion”).",
      "5. **Start Chatting:** Once you’ve named the session, click on the chat name to open the conversation. You are now ready to start chatting with the agent and ask questions!",
    ],
  },
  {
    id: 6,
    title: "Review Student Log Data",
    description: [
      "1. **Access the Student Log Data:** On your course card, click on the gear icon located at the bottom left of the course card.",
      "2. From the menu that appears, select **Student Log Data**.",
      "3. **View Conversations Content and Statistics:** In the Student Log Data section, click on **Chats** to browse through individual conversations.",
      "4. At the top of the log data page, you can see a graph that displays the number of conversations held with each agent.",
    ],
  },
];
