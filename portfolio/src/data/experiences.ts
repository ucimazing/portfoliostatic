import { IExperience } from "./types";

const experiences : Array<IExperience> = [
  {
    company: "Deloitte USI",
    role: "Software Developer",
    work: [
      "Developed robust Spring Boot APIs for PnL, Holding, and Insurance reports in a fintech trading environment",
      "Automated report generation in Excel using Apache POI and in PDF format using OpenPDF and iText",
      "Employed usage of MongoDB PostgreSQL for efficient storage of persistent data and Redis for caching",
      "Built frontend using ReactJS in clean-architecture, ensuring modularity and maintainability in the application"
    ],
    joining_date: "OCT 2024",
    ending_date: "Present"
  },
  {
    company: "Algouniversity",
    role: "Fullstack Externship",
    work: [
      "Engineered a robust payment system using NodeJS for an e-commerce platform, integrating Stripe and Razorpay",
      "Designed and implemented RESTful APIs in Node.js, enabling seamless communication between front-end and back-end systems",
      "Successfully deployed and managed application code on AWS ECS, ensuring reliable and scalable cloud infrastructure",
      "Created and optimized responsive landing pages using NextJS and Tailwind CSS, enhancing user engagement",
    ],
    joining_date: "Jan 2025",
    ending_date: "June 2025"
  },

]

export default experiences;