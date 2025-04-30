const data = {
  profile: {
    name: "Amirali Sahraei",
    title: "Machine Learning Engineer | Python Developer",
    bio: `I am a Machine Learning Engineer and Python Developer with practical experience in developing AI-powered applications,
     scalable backend systems, and end-to-end machine learning solutions. My expertise includes fine-tuning deep learning 
     and transformer-based models, building RESTful APIs using FastAPI, Flask, and Django, and deploying cloud-native solutions on AWS.
     I’m proficient with tools like Python, PyTorch, Hugging Face, LangChain, Docker, and Git, and experienced in MLOps and CI/CD workflows. 
     Passionate about solving real-world problems, I strive to build clean, testable, and impactful AI solutions.`
  },
  about: {
    image: "assets/images/profile.png",
    introduction: `I am a Machine Learning Engineer and Python Developer with practical experience in developing AI-powered applications,
     scalable backend systems, and end-to-end machine learning solutions. My expertise includes fine-tuning deep learning 
     and transformer-based models, building RESTful APIs using FastAPI, Flask, and Django, and deploying cloud-native solutions on AWS.
     I’m proficient with tools like Python, PyTorch, Hugging Face, LangChain, Docker, and Git, and experienced in MLOps and CI/CD workflows. 
     Passionate about solving real-world problems, I strive to build clean, testable, and impactful AI solutions.`,
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
      description: `Completed one semester of Master's-level coursework with high performance in an international academic environment.
       This experience broadened my perspective and deepened my understanding of how technology, innovation, and business systems intersect. 
       Courses included Management Information Systems, Turkish and World Economy, Quality Management Systems, Innovation Management, 
       and Scientific Research Methods complementing my technical background in AI and software development.`
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
        `During my time at OCTA, I focused on backend development, leveraging Python and Flask 
        to solve integration challenges and optimize system performance. One of my key achievements 
        was integrating a PHP platform with backend systems by developing a seamless API bridge 
        using Flask, ensuring efficient communication between different technologies. I was 
        responsible for building scalable, maintainable backend solutions, which significantly 
        improved system reliability. In addition to this, I collaborated within an Agile team, 
        adhering to best practices in Git, CI/CD, and maintaining high standards of code quality 
        and documentation. I also developed reusable Python components that enhanced the modularity 
        and scalability of the system, streamlining future development efforts.`
      ]
    }
  ],
  projects: [
    {
      id: 4,
      title: "Gmail Categorization App Powered by LLMs",
      description: `A Django-based web application that fetches, analyzes, and intelligently 
      categorizes Gmail messages using Large Language Models (LLMs) for deeper contextual 
      sentiment understanding. This AI-driven app offers a modern interface to explore and 
      filter your inbox based on nuanced sentiment categories.`,
      technologies: ["Django", "LLMS"],
      icon: "envelope",
      url: "https://github.com/amiralisahraei/django-llm-mail"
    },
    {
      id: 1,
      title: "LLM Fine-Tuning with LoRA for GPT-2",
      description: `Implemented parameter-efficient fine-tuning using Low-Rank Adaptation for 
      GPT-2 models, achieving improved performance with reduced computational resources.`,
      technologies: ["PyTorch", "HuggingFace", "LoRA"],
      icon: "robot",
      url: "https://github.com/amiralisahraei/gpt2-qa-finetuning"
    },
    {
      id: 2,
      title: "Agents-Based RAG System with LLM",
      description: `Developed a Retrieval-Augmented Generation system integrating Tavily Search 
      API to enhance LLM responses with real-time information retrieval.`,
      technologies: ["LangChain", "LLMs", "Tavily"],
      icon: "search",
      url: "https://github.com/amiralisahraei/agent-rag-llm"
    },
    {
      id: 3,
      title: "Lung CT Image Classification",
      description: `FastAPI-based application for classifying lung CT scans using convolutional 
      neural networks, achieving 94% accuracy on test dataset.`,
      technologies: ["FastAPI", "CNN", "Medical Imaging"],
      icon: "lungs",
      url: "https://github.com/amiralisahraei/lung-cancer-classification"
    },
    {
      id: 5,
      title: "Object Detection (YOLO_V8)",
      description: `Real-time object detection system using YOLOv8 for identifying and classifying 
      objects in images and video streams.`,
      technologies: ["YOLOv8", "Computer Vision", "OpenCV"],
      icon: "eye",
      url: "https://github.com/amiralisahraei/vision/tree/master/YOLO_V8"
    },
    {
      id: 6,
      title: "Image Stitching & Registration",
      description: `Panoramic image stitching and medical image registration system using feature 
      detection and homography estimation.`,
      technologies: ["OpenCV", "Image Processing", "Computer Vision"],
      icon: "image",
      url: "https://github.com/amiralisahraei/opencv"
    }
  ],
  skills: {
    "Machine Learning & Deep Learning": [
      "PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "CNNs", "Object Detection",
      "Transfer Learning", "Model Training & Evaluation", "Hyperparameter Tuning", 
      "Cross-Validation", "Feature Engineering", "ROC-AUC", "F1-Score", "Confusion Matrix"
    ],
    "NLP & LLMs": [
      "LangChain", "Hugging Face", "GPT-2/3.5/4", "Prompt Engineering", "LoRA Fine-tuning", 
      "RAG", "NER", "Sentiment Analysis", "Text Classification", "Tokenization"
    ],
    "MLOps & Model Deployment": [
      "Docker", "Apache Airflow", "AWS (EC2, S3, Lambda, API Gateway)", "FastAPI", "Flask", 
      "Django", "Model Deployment", "Monitoring", "Drift Detection", "ML Pipelines"
    ],
    "CI/CD": ["Git", "Jenkins", "GitHub Actions", "Automated Pipelines"],
    "Data Science & Analytics": [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL (PostgreSQL, MySQL)", "MongoDB", 
      "Data Cleaning", "EDA", "Statistical Analysis", "Time Series Forecasting", 
      "Anomaly Detection"
    ],
    "Software Development & Tools": [
      "Python", "Jupyter Notebook", "Google Colab", "Ubuntu/Linux", "Streamlit", "REST APIs", 
      "Agile", "Version Control (Git)", "Unit Testing", "Code Review", "Technical Documentation"
    ]
  },
  achievements: [
    {
      title: "Top 38% Ranking in Kaggle Competition: Binary Prediction with a Rainfall Dataset (2025)",
      description: `Ranked 1626th out of 4381 participants, applying ensemble models such as XGBoost, LightGBM, and RandomForest.
                    Focused on feature engineering and model optimization to enhance prediction accuracy, achieving a high Area Under the
                    ROC Curve (AUC) in a binary classification task.`
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
