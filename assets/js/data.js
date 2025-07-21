const data = {
  profile: {
    name: "Amirali Sahraei",
    title: "AI/ML & Automation Engineer | Python Developer",
    bio: `Python Developer & Machine Learning Engineer (AI & Automation) with 2+ years of hands-on experience in building scalable backend systems, CI/CD pipelines, and infrastructure automation across AWS and Azure cloud platforms. Proven expertise in Python development, containerization with Docker, and deploying multi-cloud solutions. Skilled in developing automated workflows, API integrations, and monitoring systems using AWS and Azure services. Experienced with Linux administration, version control (Git), and Agile methodologies. Passionate about streamlining development processes and implementing robust, enterprise-grade automation and AI-driven solutions.`
  },
  about: {
    image: "assets/images/profile.jpg",
    introduction: `I am a Python Developer & Machine Learning Engineer with 2+ years of hands-on experience in developing AI-powered applications, scalable backend systems, and infrastructure automation across AWS and Azure. Skilled in fine-tuning deep learning and transformer-based models, building RESTful APIs with FastAPI, Flask, and Django, and deploying containerized solutions using Docker and Kubernetes. Proficient in Python, PyTorch, Hugging Face, LangChain, and experienced in CI/CD, MLOps workflows, and cloud-native development. Passionate about streamlining processes and delivering clean, testable, and production-ready AI and automation solutions.`,
    expertise: [
      {
        icon: "brain",
        title: "Deep Learning",
        description: "PyTorch, TensorFlow, Transformer Architectures"
      },
      {
        icon: "robot",
        title: "LLMs",
        description: "Fine-tuning, RAG Systems, LangChain"
      },
      {
        icon: "eye",
        title: "Computer Vision",
        description: "OpenCV, YOLO, Image Processing"
      }
    ]
  },
  education: [
    {
      period: "Feb 2024 - Jun 2024",
      degree: "Master of International Business",
      institution: "İstanbul Nişantaşı Üniversitesi",
      gpa: "80/100",
      description: `Completed one semester of Master's-level coursework with high performance in an international academic environment. This experience broadened my perspective and deepened my understanding of how technology, innovation, and business systems intersect. Courses included Management Information Systems, Turkish and World Economy, Quality Management Systems, Innovation Management, and Scientific Research Methods complementing my technical background in AI and software development.`
    },
    {
      period: "2019 - 2023",
      degree: "Master of Artificial Intelligence",
      institution: "Kharazmi University",
      gpa: "17.68/20",
      description: ""
    },
    {
      period: "2015 - 2019",
      degree: "Bachelor of Computer Engineering",
      institution: "Mazandaran University",
      gpa: "16.5/20",
      description: ""
    }
  ],
  experience: [
    {
      period: "2021 - 2023",
      title: "Python Developer",
      company: "Startup Studio OCTA",
      responsibilities: [
        `Developed scalable backend solutions using Python and Flask, enhancing system reliability and maintainability. Designed and implemented a Flask-based API bridge to integrate a PHP platform with backend systems, enabling seamless communication with smart contracts. Deployed applications using Docker and Kubernetes (EKS/AKS), optimizing container resource usage for better performance. Collaborated in Agile teams, leveraging Git, CI/CD pipelines, and clean code principles to deliver production-ready, modular Python components.`
      ]
    }
  ],
  projects: [
    {
      id: 7,
      title: "Automated RAG and LLM Fine-Tuning",
      description: `End-to-end pipeline for automated fine-tuning and deployment of LLMs with Retrieval-Augmented Generation (RAG), using AWS SageMaker, FastAPI, and Kubernetes (EKS). Enables seamless model training, scalable deployment, and serving of a context-aware chatbot via RESTful API. CI/CD workflow automates training, containerization, and rollout. Features secure secrets management, multi-cloud infrastructure automation, and is designed for enterprise-grade use cases.`,
      technologies: ["AWS", "Azure", "FastAPI", "Kubernetes", "LLMs", "RAG", "CI/CD", "Docker", "Github Actions"],
      icon: "cloud",
      url: "https://github.com/amiralisahraei/intelligent-rag-service"
    },
    {
      id: 4,
      title: "Gmail Categorization App Powered by LLMs",
      description: `Django-based web application that fetches, analyzes, and categorizes Gmail messages using LLMs for contextual sentiment understanding. Offers a modern interface to explore and filter inbox based on nuanced sentiment categories.`,
      technologies: ["Django", "LLMS"],
      icon: "envelope",
      url: "https://github.com/amiralisahraei/django-llm-mail"
    },
    {
      id: 1,
      title: "LLM Fine-Tuning with LoRA for GPT-2",
      description: `Implemented parameter-efficient fine-tuning using Low-Rank Adaptation for GPT-2 models, achieving improved performance with reduced computational resources.`,
      technologies: ["PyTorch", "HuggingFace", "LoRA"],
      icon: "robot",
      url: "https://github.com/amiralisahraei/gpt2-qa-finetuning"
    },
    {
      id: 2,
      title: "Agents-Based RAG System with LLM",
      description: `Developed a Retrieval-Augmented Generation system integrating Tavily Search API to enhance LLM responses with real-time information retrieval.`,
      technologies: ["LangChain", "LLMs", "Tavily"],
      icon: "search",
      url: "https://github.com/amiralisahraei/agent-rag-llm"
    },
    {
      id: 3,
      title: "Lung CT Image Classification",
      description: `FastAPI-based application for classifying lung CT scans using convolutional neural networks, achieving 94% accuracy on test dataset.`,
      technologies: ["FastAPI", "CNN", "Medical Imaging"],
      icon: "lungs",
      url: "https://github.com/amiralisahraei/lung-cancer-classification"
    },
    {
      id: 5,
      title: "Object Detection (YOLO_V8)",
      description: `Real-time object detection system using YOLOv8 for identifying and classifying objects in images and video streams.`,
      technologies: ["YOLOv8", "Computer Vision", "OpenCV"],
      icon: "eye",
      url: "https://github.com/amiralisahraei/vision/tree/master/YOLO_V8"
    },
    {
      id: 6,
      title: "Image Stitching & Registration",
      description: `Panoramic image stitching and medical image registration system using feature detection and homography estimation.`,
      technologies: ["OpenCV", "Image Processing", "Computer Vision"],
      icon: "image",
      url: "https://github.com/amiralisahraei/opencv"
    }
  ],
  skills: {
  "Machine Learning & Deep Learning": [
    "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "CNNs", "Object Detection",
    "Transfer Learning", "Model Training & Evaluation", "Hyperparameter Tuning", 
    "Cross-Validation", "Feature Engineering", "ROC-AUC", "F1-Score", "Confusion Matrix"
  ],
  "NLP & LLMs": [
    "LangChain", "Hugging Face", "GPT-2/3.5/4", "Prompt Engineering", "LoRA Fine-tuning", 
    "RAG", "NER", "Sentiment Analysis", "Text Classification", "Tokenization"
  ],
  "MLOps & Model Deployment": [
    "SageMaker", "Azure ML", "Docker", "Kubernetes (EKS, AKS)", "Helm (basic)", 
    "Apache Airflow", "Model Deployment", "Monitoring", "Drift Detection", 
    "Automated Retraining", "ML Pipelines", "A/B Testing"
  ],
  "Cloud & Infrastructure": [
    "AWS (EC2, S3, Lambda, API Gateway, CloudWatch, IAM, VPC, Step Functions, SageMaker Pipelines)",
    "Azure (VMs, Storage Accounts, API Management, Azure ML, Functions, Logic Apps, Event Grid)",
    "Linux/Ubuntu Administration", "VM Management", "Network Configuration"
  ],
  "CI/CD & DevOps": [
    "Git", "GitHub Actions", "Jenkins", "CI/CD Pipelines", "Ansible", 
    "Infrastructure as Code", "Configuration Management", "Workflow Automation", 
    "n8n Automation Platform"
  ],
  "Data Science & Analytics": [
    "Pandas", "NumPy", "SQL (PostgreSQL, MySQL)", "MongoDB", "Statistical Analysis", 
    "Data Cleaning", "EDA", "Time Series Forecasting", "Anomaly Detection"
  ],
  "Software Engineering & APIs": [
    "Python (Advanced)", "Flask", "FastAPI", "Django", "REST APIs", 
    "Microservices", "Serverless Architectures", "Third-Party Integrations",
    "Selenium", "JavaScript"
  ],
  "Tools & Development Practices": [
    "Jupyter Notebook", "Google Colab", "Streamlit", "Version Control (Git)", 
    "Unit Testing", "Automated Testing Frameworks", "Agile Methodologies", 
    "Code Review", "Technical Documentation"
  ]
  },
  achievements: [
    {
      title: "Top 38% Ranking in Kaggle Competition: Binary Prediction with a Rainfall Dataset (2025)",
      description: `Ranked 1626th out of 4381 participants, applying ensemble models such as XGBoost, LightGBM, and RandomForest. Focused on feature engineering and model optimization to enhance prediction accuracy, achieving a high Area Under the ROC Curve (AUC) in a binary classification task.`
    }
  ],
  certificates: [
    "Finetuning Large Language Models - DeepLearning.AI",
    "LangChain for LLM Application Development - DeepLearning.AI",
    "Machine Learning Specialization - DeepLearning.AI",
    "ChatGPT Prompt Engineering for Developers - DeepLearning.AI",
    "Open Source Models with Hugging Face - DeepLearning.AI",
    "Convolutional Neural Network - DeepLearning.AI"
  ],
  contact: {
    email: "a.sahraei98@gmail.com",
    phone: "+98 123 456 7890",
    availability: "Currently available for new opportunities",
    social: {
      linkedin: "https://www.linkedin.com/in/amirali-sahraei98",
      github: "https://github.com/amiralisahraei"
    },
    locations: [
      { city: "Tehran", country: "Iran", timezone: "IRST (UTC+3:30)" },
      { city: "Remote", country: "Global", timezone: "Flexible" }
    ],
    workingHours: [
      { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM (IRST)" },
      { days: "Weekends", hours: "Available for urgent requests" }
    ]
  }
};
