export const content = {
    hero: {
        name: "Vanshika Chauhan",
        role: "MCA Student (Machine Learning & AI) | Aspiring AI Engineer",
        tagline: "Building secure, scalable, data-driven technology solutions with a focus on AI and Machine Learning.",
        shortTagline: "Turning data into intelligence.",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "I am an MCA graduate specializing in Machine Learning & AI, with practical exposure to software development and AI systems. I possess strong skills in Python, SQL, system design, documentation, testing, and reporting. My passion lies in building secure, scalable, data-driven technology solutions to solve real-world problems."
    },
    skills: [
        { category: "Programming & Databases", items: ["Python", "C++", "SQL", "HTML", "CSS", "MySQL"] },
        { category: "Data & AI Tools", items: ["scikit-learn", "pandas", "MATLAB", "Excel", "Google Sheets"] },
        { category: "Tools & Platforms", items: ["Git", "Cursor AI", "Lovable", "Antigravity"] },
        { category: "Core Competencies", items: ["System Design", "Requirements Gathering", "Testing & Documentation", "Reporting", "Project Coordination"] }
    ],
    projects: [
        {
            id: 1,
            slug: "workflow-automation",
            title: "Workflow Automation using n8n",
            summary: "Automated internal workflows using n8n to improve operational efficiency.",
            description: "Designed and automated internal workflows using n8n. Integrated APIs and automated repetitive tasks to improve operational efficiency and reduce manual work.",
            problem: "Manual data entry and repetitive tasks across multiple platforms were consuming 15+ hours per week, leading to human errors and delayed reporting.",
            solution: "Implemented an automated workflow system using n8n that connects REST APIs, processes data in real-time, and triggers actions based on specific conditions.",
            features: [
                "Custom n8n workflow design",
                "Automated data synchronization",
                "Error handling and notification system",
                "API rate limiting management",
                "Real-time trigger execution"
            ],
            challenges: "Handling irregular API response structures required implementing robust data normalization nodes within n8n.",
            tech: ["n8n", "REST APIs", "JavaScript", "JSON", "Automation"],
            github: "#",
            demo: "#",
            image: "/projects/n8n-automation.svg",
            detailedSections: [
                {
                    title: "Project Overview",
                    content: "The Workflow Automation project is an AI-Powered Lead Generation & Follow-Up Agent built using n8n and Streamlit. The system automates the entire lead management lifecycle from capture to follow-up and analytics, demonstrating how powerful automation tools can reduce manual effort and improve operational efficiency."
                },
                {
                    title: "Problem Statement",
                    content: "Manual data entry and repetitive tasks across multiple platforms were consuming 15+ hours per week, leading to human errors and delayed reporting. Businesses often struggle with timely lead engagement, resulting in lost opportunities."
                },
                {
                    title: "Solution Architecture",
                    content: "The solution integrates low-code workflow automation with Python-based dashboard development. It connects various services (Webhooks, Google Sheets, Email) through n8n to create a seamless data flow, while Streamlit provides a user-friendly interface for monitoring."
                },
                {
                    title: "Workflow Breakdown",
                    items: [
                        "Webhook captures incoming leads instantly from any source",
                        "Data is automatically organized and stored in Google Sheets",
                        "Automated personalized email acknowledgement is triggered",
                        "Real-time analytics dashboard updates with new data"
                    ]
                },
                {
                    title: "Tech Stack",
                    type: "badges",
                    items: [
                        "n8n (Workflow Automation)",
                        "Streamlit (Frontend Dashboard)",
                        "Google Sheets (Database)",
                        "Python",
                        "JavaScript"
                    ]
                },
                {
                    title: "Key Features",
                    items: [
                        "Instant lead capture via Webhooks",
                        "Automated email follow-ups",
                        "Centralized data storage in Google Sheets",
                        "Real-time analytics dashboard",
                        "Error handling and notification system"
                    ]
                },
                {
                    title: "Impact & Results",
                    content: "The project successfully reduced manual work hours by automating repetitive tasks. It ensured 100% of leads received immediate follow-up, significantly improving engagement rates. The dashboard provided clarity on lead sources and response times, enabling data-driven decision-making."
                },
                {
                    title: "Conclusion",
                    content: "This project showcases the power of combining low-code automation with custom code. It effectively solves a common business problem, delivering a scalable and efficient solution for lead management."
                }
            ]
        },
        {
            id: 2,
            slug: "object-detection",
            title: "Object Detection System",
            summary: "CNN-based object detection achieving 92% accuracy with reduced errors.",
            description: "CNN-based object detection using transfer learning achieving 92% accuracy and reduced detection errors by 18%.",
            problem: "Standard object detection models struggled with occlusion and poor lighting conditions, leading to frequently missed detections in safety-critical environments.",
            solution: "Developed fine-tuned CNN model using transfer learning (YOLO/ResNet backbone) optimized for edge cases. Implemented data augmentation to handle varied lighting conditions.",
            features: [
                "Real-time object detection",
                "High accuracy (92%) under varied conditions",
                "Custom dataset training",
                "bounding box visualization",
                "Low latency inference"
            ],
            challenges: "Balancing model accuracy with inference speed was critical. Optimized model architecture to reduce detection errors by 18% without significant latency increase.",
            tech: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
            github: "https://github.com/vanshikachauhan19",
            demo: "#",
            image: "/projects/object-detection.svg"
        },
        {
            id: 3,
            slug: "chat-with-pdfs",
            title: "Chat with PDFs (Local LLM)",
            summary: "Privacy-first local AI chatbot for querying PDF documents offline.",
            description: "Built a local AI chatbot to answer questions from PDF documents. Privacy-first, offline system with no external API dependency.",
            problem: "Users needed a way to query sensitive documents without uploading data to cloud-based LLMs due to privacy concerns.",
            solution: "Built a Retrieval-Augmented Generation (RAG) pipeline using Ollama (Phi-3) and local embeddings. The system chunks PDFs, embeds text, and retrieves relevant context locally.",
            features: [
                "Local inference (No Internet required)",
                "Privacy-first architecture",
                "Context-aware answers",
                "Fast PDF processing",
                "Support for multiple documents"
            ],
            challenges: "Optimizing retrieval accuracy for complex PDF layouts. Implemented semantic chunking strategies to improve context relevance.",
            tech: ["Ollama (Phi-3)", "LangChain", "Python", "Vector DB", "Streamlit"],
            github: "https://github.com/vanshikachauhan19/PdfBot",
            demo: "#",
            video: "https://drive.google.com/file/d/1I8ZQml3ulJPvY0sQoKwU8X4-PXfArRjm/preview",
            image: "/projects/pdf-chat.svg"
        },
        {
            id: 4,
            slug: "route-mapping",
            title: "Route Mapping & Logistics Web App",
            summary: "Real-time route visualization and delivery optimization using Google Maps API.",
            description: "Responsive web app for real-time route mapping. Integrated Google Maps API for route visualization and delivery optimization.",
            problem: "Logistics coordinators lacked a unified interface to visualize delivery routes and optimize driver assignments in real-time.",
            solution: "Developed a React-based dashboard integrating Google Maps API to plot routes dynamically. Added logic for basic route optimization to reduce travel time.",
            features: [
                "Interactive Google Maps integration",
                "Real-time route plotting",
                "Distance and duration calculation",
                "Responsive dashboard design",
                "Driver assignment interface"
            ],
            challenges: "Managing state for multiple real-time markers and routes without performance lag. Used efficient state management and map rendering techniques.",
            tech: ["React.js", "Google Maps API", "Bootstrap", "JavaScript", "CSS"],
            github: "https://github.com/vanshikachauhan19",
            demo: "#",
            image: "/projects/route-mapping.svg"
        },
        {
            id: 5,
            slug: "smart-parking",
            title: "Smart Parking System",
            summary: "IoT-based system for real-time parking slot availability and congestion reduction.",
            description: "Sensor-based system displaying real-time parking slot availability. Reduced congestion using IoT-based monitoring.",
            problem: "Urban parking congestion caused by drivers circling for available spots, increasing traffic and emissions.",
            solution: "Created an IoT prototype using Arduino and IR sensors to detect slot occupancy. Data is sent to a central display/app to show real-time availability.",
            features: [
                "Real-time occupancy detection",
                "IoT sensor integration",
                "Automated status updates",
                "LED indicator system",
                "Web interface for dashboard"
            ],
            challenges: "Ensuring sensor reliability against environmental interference. Implemented signal debouncing and calibration code for stability.",
            tech: ["IoT", "Arduino", "C++", "Sensors", "ESP8266"],
            github: "https://github.com/vanshikauhan19",
            demo: "#",
            video: "https://drive.google.com/file/d/12vxOBf7ffH4ui5925ScCWXNLnm3z8SC6/preview",
            image: "/projects/smart-parking.svg",
            detailedSections: [
                {
                    title: "Project Overview",
                    content: "The Smart Parking System is an IoT-based automated parking management solution designed to efficiently monitor and manage parking spaces in real time. It serves as a modern solution to traditional parking challenges, leveraging IoT technology to create a seamless experience for drivers and administrators."
                },
                {
                    title: "Problem Statement",
                    content: "Urban areas face significant challenges such as traffic congestion, fuel wastage, and time lost searching for parking. Traditional parking lots lack real-time data, leading to inefficient space utilization and increased carbon emissions from circling vehicles."
                },
                {
                    title: "System Architecture",
                    content: "The system uses Arduino Uno as the central microcontroller. IR or ultrasonic sensors are installed at each parking slot to detect vehicle presence. The architecture is modular and scalable, where parking logs and system data are stored in a database for monitoring and future expansion."
                },
                {
                    title: "Working Mechanism",
                    content: "When the measured distance falls below a predefined threshold, the slot is marked as occupied; otherwise, it is marked as available. Real-time slot status is displayed on an OLED or LCD screen at the parking entrance. Additionally, the system integrates the ESP8266 Wi-Fi module to transmit parking data to a cloud-based IoT dashboard, enabling remote monitoring via a web interface."
                },
                {
                    title: "Key Features",
                    items: [
                        "Real-time monitoring of parking slot availability",
                        "Cloud-based updates for remote access",
                        "1–2 second response time for status changes",
                        "Secure admin access for management",
                        "Automated visual feedback via LED/LCD indicators"
                    ]
                },
                {
                    title: "Practical Impact",
                    content: "The system improves parking efficiency, reduces congestion, and supports smart city infrastructure. It minimizes the time spent searching for parking, thereby reducing fuel consumption and vehicle emissions."
                },
                {
                    title: "Conclusion",
                    content: "This project demonstrates the effective application of IoT in urban infrastructure. By automating parking management, it provides a scalable and cost-effective solution that can be integrated into larger smart city ecosystems."
                }
            ]
        },
        {
            id: 6,
            slug: "breast-cancer-prediction",
            title: "Breast Cancer Prediction using Machine Learning",
            summary: "A reliable and accurate prediction system to assist in early detecton of breast cancer using machine learning.",
            description: "Developed a supervised machine learning model to classify breast tumors as malignant or benign using clinical diagnostic features. The objective was to build a reliable and accurate prediction system to assist in early cancer detection.",
            problem: "Detecting breast cancer at an early stage is critical for patient survival, yet manual diagnosis can be complex and prone to variance in clinical interpretation.",
            solution: "Developed an automated classification system using clinical diagnostic features, leveraging the Random Forest algorithm to provide high-accuracy screening assistance.",
            features: [
                "Data preprocessing and feature selection",
                "Train-test split (80-20 ratio)",
                "Model comparison and performance evaluation",
                "Confusion matrix visualization",
                "Feature importance analysis"
            ],
            challenges: "Achieving high sensitivity to minimize false negatives, ensuring that potential malignancies are not overlooked by the model.",
            tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
            github: "https://github.com/vanshikachauhan19/Breast-Cancer-Prediction-ML",
            demo: "#",
            tags: ["Machine Learning", "Classification", "Random Forest", "Healthcare AI", "Python"],
            image: "/public/projects/breast-cancer-prediction.svg",
            detailedSections: [
                {
                    title: "Project Overview",
                    content: "Developed a supervised machine learning model to classify breast tumors as malignant or benign using clinical diagnostic features. The objective was to build a reliable and accurate prediction system to assist in early cancer detection."
                },
                {
                    title: "Model Details",
                    content: "Implemented and compared multiple classification algorithms including Logistic Regression, Decision Tree, and Random Forest. Based on performance evaluation, Random Forest was selected as the best-performing model."
                },
                {
                    title: "Results",
                    items: [
                        "Training Accuracy: 100%",
                        "Testing Accuracy: 96.49%",
                        "Strong generalization performance",
                        "Minimal false negatives (critical in medical diagnosis)",
                        "Evaluated using Confusion Matrix, Precision, Recall, and F1-score"
                    ]
                },
                {
                    title: "Project Results & Visualizations",
                    type: "case-study-results",
                    mainImage: {
                        src: "/images/confusion-matrix.png",
                        alt: "Confusion Matrix – Model Performance Visualization"
                    },
                    gridImages: [
                        {
                            src: "/images/classification-report.png",
                            alt: "Classification Report – Precision, Recall, F1 Score"
                        },
                        {
                            src: "/images/model-results.png",
                            alt: "Model Results – Training vs Testing Accuracy"
                        }
                    ]
                },
                {
                    title: "Key Features",
                    items: [
                        "Data preprocessing and feature selection",
                        "Train-test split (80-20 ratio)",
                        "Model comparison and performance evaluation",
                        "Confusion matrix visualization",
                        "Feature importance analysis"
                    ]
                },
                {
                    title: "Conclusion",
                    content: "The Random Forest model demonstrated exceptional performance with 96.49% testing accuracy. By minimizing false negatives, the system serves as a powerful diagnostic aid, showcasing the potential of AI in clinical healthcare."
                }
            ]
        }
    ],
    experience: {
        title: "Experience",
        items: [
            {
                role: "AI Engineer",
                company: "Astrenox Technologies",
                period: "June 2025 – July 2025",
                description: "Automated workflows and supported backend architecture for low-code AI tools. Designed processes for efficient data integration and collaborated with cross-functional teams to align solutions with business needs.",
                location: "Gurugram"
            }
        ]
    },
    education: {
        title: "Education",
        items: [
            {
                degree: "MCA (Machine Learning & AI)",
                institution: "UPES Dehradun",
                period: "Expected 2026",
            },
            {
                degree: "BSc Computer Science",
                institution: "HNBGU",
                period: "2021–2024",
            }
        ]
    },
    contact: {
        email: "contact@vanshika.dev",
        linkedin: "https://www.linkedin.com/in/vanshika-chauhan-44aa62286/",
        github: "https://github.com/vanshikachauhan19",
    }
};
