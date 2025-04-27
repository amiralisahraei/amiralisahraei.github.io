const data = {
  profile: {
    name: "Amirali Sahraei",
    title: "Machine Learning Engineer",
    bio: `Machine Learning Engineer with expertise in developing and deploying AI solutions,
    including deep learning, LLMs, and computer vision. Proficient in fine-tuning transformers,
    MLOps, and cloud-based model deployment. Strong skills in Python, PyTorch, LangChain, and AWS. 
    Passionate about leveraging AI to solve real-world problems and drive business impact.`
  },
  about: {
    image: "assets/images/profile.png",
    introduction: "I'm a passionate Machine Learning Engineer with expertise in developing and deploying AI solutions. My journey in artificial intelligence began during my Master's program at Kharazmi University, where I specialized in deep learning and computer vision.",
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
      period: "2019 - 2023",
      degree: "Master of Artificial Intelligence",
      institution: "Kharazmi University",
      gpa: "17.68/20"
    },
    {
      period: "2015 - 2019",
      degree: "Bachelor of Computer Engineering",
      institution: "Mazandaran University",
      gpa: "16.5/20"
    }
  ],
  experience: [
    {
      period: "2021 - 2023",
      title: "Solidity Developer",
      company: "Startup Studio OCTA",
      responsibilities: [
        "Developed and optimized smart contracts (ERC-20 & ERC-721)",
        "Focus on security and performance"
      ]
    }
  ],
  projects: [
    {
      id: 4,
      title: "Gmail Categorization App Powered by LLMs",
      description: "A Django-based web application that fetches, analyzes, and intelligently categorizes Gmail messages using Large Language Models (LLMs) for deeper contextual sentiment understanding. This AI-driven app offers a modern interface to explore and filter your inbox based on nuanced sentiment categories.",
      technologies: ["Django", "LLMS"],
      icon: "envelope",
      url: "https://github.com/amiralisahraei/django-llm-mail"
    },
    {
      id: 1,
      title: "LLM Fine-Tuning with LoRA for GPT-2",
      description: "Implemented parameter-efficient fine-tuning using Low-Rank Adaptation for GPT-2 models, achieving improved performance with reduced computational resources.",
      technologies: ["PyTorch", "HuggingFace", "LoRA"],
      icon: "robot",
      url: "https://github.com/amiralisahraei/gpt2-qa-finetuning"
    },
    {
      id: 2,
      title: "Agents-Based RAG System with LLM",
      description: "Developed a Retrieval-Augmented Generation system integrating Tavily Search API to enhance LLM responses with real-time information retrieval.",
      technologies: ["LangChain", "LLMs", "Tavily"],
      icon: "search",
      url: "https://github.com/amiralisahraei/agent-rag-llm"
    },
    {
      id: 3,
      title: "Lung CT Image Classification",
      description: "FastAPI-based application for classifying lung CT scans using convolutional neural networks, achieving 94% accuracy on test dataset.",
      technologies: ["FastAPI", "CNN", "Medical Imaging"],
      icon: "lungs",
      url: "https://github.com/amiralisahraei/lung-cancer-classification"
    },
    {
      id: 5,
      title: "Object Detection (YOLO_V8)",
      description: "Real-time object detection system using YOLOv8 for identifying and classifying objects in images and video streams.",
      technologies: ["YOLOv8", "Computer Vision", "OpenCV"],
      icon: "eye",
      url: "https://github.com/amiralisahraei/vision/tree/master/YOLO_V8"
    },
    {
      id: 6,
      title: "Image Stitching & Registration",
      description: "Panoramic image stitching and medical image registration system using feature detection and homography estimation.",
      technologies: ["OpenCV", "Image Processing", "Computer Vision"],
      icon: "image",
      url: "https://github.com/amiralisahraei/opencv"
    }
  ],
  skills: {
    "Machine Learning & Deep Learning": [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "OpenCV", level: 85 }
    ],
    "NLP & LLMs": [
      { name: "LangChain", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "GPT Models", level: 85 },
      { name: "Transformers", level: 85 },
      { name: "Fine-tuning LLMs", level: 90 }
    ],
    "MLOps & Model Deployment": [
      { name: "Docker", level: 85 },
      { name: "Apache Airflow", level: 80 },
      { name: "AWS", level: 85 },
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 85 }
    ],
    "CI/CD": [
      { name: "Git", level: 90 },
      { name: "Jenkins", level: 80 },
      { name: "GitHub Actions", level: 85 },
      { name: "Automated Pipelines", level: 85 },
      { name: "Docker", level: 85 }
    ],
    "Data Science & Analytics": [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 90 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    "Software Development & Tools": [
      { name: "Python", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Ubuntu", level: 85 },
      { name: "Google Colab", level: 90 },
      { name: "GitHub", level: 90 }
    ]
  },
  achievements: [
    {
      title: "Top 10% in Kaggle Competition",
      description: "Ranked 200th out of 1924 participants in binary prediction with rainfall dataset"
    }
  ],
  certificates: [
    "Finetuning Large Language Models - DeepLearning.AI",
    "LangChain for LLM Application Development - DeepLearning.AI",
    "Machine Learning Specialization - DeepLearning.AI"
  ],
  contact: {
    email: "a.sahraei98@gmail.com",
    phone: "+98 123 456 7890",
    availability: "Currently available for new opportunities",
    social: {
      linkedin: "https://www.linkedin.com/in/amirali-sahraei98",
      github: "https://github.com/amiralisahraei",
    },
    locations: [
      {
        city: "Tehran",
        country: "Iran",
        timezone: "IRST (UTC+3:30)"
      },
      {
        city: "Remote",
        country: "Global",
        timezone: "Flexible"
      }
    ],
    workingHours: [
      {
        days: "Monday - Friday",
        hours: "9:00 AM - 5:00 PM (IRST)"
      },
      {
        days: "Weekends",
        hours: "Available for urgent requests"
      }
    ]
  }
};
