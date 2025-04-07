const data = {
  profile: {
    name: "Amirali Sahraei",
    title: "Machine Learning Engineer",
    bio: "Machine Learning Engineer with hands-on experience in developing and deploying AI solutions, including deep learning models, large language models (LLMs), and computer vision applications."
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
      id: 1,
      title: "LLM Fine-Tuning with LoRA for GPT-2",
      description: "Implemented parameter-efficient fine-tuning using Low-Rank Adaptation for GPT-2 models, achieving improved performance with reduced computational resources.",
      technologies: ["PyTorch", "HuggingFace", "LoRA"],
      icon: "robot"
    },
    {
      id: 2,
      title: "Agents-Based RAG System with LLM",
      description: "Developed a Retrieval-Augmented Generation system integrating Tavily Search API to enhance LLM responses with real-time information retrieval.",
      technologies: ["LangChain", "LLMs", "Tavily"],
      icon: "search"
    },
    {
      id: 3,
      title: "Lung CT Image Classification",
      description: "FastAPI-based application for classifying lung CT scans using convolutional neural networks, achieving 94% accuracy on test dataset.",
      technologies: ["FastAPI", "CNN", "Medical Imaging"],
      icon: "lungs"
    },
    {
      id: 4,
      title: "Gmail ETL Categorization",
      description: "Automated email categorization system using NLP techniques to classify and route incoming emails to appropriate departments.",
      technologies: ["NLP", "ETL", "Python"],
      icon: "envelope"
    },
    {
      id: 5,
      title: "Object Detection (YOLO_V8)",
      description: "Real-time object detection system using YOLOv8 for identifying and classifying objects in images and video streams.",
      technologies: ["YOLOv8", "Computer Vision", "OpenCV"],
      icon: "eye"
    },
    {
      id: 6,
      title: "Image Stitching & Registration",
      description: "Panoramic image stitching and medical image registration system using feature detection and homography estimation.",
      technologies: ["OpenCV", "Image Processing", "Computer Vision"],
      icon: "image"
    }
  ],
  skills: [
    { name: "PyTorch", level: 95 },
    { name: "Python", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "AWS", level: 85 },
    { name: "Solidity", level: 80 }
  ],
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
    email: "amirali.sahraei@example.com",
    phone: "+98 123 456 7890",
    availability: "Currently available for new opportunities",
    social: {
      linkedin: "https://linkedin.com/in/amiralisahraei",
      github: "https://github.com/amiralisahraei",
      twitter: "https://twitter.com/amiralisahraei",
      scholar: "https://scholar.google.com/citations?user=YOUR_PROFILE"
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
